import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theTelegraph = {
  name: "theTelegraph",
  saveDir: "politics",
  url: "https://www.telegraph.co.uk/",
  linkSelector: [".list-headline__link"],
  articleSelectors: {
    titleSelector: ".e-headline",
    dateSelector: ["time", ".e-published-date"],
    contentSelector: ".e-standfirst",
    articleContentSelector: ".article-body-text  p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theTelegraph, 2);
})();

export default theTelegraph;
