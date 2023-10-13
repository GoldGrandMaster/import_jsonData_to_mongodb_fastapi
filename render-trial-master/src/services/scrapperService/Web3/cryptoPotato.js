import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const cryptoPotato = {
  name: "cryptoPotato",
  saveDir: "Web3",
  url: "https://cryptopotato.com/",
  linkSelector: [".ft-post-details a", ".recent-post a"],
  articleSelectors: {
    titleSelector: [".page-title"],
    dateSelector: [".last-modified-timestamp"],
    contentSelector: [".entry-excerpt"],
    articleContentSelector: [
      ".coincodex-content > p",
      ".coincodex-content > h2",
      ".coincodex-content > h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoPotato, 2);
})();

export default cryptoPotato;
