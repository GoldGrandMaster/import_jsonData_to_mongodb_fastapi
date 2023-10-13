import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const skySport = {
  name: "skySport",
  Model: Sports,
  url: "https://www.skysports.com/",
  linkSelector: [".sdc-site-tile__headline-link", ".sdc-site-trending__link "],
  articleSelectors: {
    titleSelector: [".sdc-article-header__long-title"],
    dateSelector: [".sdc-article-date__date-time"],
    contentSelector: [".sdc-article-header__sub-title "],
    articleContentSelector: [
      ".sdc-article-body p",
      ".sdc-article-body h2",
      ".sdc-article-body h3",
      ".sdc-article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(skySport, 2);
})();

export default skySport;
