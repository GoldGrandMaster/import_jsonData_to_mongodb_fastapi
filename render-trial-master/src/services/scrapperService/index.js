import { getArticles } from "../../utils/puppeteer/get-articles.js";
import allArtAndFashion from "./Art-and-Fashion/index.js";
import allBizAndFinance from "./Biz-and-Finance/index.js";
import allEntertainment from "./Entertainment/index.js";
import allGaming from "./Gaming/index.js";
import allLaw from "./Law-and-crime/index.js";
import allLifestyleAndHealth from "./Lifestyle-and-health/index.js";
import allScienceAndTech from "./Science-and-Tech/index.js";
import allSport from "./Sports/index.js";
import allWeb3 from "./Web3/index.js";
import allPolitics from "./politics/index.js";
import { checkIsEntryFile } from "../../utils/utils.js";

const allArticles = [
  ...allArtAndFashion,
  ...allBizAndFinance,
  ...allEntertainment,
  ...allGaming,
  ...allLaw,
  ...allLifestyleAndHealth,
  ...allPolitics,
  ...allScienceAndTech,
  ...allSport,
  ...allWeb3,
];
export const getNews = async () => {
  for (let article of allArticles) {
    await getArticles(article, 1);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let article of allArticles) {
    await getArticles(article, 1);
  }
})();

export default allArticles;
