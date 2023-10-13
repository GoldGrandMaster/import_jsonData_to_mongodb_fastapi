import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const usWeekly = {
  name: "usWeekly",
  Model: Entertainment,
  url: "https://www.usmagazine.com/",
  linkSelector: ["a.item", ".content-card a"],
  articleSelectors: {
    titleSelector: [".content-title"],
    dateSelector: [".content-published-date"],
    contentSelector: [".article-content p"],
    articleContentSelector: [".article-content p", ".article-content h3"],
  },
};

export const getNews = async () => {
  const res = await getArticles(usWeekly, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(usWeekly, 2);
})();

export default usWeekly;
