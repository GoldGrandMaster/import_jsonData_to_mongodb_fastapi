import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const mitTechnologyReview = {
  name: "mitTechnologyReview",
  saveDir: "Science-and-Tech",
  url: "https://www.technologyreview.com/",
  linkSelector: ["[data-event-category='homepage']"],
  articleSelectors: {
    titleSelector: [".contentArticleHeader__title--rp01p"],
    dateSelector: [".contentArticleHeader__publishDate--goc9R"],
    contentSelector: [".contentArticleHeader__deck--3N9MX"],
    articleContentSelector: [
      ".contentBody__content--1lbXn p",
      ".contentBody__content--1lbXn h2",
      ".contentBody__content--1lbXn h3",
      ".contentBody__content--1lbXn h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(mitTechnologyReview, 2);
})();

export default mitTechnologyReview;
