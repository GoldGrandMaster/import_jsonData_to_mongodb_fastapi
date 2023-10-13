import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const morningStar = {
  name: "morningStar",
  saveDir: "Biz-and-Finance",
  url: "https://www.morningstar.com/",
  linkSelector: [".mdc-grid-item__title--link"],
  articleSelectors: {
    titleSelector: [".story__headline"],
    dateSelector: ["time"],
    contentSelector: [".story__subtitle"],
    articleContentSelector: [".story__body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(morningStar, 2);
})();

export default morningStar;
