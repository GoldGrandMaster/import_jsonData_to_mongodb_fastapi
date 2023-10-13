import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const polygon = {
  name: "polygon",
  Model: Gaming,
  url: "https://www.polygon.com/",
  linkSelector: [
    "[data-analytics-link='feature:image']",
    '[data-analytics-link="article"]',
  ],
  articleSelectors: {
    titleSelector: [".c-page-title"],
    dateSelector: ["time"],
    contentSelector: [".c-entry-summary"],
    articleContentSelector: [
      ".c-entry-content p",
      ".c-entry-content h2",
      ".c-entry-content h3",
      ".c-entry-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(polygon, 2);
})();

export default polygon;
