import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const prevention = {
  name: "prevention",
  Model: LifestyleAndHealth,
  url: "https://www.prevention.com/",
  linkSelector: ["[data-vars-cta]"],
  articleSelectors: {
    titleSelector: [".css-1frnfmo", "h1"],
    dateSelector: ["time"],
    contentSelector: [".css-oeklvx p"],
    articleContentSelector: [
      ".article-body-content p",
      ".article-body-content h2",
      ".article-body-content h3",
      ".article-body-content h4",
      ".article-body-content h5",
      ".article-body-content h6",
      ".article-body-content ul",
      ".listicle-intro p",
      ".listicle-intro h2",
      ".listicle-intro h3",
      ".listicle-intro h4",
      ".listicle-intro h5",
      ".listicle-intro h6",
      ".listicle-intro ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(prevention, 2);
})();

export default prevention;
