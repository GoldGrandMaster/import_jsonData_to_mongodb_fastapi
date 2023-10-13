import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const forbes = {
  name: "forbes",
  Model: BizAndFinance,
  url: "https://www.forbes.com/?sh=35fe67582254",
  linkSelector: [".headlink", ".for-you__headline", ".data-viz__title"],
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
  const res = await getArticles(forbes, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(forbes, 2);
})();

export default forbes;
