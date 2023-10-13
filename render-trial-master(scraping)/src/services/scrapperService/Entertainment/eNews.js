import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const eNews = {
  name: "eNews",
  Model: Entertainment,
  url: "https://www.eonline.com/",
  linkSelector: [".widget__title"],
  articleSelectors: {
    titleSelector: [".article-detail__title"],
    dateSelector: [".article-detail__meta__date"],
    contentSelector: [".article-detail__subheader"],
    articleContentSelector: [".article-detail__text-only p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(eNews, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(eNews, 2);
})();

export default eNews;
