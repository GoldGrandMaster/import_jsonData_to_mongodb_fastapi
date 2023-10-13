import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const mensHealth = {
  name: "mensHealth",
  Model: LifestyleAndHealth,
  url: "https://www.menshealth.com/",
  linkSelector: [".enk2x9t2"],
  articleSelectors: {
    titleSelector: [".css-sgwfvb", "h1"],
    dateSelector: ["time", ".css-w0ebia"],
    contentSelector: [".css-gpc83z"],
    articleContentSelector: [
      ".article-body-content p",
      ".article-body-content h2",
      ".article-body-content h3",
      ".article-body-content h4",
      ".article-body-content h5",
      ".article-body-content h6",
      ".article-body-content ul",
      ".listicle-container p",
      ".listicle-container h2",
      ".listicle-container h3",
      ".listicle-container h4",
      ".listicle-container h5",
      ".listicle-container h6",
      ".listicle-container ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(mensHealth, 2);
})();

export default mensHealth;
