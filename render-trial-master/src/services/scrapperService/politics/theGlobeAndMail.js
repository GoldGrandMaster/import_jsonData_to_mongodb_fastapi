import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theGlobeAndMail = {
  name: "theGlobeAndMail",
  saveDir: "politics",
  url: "https://www.theglobeandmail.com/",
  linkSelector: [".CardLink__StyledCardLink-sc-2nzf9p-0"],
  articleSelectors: {
    titleSelector: ".article-title",
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: ".c-article-body__text",
    articleContentSelector: ".c-article-body__text",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theGlobeAndMail, 2);
})();

export default theGlobeAndMail;
