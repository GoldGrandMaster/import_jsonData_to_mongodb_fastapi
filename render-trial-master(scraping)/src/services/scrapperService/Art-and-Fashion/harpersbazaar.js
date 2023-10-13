import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const harpersbazaar = {
  name: "harpersbazaar",
  Model: ArtAndFashion,
  url: "https://www.harpersbazaar.com/",
  linkSelector: [".enk2x9t2"],
  articleSelectors: {
    titleSelector: [".css-vqgwj6", "h1"],
    dateSelector: ["time"],
    contentSelector: [".body-text"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
      ".css-owbhap p",
    ],
  },
};
export const getNews = async () => {
  const res = await getArticles(harpersbazaar, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(harpersbazaar, 2);
})();

export default harpersbazaar;
