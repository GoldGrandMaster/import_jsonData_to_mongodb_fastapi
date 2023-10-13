import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const science = {
  name: "science",
  saveDir: "Science-and-Tech",
  url: "https://www.science.org/news",
  linkSelector: [".card-header a"],
  articleSelectors: {
    titleSelector: [".news-article__hero__title"],
    dateSelector: [".news-article__hero__date"],
    contentSelector: [".news-article__hero__subtitle"],
    articleContentSelector: [
      ".bodySection p",
      ".bodySection h2",
      ".bodySection h3",
      ".bodySection h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(science, 2);
})();

export default science;
