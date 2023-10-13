import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const mindbodygreen = {
  name: "mindbodygreen",
  Model: LifestyleAndHealth,
  url: "https://www.mindbodygreen.com/",
  linkSelector: [
    ".top-featured-large__image-link",
    ".top-featured__card-headline a",
    ".full-card-link",
  ],
  articleSelectors: {
    titleSelector: [".sc-181uops-5", "h1"],
    dateSelector: ["time", ".sc-1l4o0aw-6"],
    contentSelector: [".sc-11rlt5o-5 p"],
    articleContentSelector: [
      ".sc-11rlt5o-5 p",
      ".sc-11rlt5o-5 h2",
      ".sc-11rlt5o-5 h3",
      ".sc-11rlt5o-5 h4",
      ".sc-11rlt5o-5 h5",
      ".sc-11rlt5o-5 h6",
      ".sc-11rlt5o-5 ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(mindbodygreen, 2);
})();

export default mindbodygreen;
