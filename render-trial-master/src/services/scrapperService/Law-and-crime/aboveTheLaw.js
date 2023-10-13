import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const aboveTheLaw = {
  name: "aboveTheLaw",
  Model: LawAndCrime,
  url: "https://abovethelaw.com/",
  linkSelector: [".post-single__title a"],
  articleSelectors: {
    titleSelector: [".single-post__title"],
    dateSelector: ["time", ".article-publish-date"],
    contentSelector: [".single-post__subtitle", ".article-sub-headline"],
    articleContentSelector: [
      ".single-post__content p",
      ".single-post__content h2",
      ".single-post__content h3",
      ".single-post__content h4",
      ".single-post__content h5",
      ".single-post__content h6",
      ".single-post__content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(aboveTheLaw, 2);
})();

export default aboveTheLaw;
