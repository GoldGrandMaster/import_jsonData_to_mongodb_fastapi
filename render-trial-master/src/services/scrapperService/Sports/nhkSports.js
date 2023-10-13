import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const nhkSports = {
  name: "nhkSports",
  saveDir: "Sports",
  url: "https://www3.nhk.or.jp/nhkworld/en/news/tags/29/",
  linkSelector: [
    ".c-mainSectionArticle__title a",
    ".c-article__title a",
    ".c-articleMedia a",
  ],
  articleSelectors: {
    titleSelector: [".p-article2__title"],
    dateSelector: [".p-article__date", ".c-article__date"],
    contentSelector: [".p-article__body p"],
    articleContentSelector: [".p-article__body p"],
  },
  articlesWaitUntil: "networkidle2",
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(nhkSports, 2);
})();

export default nhkSports;
