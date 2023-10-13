import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const financialTimes = {
  name: "financialTimes",
  Model: BizAndFinance,
  url: "https://www.ft.com/",
  linkSelector: ["[data-trackable='heading-link']"],
  articleSelectors: {
    titleSelector: [".LiveBlogHeader-headline", ".ArticleHeader-headline"],
    dateSelector: ["time"],
    contentSelector: [".ArticleBody-articleBody p"],
    articleContentSelector: [
      ".FeaturedContent-articleBody p",
      ".FeaturedContent-articleBody h2",
      ".LiveBlogBody-articleBody p",
      ".ArticleBody-articleBody p",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(financialTimes, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(financialTimes, 2);
})();

export default financialTimes;
