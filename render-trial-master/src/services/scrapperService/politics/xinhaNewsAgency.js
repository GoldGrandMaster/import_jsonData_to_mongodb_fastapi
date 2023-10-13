import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const xinhuaNewsAgency = {
  name: "xinhuaNewsAgency",
  saveDir: "politics",
  url: "https://english.news.cn/",
  linkSelector: [".tit a", ".headnews-left a"],
  articleSelectors: {
    titleSelector: ".conTop h1",
    dateSelector: [".time"],
    contentSelector: "#detailContent strong",
    articleContentSelector: ["#detailContent p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(xinhuaNewsAgency, 2);
})();

export default xinhuaNewsAgency;
