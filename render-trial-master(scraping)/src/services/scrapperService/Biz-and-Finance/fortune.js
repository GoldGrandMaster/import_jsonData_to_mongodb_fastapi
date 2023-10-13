import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const fortune = {
  name: "fortune",
  Model: BizAndFinance,
  url: "https://fortune.com/",
  linkSelector: [".sc-fmPOXC a"],
  articleSelectors: {
    titleSelector: [".sc-fxTzYC h1"],
    dateSelector: [".sc-uokDu", "[datetime]", "time"],
    contentSelector: [".paywall p"],
    articleContentSelector: [
      ".paywall p",
      ".paywall h1",
      ".paywall h2",
      ".paywall h3",
      ".paywall h4",
      ".paywall h5",
      ".paywall h6",
      ".paywall ul",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(fortune, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(fortune, 2);
})();

export default fortune;
