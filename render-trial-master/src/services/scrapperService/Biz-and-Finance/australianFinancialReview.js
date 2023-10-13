import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const australianFinancialReview = {
  name: "australianFinancialReview",
  saveDir: "Biz-and-Finance",
  url: "https://www.afr.com/",
  linkSelector: ["._3o1rI", "._1d_DB", "._1IYDa", "._20-Rx", "._1naPl"],
  articleSelectors: {
    titleSelector: ["[data-testid='ArticleHeader-headline']"],
    dateSelector: ["time"],
    contentSelector: [".tl7wu p"],
    articleContentSelector: [".tl7wu p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(australianFinancialReview, 2);
})();

export default australianFinancialReview;
