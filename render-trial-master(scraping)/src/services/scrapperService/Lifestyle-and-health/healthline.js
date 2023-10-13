import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const healthline = {
  name: "healthline",
  Model: LifestyleAndHealth,
  url: "https://www.healthline.com/",
  linkSelector: [".css-1vdhmr6", ".css-1iqrfcu", ".css-16e3huk", ".css-1orbo1"],
  articleSelectors: {
    titleSelector: [".css-6jxmuv", "h1"],
    dateSelector: [
      "time",
      "[data-testid='byline'] div:nth-child(2) span:nth-child(2)",
    ],
    contentSelector: [".article-body p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(healthline, 2);
})();

export default healthline;
