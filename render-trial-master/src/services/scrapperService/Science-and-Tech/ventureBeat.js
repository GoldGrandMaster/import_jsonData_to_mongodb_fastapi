import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const ventureBeat = {
  name: "ventureBeat",
  saveDir: "Science-and-Tech",
  url: "https://venturebeat.com/",
  linkSelector: [".FeaturedArticles__hero a", ".ArticleListing__title a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-content p"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(ventureBeat, 2);
})();

export default ventureBeat;
