import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const euroSport = {
  name: "euroSport",
  saveDir: "Sports",
  url: "https://www.eurosport.com/",
  linkSelector: [
    ".EnrichedHeroCard__secondaryCardWrapper a",
    ".SingleHeroCard a",
    ".atom-grid a",
  ],
  articleSelectors: {
    titleSelector: [".common-container h1"],
    dateSelector: ['[data-testid="author-date-information"]'],
    contentSelector: [".ArticleHeroBlack__teaser--light"],
    articleContentSelector: [".article-body .article-s4-rs"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(euroSport, 2);
})();

export default euroSport;
