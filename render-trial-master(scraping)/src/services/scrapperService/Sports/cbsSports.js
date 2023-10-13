import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const cbsSports = {
  name: "cbsSports",
  Model: Sports,
  url: "https://www.cbssports.com/",
  linkSelector: [
    ".article-list-marquee-item a",
    ".article-list-stack-item-link",
    ".article-list-content-block-four a",
    ".article-list-content-block a",
    ".article-list-item-title a",
  ],
  articleSelectors: {
    titleSelector: [".Article-headline"],
    dateSelector: ["time"],
    contentSelector: [".Article-subline"],
    articleContentSelector: [
      "#content p",
      "#content h2",
      ".Article-bodyContent p",
      ".Article-bodyContent h1",
      ".Article-bodyContent h2",
      ".Article-bodyContent h3",
      ".Article-bodyContent h4",
      ".Article-bodyContent h5",
      ".Article-bodyContent h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cbsSports, 2);
})();

export default cbsSports;
