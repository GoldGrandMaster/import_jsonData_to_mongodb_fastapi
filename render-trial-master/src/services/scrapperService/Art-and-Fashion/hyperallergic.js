import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const hyperallergic = {
  name: "hyperallergic",
  Model: ArtAndFashion,
  url: "https://hyperallergic.com/",
  linkSelector: [".post-thumbnail a", ".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title ", "h1"],
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: [".newspack-post-subtitle"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
};
export const getNews = async () => {
  const res = await getArticles(hyperallergic, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(hyperallergic, 2);
})();

export default hyperallergic;
