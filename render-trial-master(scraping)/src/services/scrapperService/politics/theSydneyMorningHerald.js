import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theSydneyMorningHerald = {
  name: "theSydneyMorningHerald",
  saveDir: "politics",
  url: "https://www.smh.com.au/",
  linkSelector: ['[data-testid="article-link"]'],
  articleSelectors: {
    titleSelector: "[data-testid='headline']",
    dateSelector: ["time", '[data-testid="datetime"]'],
    contentSelector: "[data-testid='body-content'] p",
    articleContentSelector: ["[data-testid='body-content'] p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theSydneyMorningHerald, 2);
})();

export default theSydneyMorningHerald;
