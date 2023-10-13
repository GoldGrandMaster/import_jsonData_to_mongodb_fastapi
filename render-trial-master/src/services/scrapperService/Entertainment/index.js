import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import deadline from "./deadline.js";
import eNews from "./eNews.js";
import entertainmentWeekly from "./entertainmentWeekly.js";
import justJared from "./justJared.js";
import people from "./people.js";
import popSugar from "./popSugar.js";
import theHollywoodReporter from "./theHollywoodReporter.js";
import tmz from "./tmz.js";
import variety from "./variety.js";

const allEntertainment = [
  deadline,
  eNews,
  tmz,
  variety,
  entertainmentWeekly,
  theHollywoodReporter,
  people,
  justJared,
  popSugar,
];

export const getNews = async () => {
  for (let entertainment of allEntertainment) {
    await getArticles(entertainment, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let entertainment of allEntertainment) {
    await getArticles(entertainment, 2);
  }
})();

export default allEntertainment;
