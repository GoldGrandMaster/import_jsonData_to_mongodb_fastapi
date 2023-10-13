import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const verywellHealth = {
  name: "verywellHealth",
  Model: LifestyleAndHealth,
  url: "https://www.verywellhealth.com/health-a-z-4014770",
  linkSelector: [".link-list-link__deprecated "],
  articleSelectors: {
    titleSelector: [".article-heading", "h1"],
    dateSelector: ["time", ".mntl-attribution__item-date"],
    contentSelector: [".article-content p"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
      ".article-content h6",
      ".article-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(verywellHealth, 2);
})();

export default verywellHealth;
