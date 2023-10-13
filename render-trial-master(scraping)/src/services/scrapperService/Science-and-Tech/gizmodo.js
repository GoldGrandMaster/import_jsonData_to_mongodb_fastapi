import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const gizmodo = {
  name: "gizmodo",
  Model: ScienceAndTech,
  url: "https://www.gizmodo.com/",
  linkSelector: [".sc-1pw4fyi-7 .js_link"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h2"],
    articleContentSelector: [".sc-r43lxo-1 p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(gizmodo, 2);
})();

export default gizmodo;
