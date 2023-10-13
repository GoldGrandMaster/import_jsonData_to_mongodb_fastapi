import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const everydayHealth = {
  name: "everydayHealth",
  Model: LifestyleAndHealth,
  url: "https://www.everydayhealth.com/",
  linkSelector: [
    ".homepage-hero__article-link",
    ".homepage-hero__article-link",
    ".rc-section-article__link",
  ],
  articleSelectors: {
    titleSelector: [
      ".eh-pg-headline__title",
      ".hero-section__content-headline",
    ],
    dateSelector: ["time", ".mntl-attribution__item-date"],
    contentSelector: [".eh-pg-headline__dek"],
    articleContentSelector: [
      ".eh-content-block__content p",
      ".eh-content-block__content h2",
      ".eh-content-block__content h3",
      ".eh-content-block__content h4",
      ".eh-content-block__content h5",
      ".eh-content-block__content h6",
      ".eh-content-block__content ul",
      ".photogallery-item p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(everydayHealth, 2);
})();

export default everydayHealth;
