import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const cnn = {
  name: "cnn",
  Model: Politics,
  url: "https://edition.cnn.com/",
  linkSelector: '[data-link-type="article"]',
  articleSelectors: {
    titleSelector: ".headline__text",
    dateSelector: ".timestamp",
    contentSelector: ".headline__text",
    articleContentSelector: ".paragraph",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cnn, 2);
})();

export default cnn;
