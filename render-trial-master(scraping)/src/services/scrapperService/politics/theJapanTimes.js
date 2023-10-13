import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theJapanTimes = {
  name: "theJapanTimes",
  saveDir: "politics",
  url: "https://www.japantimes.co.jp/",
  linkSelector: [".wrapper-link", ".index-loop-article a"],
  articleSelectors: {
    titleSelector: ".single-title h1",
    dateSelector: ["time"],
    contentSelector: "#jtarticle p",
    articleContentSelector: ["#jtarticle p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theJapanTimes, 2);
})();

export default theJapanTimes;
