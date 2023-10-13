import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const rockPaperShotgun = {
  name: "rockPaperShotgun",
  Model: Gaming,
  url: "https://www.rockpapershotgun.com/",
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
  if (isEntryFile) await getArticles(rockPaperShotgun, 2);
})();

export default rockPaperShotgun;
