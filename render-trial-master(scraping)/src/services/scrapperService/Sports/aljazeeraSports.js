import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const aljazeeraSports = {
  name: "aljazeeraSports",
  saveDir: "Sports",
  url: "https://www.aljazeera.com/sports/",
  linkSelector: [".gc__title a"],
  articleSelectors: {
    titleSelector: [".article-header h1"],
    dateSelector: [".article-dates"],
    contentSelector: [".article__subhead"],
    articleContentSelector: [".wysiwyg--all-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(aljazeeraSports, 2);
})();

export default aljazeeraSports;
