import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const investopedia = {
  name: "investopedia",
  Model: BizAndFinance,
  url: [
    "https://www.investopedia.com/",
    // "https://www.investopedia.com/terms-beginning-with-num-4769350",
    // "https://www.investopedia.com/terms-beginning-with-a-4769351",
    // "https://www.investopedia.com/terms-beginning-with-b-4769352",
    // "https://www.investopedia.com/terms-beginning-with-c-4769353",
    // "https://www.investopedia.com/terms-beginning-with-d-4769354",
    // "https://www.investopedia.com/terms-beginning-with-e-4769355",
    // "https://www.investopedia.com/terms-beginning-with-f-4769356",
    // "https://www.investopedia.com/terms-beginning-with-g-4769357",
    // "https://www.investopedia.com/terms-beginning-with-h-4769358",
    // "https://www.investopedia.com/terms-beginning-with-i-4769359",
    // "https://www.investopedia.com/terms-beginning-with-j-4769360",
    // "https://www.investopedia.com/terms-beginning-with-k-4769361",
    // "https://www.investopedia.com/terms-beginning-with-l-4769362",
    // "https://www.investopedia.com/terms-beginning-with-m-4769363",
    // "https://www.investopedia.com/terms-beginning-with-n-4769364",
    // "https://www.investopedia.com/terms-beginning-with-o-4769365",
    // "https://www.investopedia.com/terms-beginning-with-p-4769366",
    // "https://www.investopedia.com/terms-beginning-with-q-4769367",
    // "https://www.investopedia.com/terms-beginning-with-r-4769368",
    // "https://www.investopedia.com/terms-beginning-with-s-4769369",
    // "https://www.investopedia.com/terms-beginning-with-t-4769370",
    // "https://www.investopedia.com/terms-beginning-with-u-4769371",
    // "https://www.investopedia.com/terms-beginning-with-v-4769372",
    // "https://www.investopedia.com/terms-beginning-with-w-4769373",
    // "https://www.investopedia.com/terms-beginning-with-x-4769374",
    // "https://www.investopedia.com/terms-beginning-with-y-4769375",
    // "https://www.investopedia.com/terms-beginning-with-z-4769376",
  ],
  linkSelector: [
    "a.card",
    ".dictionary-top300-list__list-content .mntl-text-link",
  ],
  articleSelectors: {
    titleSelector: [".article-heading", "h1"],
    dateSelector: [".mntl-attribution__item-date"],
    contentSelector: [".mntl-sc-block"],
    articleContentSelector: [
      ".article-body-content > p",
      ".article-body-content > h1",
      ".article-body-content > h2",
      ".article-body-content > h3",
      ".article-body-content > h4",
      ".article-body-content > h5",
      ".article-body-content > h6",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(investopedia, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(investopedia, 2);
})();

export default investopedia;
