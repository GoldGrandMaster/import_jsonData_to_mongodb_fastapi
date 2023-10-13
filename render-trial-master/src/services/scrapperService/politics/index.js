import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import alJazeera from "./alJazeera.js";
import bbc from "./bbc.js";
import cnn from "./cnn.js";
import foxNews from "./foxNews.js";
import nbcNews from "./nbcNews.js";
import politico from "./politico.js";
import reuters from "./reuters.js";
import theGuardian from "./theGuardian.js";
import theHill from "./theHill.js";
import abcPolitics from "./abcPolitics.js";
import usaTodayPolitics from "./usaTodayPolitics.js";
import washingtonPostPolitics from "./washingtonPostPolitics.js";
import theTelegraph from "./theTelegraph.js";
import chicagoTribune from "./chicagoTribune.js";
import theGlobeAndMail from "./theGlobeAndMail.js";
import southChinaMorningPost from "./southChinaMorningPost.js";
import theJapanTimes from "./theJapanTimes.js";
import theSydneyMorningHerald from "./theSydneyMorningHerald.js";
import xinhuaNewsAgency from "./xinhaNewsAgency.js";
import sputnikNews from "./sputnik.js";
import gulfNews from "./gulfNews.js";

const allPolitics = [
  abcPolitics,
  alJazeera,
  bbc,
  cnn,
  foxNews,
  nbcNews,
  politico,
  reuters,
  theGuardian,
  theHill,
  usaTodayPolitics,
  washingtonPostPolitics,
  theTelegraph,
  chicagoTribune,
  theGlobeAndMail,
  southChinaMorningPost,
  theJapanTimes,
  theSydneyMorningHerald,
  xinhuaNewsAgency,
  sputnikNews,
  gulfNews,
];

export const getNews = async () => {
  for (let politics of allPolitics) {
    await getArticles(politics, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;

  for (let politics of allPolitics) {
    await getArticles(politics, 2);
  }
})();

export default allPolitics;
