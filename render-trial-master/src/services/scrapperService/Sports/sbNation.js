import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const sbNation = {
  name: "sbNation",
  Model: Sports,
  url: "https://www.sbnation.com/",
  linkSelector: ["[data-analytics-link='article']"],
  articleSelectors: {
    titleSelector: [".c-page-title"],
    dateSelector: ["time?datetime", ".c-byline__item"],
    contentSelector: [".c-entry-summary"],
    articleContentSelector: [
      ".c-entry-content  p",
      ".c-entry-content  h1",
      ".c-entry-content  h2",
      ".c-entry-content  h3",
      ".c-entry-content  h4",
      ".c-entry-content  h5",
      ".c-entry-content  h6",
      ".c-entry-content  ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(sbNation, 2);
})();

export default sbNation;
