import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const bitcoinist = {
  name: "bitcoinist",
  saveDir: "Web3",
  url: "https://bitcoinist.com/",
  linkSelector: [".jeg_thumb a"],
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
  if (isEntryFile) await getArticles(bitcoinist, 2);
})();

export default bitcoinist;
