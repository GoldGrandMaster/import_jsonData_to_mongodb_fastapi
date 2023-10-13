import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const cryptoBriefing = {
  name: "cryptoBriefing",
  Model: Web3,
  url: "https://cryptobriefing.com/",
  linkSelector: [".top-news-link", ".main-news-link", ".article-url"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".article-key-takeaways"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
      ".article-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoBriefing, 2);
})();

export default cryptoBriefing;
