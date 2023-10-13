import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const marketWatch = {
  name: "marketWatch",
  Model: BizAndFinance,
  url: "https://www.marketwatch.com/",
  linkSelector: [".article__headline a"],
  articleSelectors: {
    titleSelector: [".post-headline", ".article-headline"],
    dateSelector: ["[data-e2e-name='byline-timestamp']", "time"],
    contentSelector: [".enhanced-subtitle"],
    articleContentSelector: [
      ".content-lock-content p",
      ".content-lock-content h2",
      ".article-body-text p",
      ".article-body-text h3",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(marketWatch, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(marketWatch, 2);
})();

export default marketWatch;
