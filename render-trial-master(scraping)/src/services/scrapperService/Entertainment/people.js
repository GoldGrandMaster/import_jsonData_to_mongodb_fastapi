import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const people = {
  name: "people",
  Model: Entertainment,
  url: "https://people.com/",
  linkSelector: [".mntl-text-link"],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: [".mntl-attribution__item-date"],
    contentSelector: [".article-subheading"],
    articleContentSelector: [".mntl-sc-page p", ".mntl-sc-page h2"],
  },
};

export const getNews = async () => {
  const res = await getArticles(people, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(people, 2);
})();

export default people;
