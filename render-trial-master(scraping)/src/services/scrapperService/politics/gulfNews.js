import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const gulfNews = {
  name: "gulfNews",
  saveDir: "politics",
  url: "https://gulfnews.com/",
  linkSelector: [".card-body a"],
  articleSelectors: {
    titleSelector: '[itemprop="headline"]',
    dateSelector: [".time"],
    contentSelector: ".lead",
    articleContentSelector: ".story-block p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(gulfNews, 2);
})();

export default gulfNews;
