import { checkIsEntryFile } from "../../../utils/utils.js";
import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import bloomberg from "./bloomberg.js";
import businessInsider from "./businessInsider.js";
import cnbc from "./cnbc.js";
import financialTimes from "./financialTimes.js";
import forbes from "./forbes.js";
import marketWatch from "./marketWatch.js";
import theEconomist from "./theEconomist.js";
import wallStreetJournal from "./wallStreetJournal.js";
import yahooFinance from "./yahooFinance.js";
import cnnBusiness from "./cnnBusiness.js";
import fortune from "./fortune.js";
import investopedia from "./investopedia.js";
import seekingAlpha from "./seekingAlpha.js";
import morningStar from "./morningStar.js";
import theStreet from "./theStreet.js";
import nikkeiAsianReview from "./nikkeiAsianReview.js";
import australianFinancialReview from "./australianFinancialReview.js";
import cheddar from "./cheddar.js";
import zacksInvestmentResearch from "./zacksInvestmentResearch.js";
import theMotleyFool from "./theMotleyFool.js";
import caixinGlobal from "./caixinGlobal.js";

const allBizAndFinance = [
  bloomberg,
  businessInsider,
  cnbc,
  cnnBusiness,
  financialTimes,
  forbes,
  fortune,
  investopedia,
  marketWatch,
  seekingAlpha,
  theEconomist,
  wallStreetJournal,
  yahooFinance,
  morningStar,
  theStreet,
  nikkeiAsianReview,
  australianFinancialReview,
  cheddar,
  zacksInvestmentResearch,
  theMotleyFool,
  caixinGlobal,
];

export const getNews = async () => {
  for (let BizAndFinance of allBizAndFinance) {
    await getArticles(BizAndFinance, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;

  for (let BizAndFinance of allBizAndFinance) {
    await getArticles(BizAndFinance, 2);
  }
})();

export default allBizAndFinance;
