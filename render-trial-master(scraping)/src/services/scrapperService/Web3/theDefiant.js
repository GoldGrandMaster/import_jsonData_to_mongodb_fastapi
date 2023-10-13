import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const theDefiant = {
  name: "theDefiant",
  Model: Web3,
  url: "https://thedefiant.io/",
  linkSelector: ["section a"],
  articleSelectors: {
    titleSelector: ["article h1"],
    dateSelector: ["[itemprop='datePublished']"],
    contentSelector: ["article p"],
    articleContentSelector: [".prose p", ".prose h5", ".prose h6"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theDefiant, 2);
})();

export default theDefiant;
