import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const crimeOnline = {
  name: "crimeOnline",
  Model: LawAndCrime,
  url: "https://www.crimeonline.com/",
  linkSelector: [".widget_media_image a", "article a"],
  articleSelectors: {
    titleSelector: [".entry-header-top", "h1"],
    dateSelector: ["time", ".article-by-line"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(crimeOnline, 2);
})();

export default crimeOnline;
