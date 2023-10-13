import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const theIndependent = {
  name: "theIndependent",
  Model: LawAndCrime,
  url: "https://www.independent.co.uk/",
  linkSelector: [".title"],
  articleSelectors: {
    titleSelector: [".fmwLhf", "h1"],
    dateSelector: ["time?datetime", ".social-date-modified__text"],
    contentSelector: [".body-description p"],
    articleContentSelector: [
      "#main p",
      "#main h2",
      "#main h3",
      "#main h4",
      "#main h5",
      "#main h6",
      "#main ul",
      ".body-description p",
      ".body-description h2",
      ".body-description h3",
      ".body-description h4",
      ".body-description h5",
      ".body-description h6",
      ".body-description ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theIndependent, 2);
})();

export default theIndependent;
