import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const associatedPress = {
  name: "associatedPress",
  Model: LawAndCrime,
  url: "https://apnews.com/",
  linkSelector: [
    ".Component-headline-0-2-100",
    ".Component-link-0-2-188",
    ".wireStoryContainer-0-2-280 ",
  ],
  articleSelectors: {
    titleSelector: [".Component-heading-0-2-21", ".tailor--headline--hed"],
    dateSelector: [".Timestamp?data-source", ".tailor--metadata--dateline"],
    contentSelector: [".Article p", ".deWoHG"],
    articleContentSelector: [
      ".Article p",
      ".Article h2",
      ".Article h3",
      ".Article h4",
      ".Article h5",
      ".Article h6",
      ".Article ul",
      ".kTbuSa p",
      ".kTbuSa h2",
      ".kTbuSa h3",
      ".kTbuSa h4",
      ".kTbuSa h5",
      ".kTbuSa h6",
      ".kTbuSa ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(associatedPress, 2);
})();

export default associatedPress;
