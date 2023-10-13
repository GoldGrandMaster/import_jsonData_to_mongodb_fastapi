import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const coinMarketCap = {
  name: "coinMarketCap",
  Model: Web3,
  url: "https://coinmarketcap.com/headlines/news/",
  linkSelector: [".sc-aef7b723-0 .imWlwI"],
  articleSelectors: {
    titleSelector: [".llGAYu", ".entry-title", ".cECJcb", "h1"],
    dateSelector: [".fCASWb", ".gJqtyQ", ".cp-entry-meta-left"],
    contentSelector: [".hgxoko p", ".cvngAK", ".article-tldr"],
    articleContentSelector: [
      ".hgxoko p",
      ".hgxoko h2",
      ".hgxoko h3",
      ".hgxoko h4",
      ".hgxoko h5",
      ".hgxoko h6",
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      "article p",
      "article h2",
      "article h3",
      "article h4",
      "article h5",
      "article h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(coinMarketCap, 2);
})();

export default coinMarketCap;
