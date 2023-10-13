import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const businessInsider = {
  name: "businessInsider",
  Model: BizAndFinance,
  // url: "https://www.businessinsider.com/?r=US&IR=T",
  url: "https://africa.businessinsider.com/?r=US&IR=Tt",
  linkSelector: [
    // ".tout-title-link",
    ".gradient-overlay a",
  ],
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
  const res = await getArticles(businessInsider, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(businessInsider, 2);
})();

export default businessInsider;
