import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const health = {
  name: "health",
  Model: LifestyleAndHealth,
  url: "https://www.health.com/",
  linkSelector: ["a.card"],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: ["time", ".mntl-attribution__item-date"],
    contentSelector: [".article-subheading"],
    articleContentSelector: [
      ".structured-content p",
      ".structured-content h2",
      ".structured-content h3",
      ".structured-content h4",
      ".structured-content h5",
      ".structured-content h6",
      ".structured-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(health, 2);
})();

export default health;
