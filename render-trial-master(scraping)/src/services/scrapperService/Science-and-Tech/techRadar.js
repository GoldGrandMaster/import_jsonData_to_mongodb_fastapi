import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const techRadar = {
  name: "techRadar",
  saveDir: "Science-and-Tech",
  url: "https://www.techradar.com/",
  linkSelector: [".article-link", ".wcl-item-right a"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: [".strapline"],
    articleContentSelector: [
      "#article-body p",
      "#article-body h2",
      "#article-body h3",
      "#article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(techRadar, 2);
})();

export default techRadar;
