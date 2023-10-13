import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const sportsNet = {
  name: "sportsNet",
  saveDir: "Sports",
  url: "https://www.sportsnet.ca/",
  linkSelector: [".content-wrap h3 a", ".headlines-story h4 a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".article-publish-date"],
    contentSelector: [".article-body-content p"],
    articleContentSelector: [".article-body-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(sportsNet, 2);
})();

export default sportsNet;
