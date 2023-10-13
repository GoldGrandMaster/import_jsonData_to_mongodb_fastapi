import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const webMd = {
  name: "webMd",
  Model: LifestyleAndHealth,
  url: "https://www.webmd.com/",
  linkSelector: [".module-list a"],
  articleSelectors: {
    titleSelector: [".page-header", "header h1", ".blogs-post-header-text"],
    dateSelector: ["time", ".revDate", ".author-content span:nth-child(2)"],
    contentSelector: [".article-page p", ".blog-post-article-page p"],
    articleContentSelector: [
      ".article-page p",
      ".article-page h2",
      ".article-page h3",
      ".article-page h4",
      ".article-page h5",
      ".article-page h6",
      ".article-page ul",
      ".blog-post-article-page p",
      ".blog-post-article-page h2",
      ".blog-post-article-page h3",
      ".blog-post-article-page h4",
      ".blog-post-article-page h5",
      ".blog-post-article-page h6",
      ".blog-post-article-page ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(webMd, 2);
})();

export default webMd;
