import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const politico = {
  name: "politico",
  Model: Politics,
  url: "https://www.politico.com/",
  linkSelector: [".headline > a"],
  articleSelectors: {
    titleSelector: [".headline", ".article-meta__title"],
    dateSelector: ["time", ".date-time "],
    contentSelector: [".dek", ".article-meta__excerpt"],
    articleContentSelector: [
      ".story-text > p",
      ".story-text__paragraph",
      ".article__content > p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(politico, 2);
})();

export default politico;
