import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const zacksInvestmentResearch = {
  name: "zacksInvestmentResearch",
  saveDir: "Biz-and-Finance",
  url: "https://www.zacks.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: ["article h1 "],
    dateSelector: ["time"],
    contentSelector: ["#comtext p"],
    articleContentSelector: ["#comtext p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(zacksInvestmentResearch, 2);
})();

export default zacksInvestmentResearch;
