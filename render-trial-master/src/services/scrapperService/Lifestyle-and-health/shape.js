import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const shape = {
  name: "shape",
  saveDir: "Lifestyle-and-shape",
  url: "https://www.shape.com/",
  linkSelector: ["a.card"],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: ["time", ".mntl-attribution__item-date"],
    contentSelector: [".structured-content p"],
    articleContentSelector: [
      ".structured-content p",
      ".structured-content h2",
      ".structured-content h3",
      ".structured-content h4",
      ".structured-content h5",
      ".structured-content h6",
      ".structured-content ul",
      ".js-extended-commerce__section p",
      "article p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(shape, 2);
})();

export default shape;
