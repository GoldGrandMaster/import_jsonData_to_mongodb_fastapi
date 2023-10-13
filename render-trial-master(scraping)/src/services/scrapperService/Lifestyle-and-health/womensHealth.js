import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const womensHealth = {
  name: "womensHealth",
  Model: LifestyleAndHealth,
  url: "https://www.womenshealthmag.com/",
  linkSelector: [".enk2x9t2"],
  articleSelectors: {
    titleSelector: [".css-1fzst3h", "h1"],
    dateSelector: ["time", ".css-w0ebia"],
    contentSelector: [".css-q9lckh"],
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
  if (isEntryFile) await getArticles(womensHealth, 2);
})();

export default womensHealth;
