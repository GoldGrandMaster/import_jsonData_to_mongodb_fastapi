import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const blockonomi = {
  name: "blockonomi",
  Model: Web3,
  url: "https://blockonomi.com/",
  linkSelector: [".image-link"],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: [".post-date"],
    contentSelector: [".sub-title"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(blockonomi, 2);
})();

export default blockonomi;
