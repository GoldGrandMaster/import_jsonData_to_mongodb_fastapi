import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const ign = {
  name: "ign",
  Model: Gaming,
  url: "https://www.ign.com/",
  linkSelector: [".one-up-link", ".card a", "a.item-body"],
  articleSelectors: {
    titleSelector: [".title2", ".display-title", ".article-headline"],
    dateSelector: [
      "time",
      ".byline .jsx-1189612256:nth-child(3)",
      ".article-publish-date",
    ],
    contentSelector: ["h2.title3", ".article-sub-headline"],
    articleContentSelector: [
      ".interface p",
      ".article-page p",
      ".article-page h2",
      ".articleBody p",
      ".articleBody h2",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(ign, 2);
})();

export default ign;
