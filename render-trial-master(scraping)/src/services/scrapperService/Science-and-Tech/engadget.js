import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const engadget = {
  name: "engadget",
  Model: ScienceAndTech,
  url: "https://www.engadget.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["[data-component='HorizontalAuthorInfo'] span:nth-child(3)"],
    contentSelector: ["h2"],
    articleContentSelector: [
      "[data-component='ArticleBody'] p",
      "[data-component='ArticleBody'] h1",
      "[data-component='ArticleBody'] h2",
      "[data-component='ArticleBody'] h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(engadget, 2);
})();

export default engadget;
