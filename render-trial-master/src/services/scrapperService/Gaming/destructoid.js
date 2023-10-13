import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const destructoid = {
  name: "destructoid",
  Model: Gaming,
  url: "https://www.destructoid.com/",
  linkSelector: [".hero.main > a", ".hero.sub > a", ".post-title"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time", ".post-data strong"],
    contentSelector: ["header h2", ".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(destructoid, 2);
})();

export default destructoid;
