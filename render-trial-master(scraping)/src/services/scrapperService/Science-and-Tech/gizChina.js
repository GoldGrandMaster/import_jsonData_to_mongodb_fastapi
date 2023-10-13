import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const gizChina = {
  name: "gizChina",
  saveDir: "Science-and-Tech",
  url: "https://www.gizchina.com/",
  linkSelector: [".vw-post-box__link"],
  articleSelectors: {
    titleSelector: [".vw-post-title"],
    dateSelector: ["time"],
    contentSelector: [".vw-post-content p"],
    articleContentSelector: [
      ".vw-post-content p",
      ".vw-post-content h2",
      ".vw-post-content h3",
      ".vw-post-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(gizChina, 2);
})();

export default gizChina;
