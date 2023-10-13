import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const euroGamer = {
  name: "euroGamer",
  Model: Gaming,
  url: "https://www.eurogamer.net/",
  linkSelector: ['[data-type="article"] a'],
  articleSelectors: {
    titleSelector: [".title"],
    dateSelector: ["time"],
    contentSelector: [".strapline"],
    articleContentSelector: [
      ".article_body_content p",
      ".article_body_content h2",
      ".article_body_content h3",
      ".article_body_content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(euroGamer, 2);
})();

export default euroGamer;
