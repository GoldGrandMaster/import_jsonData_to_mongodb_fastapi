import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const vg247 = {
  name: "vg247",
  Model: Gaming,
  url: "https://www.vg247.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h2", ".strapline"],
    articleContentSelector: [
      ".article_body_content p",
      ".article_body_content h2",
      ".article_body_content h3",
      ".article_body_content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(vg247, 2);
})();

export default vg247;
