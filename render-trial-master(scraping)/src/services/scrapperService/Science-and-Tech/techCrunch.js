import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const techCrunch = {
  name: "techCrunch",
  Model: ScienceAndTech,
  url: "https://techcrunch.com/",
  linkSelector: [".mini-view__item__title a", ".post-block__title__link"],
  articleSelectors: {
    titleSelector: [".article__title"],
    dateSelector: ["time"],
    contentSelector: [".article-content p"],
    articleContentSelector: [".article-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(techCrunch, 2);
})();

export default techCrunch;
