import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const scientificAmerican = {
  name: "scientificAmerican",
  Model: ScienceAndTech,
  url: "https://www.scientificamerican.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: [".t_article-title"],
    dateSelector: ["time"],
    contentSelector: [".t_article-subtitle"],
    articleContentSelector: [".article-text p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(scientificAmerican, 2);
})();

export default scientificAmerican;
