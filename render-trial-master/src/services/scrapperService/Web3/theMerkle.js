import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theMerkle = {
  name: "theMerkle",
  saveDir: "Web3",
  url: "https://themerkle.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: [".title"],
    dateSelector: [".date"],
    contentSelector: [".thecontent strong"],
    articleContentSelector: [
      ".thecontent p",
      ".thecontent h2",
      ".thecontent h6",
      ".thecontent ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theMerkle, 2);
})();

export default theMerkle;
