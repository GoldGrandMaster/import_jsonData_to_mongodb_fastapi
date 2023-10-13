import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const nikkeiAsianReview = {
  name: "nikkeiAsianReview",
  saveDir: "Biz-and-Finance",
  url: "https://asia.nikkei.com/",
  linkSelector: [
    ".spotlight__title",
    ".article-block__content a",
    ".collection-article__title",
  ],
  articleSelectors: {
    titleSelector: [".article-header__title"],
    dateSelector: ["time", ".timestamp"],
    contentSelector: [".article-header__sub-title"],
    articleContentSelector: ["#article-body-preview p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(nikkeiAsianReview, 2);
})();

export default nikkeiAsianReview;
