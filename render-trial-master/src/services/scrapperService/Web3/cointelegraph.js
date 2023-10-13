import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const cointelegraph = {
  name: "cointelegraph",
  Model: Web3,
  url: "https://cointelegraph.com/",
  linkSelector: [
    ".main-news-item__link",
    ".main-news-controls__link",
    ".main-press-releases__list",
    ".post-card__figure-link",
  ],
  articleSelectors: {
    titleSelector: [".post__title"],
    dateSelector: ["time"],
    contentSelector: [".post__lead"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cointelegraph, 2);
})();

export default cointelegraph;
