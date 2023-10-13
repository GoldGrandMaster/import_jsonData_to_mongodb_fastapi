import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const reutersSports = {
  name: "reutersSports",
  saveDir: "Sports",
  url: "https://www.reuters.com/sports/",
  linkSelector: [".heading__base__2T28j a"],
  articleSelectors: {
    titleSelector: [".article-header__heading__15OpQ h1"],
    dateSelector: ["time"],
    contentSelector: [".article-body__content__17Yit p"],
    articleContentSelector: [".article-body__content__17Yit p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(reutersSports, 2);
})();

export default reutersSports;
