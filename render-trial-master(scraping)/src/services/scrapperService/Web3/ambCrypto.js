import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const ambCrypto = {
  name: "ambCrypto",
  saveDir: "Web3",
  url: "https://ambcrypto.com/",
  linkSelector: [
    ".featured-post",
    ".trending-post > a",
    ".latest-post-content > a",
    ".home-post-content > a",
    ".feat2-post-content > a",
  ],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: ["time"],
    contentSelector: [".single-post-main-middle > ul"],
    articleContentSelector: [
      ".single-post-main-middle > p",
      ".single-post-main-middle > h2",
      ".single-post-main-middle > h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(ambCrypto, 2);
})();

export default ambCrypto;
