import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const cryptoSlate = {
  name: "cryptoSlate",
  Model: Web3,
  url: "https://cryptoslate.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: [".post-date"],
    contentSelector: [".post-subheading"],
    articleContentSelector: [".post-box p", ".post-box h2", ".post-box h6"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoSlate, 2);
})();

export default cryptoSlate;
