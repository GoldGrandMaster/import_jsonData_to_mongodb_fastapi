import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const southChinaMorningPost = {
  name: "southChinaMorningPost",
  saveDir: "politics",
  url: "https://www.scmp.com/",
  linkSelector: [
    ".article-title__article-link",
    ".article__link",
    ".headline--link",
    ".item-cell__link ",
    ".signature-item__cover-link",
  ],
  articleSelectors: {
    titleSelector: ".headline",
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: ".generic-article__summary--ul",
    articleContentSelector: [
      ".details__body p",
      ".generic-article__body",
      ".article-details-type--p",
      ".content--p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(southChinaMorningPost, 2);
})();

export default southChinaMorningPost;
