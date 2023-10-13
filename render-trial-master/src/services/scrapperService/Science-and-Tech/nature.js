import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const nature = {
  name: "nature",
  saveDir: "Science-and-Tech",
  url: "https://www.nature.com/",
  linkSelector: [".c-card__link"],
  articleSelectors: {
    titleSelector: [".c-article-magazine-title"],
    dateSelector: ["time"],
    contentSelector: [".c-article-teaser-text"],
    articleContentSelector: [
      ".c-article-body p",
      ".c-article-body h2",
      ".c-article-body h3",
      ".c-article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(nature, 2);
})();

export default nature;
