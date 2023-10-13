import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const cheddar = {
  name: "cheddar",
  saveDir: "Biz-and-Finance",
  url: "https://cheddar.com/",
  linkSelector: [".card-container a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".timeline"],
    contentSelector: [".article-body .block"],
    articleContentSelector: [".article-body .block"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cheddar, 2);
})();

export default cheddar;
