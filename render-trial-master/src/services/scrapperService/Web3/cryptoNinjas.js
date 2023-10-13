import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const cryptoNinjas = {
  name: "cryptoNinjas",
  saveDir: "Web3",
  url: "https://www.cryptoninjas.net/",
  linkSelector: [
    ".jeg_postblock_31 .jeg_post_title a",
    ".eg_tabpost_content a",
  ],
  articleSelectors: {
    titleSelector: [".jeg_post_title"],
    dateSelector: [".jeg_meta_date"],
    contentSelector: [".jeg_post_subtitle"],
    articleContentSelector: [
      ".content-inner p",
      ".content-inner h2",
      ".content-inner h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoNinjas, 2);
})();

export default cryptoNinjas;
