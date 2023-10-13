import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const foxSports = {
  name: "foxSports",
  Model: Sports,
  url: "https://www.foxsports.com/",
  linkSelector: ["a.card-inner-grid", ".hc-link", ".news-article"],
  articleSelectors: {
    titleSelector: [".story-title"],
    dateSelector: [".info-text span:nth-child(2)"],
    contentSelector: [".story-body p"],
    articleContentSelector: [".story-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(foxSports, 2);
})();

export default foxSports;
