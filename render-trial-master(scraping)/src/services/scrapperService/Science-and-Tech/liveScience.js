import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const liveScience = {
  name: "liveScience",
  Model: ScienceAndTech,
  url: "https://www.livescience.com/",
  linkSelector: [".article-link", ".popular-box__article-list__link"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["p.strapline"],
    articleContentSelector: ["#article-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(liveScience, 2);
})();

export default liveScience;
