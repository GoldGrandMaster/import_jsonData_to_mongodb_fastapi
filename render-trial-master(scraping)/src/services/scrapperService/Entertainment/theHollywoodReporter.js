import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const theHollywoodReporter = {
  name: "theHollywoodReporter",
  Model: Entertainment,
  url: "https://www.hollywoodreporter.com/",
  linkSelector: [".c-title__link", ".o-card__content > a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [".a-content >  p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(theHollywoodReporter, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theHollywoodReporter, 2);
})();

export default theHollywoodReporter;
