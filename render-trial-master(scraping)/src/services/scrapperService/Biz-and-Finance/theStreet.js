import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theStreet = {
  name: "theStreet",
  saveDir: "Biz-and-Finance",
  url: "https://www.thestreet.com/",
  linkSelector: [".m-card--header a"],
  articleSelectors: {
    titleSelector: [".m-detail-header--title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".m-detail-header--dek"],
    articleContentSelector: [".m-detail--body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theStreet, 2);
})();

export default theStreet;
