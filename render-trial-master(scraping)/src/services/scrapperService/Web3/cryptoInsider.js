import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const cryptoInsider = {
  name: "cryptoInsider",
  saveDir: "Web3",
  url: "https://www.businessinsider.in/cryptocurrency",
  linkSelector: ["[rel='noreferrer']"],
  articleSelectors: {
    titleSelector: ["[itemprop='headline']"],
    dateSelector: [".Date"],
    contentSelector: [".summary-list"],
    articleContentSelector: [
      ".article_content p",
      ".article_content h2",
      ".article_content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoInsider, 2);
})();

export default cryptoInsider;
