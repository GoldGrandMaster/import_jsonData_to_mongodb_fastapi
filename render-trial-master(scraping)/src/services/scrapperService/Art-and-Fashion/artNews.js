import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const artNews = {
  name: "artNews",
  Model: ArtAndFashion,
  url: "https://www.artnews.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".article-title", "h1"],
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: [".summary"],
    articleContentSelector: [
      ".a-content p",
      ".a-content h2",
      ".a-content h3",
      ".a-content h4",
      ".a-content h5",
      ".a-content h6",
      ".a-content ul",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(artNews, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(artNews, 2);
})();

export default artNews;
