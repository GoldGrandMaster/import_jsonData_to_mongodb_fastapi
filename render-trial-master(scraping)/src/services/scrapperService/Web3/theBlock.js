import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const theBlock = {
  name: "theBlock",
  Model: Web3,
  url: "https://www.theblock.co/",
  linkSelector: [".cardContainer a"],
  articleSelectors: {
    titleSelector: [".articleBody h1"],
    dateSelector: [".timestamp "],
    contentSelector: [".quickTake"],
    articleContentSelector: [
      "#articleContent p",
      "#articleContent h2",
      "#articleContent h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theBlock, 2);
})();

export default theBlock;
