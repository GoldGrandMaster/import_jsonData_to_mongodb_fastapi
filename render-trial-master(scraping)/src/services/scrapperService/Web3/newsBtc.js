import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const newsBtc = {
  name: "newsBtc",
  saveDir: "Web3",
  url: "https://www.newsbtc.com/",
  linkSelector: [".jeg_post_title a"],
  articleSelectors: {
    titleSelector: [".jeg_post_title"],
    dateSelector: [".jeg_meta_date"],
    contentSelector: [".content-inner p"],
    articleContentSelector: [
      ".content-inner p",
      ".content-inner h2",
      ".content-inner h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(newsBtc, 2);
})();

export default newsBtc;
