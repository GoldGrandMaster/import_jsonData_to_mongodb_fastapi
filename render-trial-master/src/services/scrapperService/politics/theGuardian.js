import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theGuardian = {
  name: "theGuardian",
  Model: Politics,
  url: "https://www.theguardian.com/international",
  linkSelector: [".fc-item__link"],
  articleSelectors: {
    titleSelector: '[data-gu-name="headline"]',
    dateSelector: "[data-gu-name='meta']",
    contentSelector: '[data-gu-name="standfirst"]',
    articleContentSelector: ".article-body-commercial-selector > p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theGuardian, 2);
})();

export default theGuardian;
