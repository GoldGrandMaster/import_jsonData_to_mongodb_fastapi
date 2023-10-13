import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const yahooSports = {
  name: "yahooSports",
  Model: Sports,
  url: "https://sports.yahoo.com/",
  linkSelector: ["._ys_62z4ne", "a._ys_1mqugaa", ".not-isInStreamVideoEnabled"],
  articleSelectors: {
    titleSelector: [".caas-title-wrapper h1"],
    dateSelector: ["time"],
    contentSelector: [".caas-subheadline"],
    articleContentSelector: [".caas-body p", ".caas-body h2", ".caas-body h3"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(yahooSports, 2);
})();

export default yahooSports;
