import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const nbcNews = {
  name: "nbcNews",
  Model: Politics,
  url: "https://www.nbcnews.com/",
  linkSelector: [
    ".related-content__headline > a",
    ".styles_headline__5qvTg > a",
    ".styles_teaseTitle__H4OWQ > a",
    ".styles_headline__ice3t > a",
  ],
  articleSelectors: {
    titleSelector: [".article-hero-headline__htag"],
    dateSelector: ["time"],
    contentSelector: [".styles_articleDek__Icz5H"],
    articleContentSelector: [".article-body__content > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(nbcNews, 2);
})();

export default nbcNews;
