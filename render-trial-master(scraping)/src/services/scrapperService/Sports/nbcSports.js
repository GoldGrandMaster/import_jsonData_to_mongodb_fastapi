import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const nbcSports = {
  name: "nbcSports",
  Model: Sports,
  url: "https://www.nbcsports.com/",
  linkSelector: [".link"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: [".entry-date"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(nbcSports, 2);
})();

export default nbcSports;
