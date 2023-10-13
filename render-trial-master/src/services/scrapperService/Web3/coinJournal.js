import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const coinJournal = {
  name: "coinJournal",
  saveDir: "Web3",
  url: "https://coinjournal.net/",
  linkSelector: ["a.block"],
  articleSelectors: {
    titleSelector: [".leading-snug"],
    dateSelector: ["time"],
    contentSelector: [".post-article-content ul"],
    articleContentSelector: [
      ".post-article-content p",
      ".post-article-content h2",
      ".post-article-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(coinJournal, 2);
})();

export default coinJournal;
