import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const decrypt = {
  name: "decrypt",
  Model: Web3,
  url: "https://decrypt.co/",
  linkSelector: ["a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time"],
    contentSelector: ["h2.font-akzidenz-grotesk"],
    articleContentSelector: [".grid p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(decrypt, 2);
})();

export default decrypt;
