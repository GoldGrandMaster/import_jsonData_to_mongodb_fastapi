import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const wallStreetJournal = {
  name: "wallStreetJournal",
  Model: BizAndFinance,
  url: "https://www.wsj.com/",
  linkSelector: [".WSJTheme--headline--unZqjb45 > a", ".style--link--1DquuyN1"],
  articleSelectors: {
    titleSelector: [".fs-headline"],
    dateSelector: [".metrics-text"],
    contentSelector: [".article-body strong"],
    articleContentSelector: [
      ".article-body > p",
      " .article-body > h1",
      " .article-body > h2",
      " .article-body > h3",
      " .article-body > h4",
      " .article-body > h5",
      " .article-body > h6",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(wallStreetJournal, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(wallStreetJournal, 2);
})();

export default wallStreetJournal;
