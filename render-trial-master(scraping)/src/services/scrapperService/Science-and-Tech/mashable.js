import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const mashable = {
  name: "mashable",
  saveDir: "Science-and-Tech",
  url: "https://mashable.com/",
  linkSelector: ['a[data-ga-item="title"]'],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h1 + div"],
    articleContentSelector: [
      "[data-ga-module='content_body'] p",
      "[data-ga-module='content_body'] h2",
      "[data-ga-module='content_body'] h3",
      "[data-ga-module='content_body'] h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(mashable, 2);
})();

export default mashable;
