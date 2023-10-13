import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const theEconomist = {
  name: "theEconomist",
  Model: BizAndFinance,
  url: "https://www.economist.com/",
  linkSelector: [
    ".css-tati6o a",
    ".css-eo5df6 a",
    ".css-f9lqq0 a",
    ".css-juaghv a",
  ],
  articleSelectors: {
    titleSelector: [".css-1bo5zl0"],
    dateSelector: ["time"],
    contentSelector: [".css-13b9ga2"],
    articleContentSelector: [".article__body-text"],
  },
};

export const getNews = async () => {
  const res = await getArticles(theEconomist, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theEconomist, 2);
})();

export default theEconomist;
