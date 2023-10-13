import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const cryptoGlobe = {
  name: "cryptoGlobe",
  saveDir: "Web3",
  url: "https://www.cryptoglobe.com/",
  linkSelector: ["h3 .u-link-v5"],
  articleSelectors: {
    titleSelector: [".u-heading-v3__title"],
    dateSelector: [".d-block ul li:first-child"],
    contentSelector: [".article-body p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cryptoGlobe, 2);
})();

export default cryptoGlobe;
