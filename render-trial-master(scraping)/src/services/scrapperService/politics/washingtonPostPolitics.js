import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const washingtonPostPolitics = {
  name: "washingtonPostPolitics",
  Model: Politics,
  url: "https://www.washingtonpost.com/politics/",
  linkSelector: [
    "[data-pb-local-content-field='web_headline']",
    ".wpds-c-kBHqpq",
  ],
  articleSelectors: {
    titleSelector: [".offblack headline", "h1"],
    dateSelector: [
      ".wpds-c-iKQyrV:nth-child(2)",
      "[data-testid='display-date']",
    ],
    contentSelector: [".teaser-content p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h1",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(washingtonPostPolitics, 2);
})();

export default washingtonPostPolitics;
