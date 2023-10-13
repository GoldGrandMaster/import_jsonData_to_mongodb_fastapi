import { checkIsEntryFile } from "../../../utils/utils.js";
import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import arsTechnica from "./arsTechnica.js";
import cnet from "./cnet.js";
import engadget from "./engadget.js";
import gizmodo from "./gizmodo.js";
import liveScience from "./liveScience.js";
import scientificAmerican from "./scientificAmerican.js";
import techCrunch from "./techCrunch.js";
import theVerge from "./theVerge.js";
import wired from "./wired.js";
import popularScience from "./popularScience.js";
import scienceDaily from "./scienceDaily.js";
import mitTechnologyReview from "./mitTechnologyReview.js";
import nature from "./nature.js";
import science from "./science.js";
import mashable from "./mashable.js";
import ieeeSpectrum from "./ieeeSpectrum.js";
import gizChina from "./gizChina.js";
import ventureBeat from "./ventureBeat.js";
import techRadar from "./techRadar.js";

const allScienceAndTech = [
  arsTechnica,
  cnet,
  engadget,
  gizmodo,
  liveScience,
  popularScience,
  scienceDaily,
  scientificAmerican,
  techCrunch,
  theVerge,
  wired,
  mitTechnologyReview,
  nature,
  science,
  mashable,
  ieeeSpectrum,
  gizChina,
  ventureBeat,
  techRadar,
];

export const getNews = async () => {
  for (let ScienceAndTech of allScienceAndTech) {
    await getArticles(ScienceAndTech, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let ScienceAndTech of allScienceAndTech) {
    await getArticles(ScienceAndTech, 2);
  }
})();

export default allScienceAndTech;
