import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const findLaw = {
  name: "findLaw",
  Model: LawAndCrime,
  url: "https://www.findlaw.com/",
  linkSelector: [".homepage_links a"],
  articleSelectors: {
    titleSelector: [".articleTitle", "h1"],
    dateSelector: [".article-by-line"],
    contentSelector: [".article-heading-content p", ".indexHeading  p"],
    articleContentSelector: [
      ".article-heading-content p",
      ".article-heading-content h2",
      ".article-heading-content h3",
      ".article-heading-content h4",
      ".article-heading-content h5",
      ".indexHeading  p",
      ".indexHeading  h2",
      ".indexHeading  h3",
      ".indexHeading  h4",
      ".indexHeading  h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(findLaw, 2);
})();

export default findLaw;
