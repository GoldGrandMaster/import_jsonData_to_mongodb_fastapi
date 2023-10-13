import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const popularScience = {
  name: "popularScience",
  Model: ScienceAndTech,
  url: "https://www.popsci.com/",
  linkSelector: [".item-meta a"],
  articleSelectors: {
    titleSelector: [".u-entryTitle"],
    dateSelector: ["time?datetime"],
    contentSelector: [".Article-excerpt"],
    articleContentSelector: [
      ".Article-bodyText p",
      ".Article-bodyText h1",
      ".Article-bodyText h2",
      ".Article-bodyText h3",
      ".Article-bodyText h4",
      ".Article-bodyText h5",
      ".Article-bodyText h6",
      ".Article-bodyText ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(popularScience, 2);
})();

export default popularScience;
