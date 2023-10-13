import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import everydayHealth from "./everydayHealth.js";
import health from "./health.js";
import healthline from "./healthline.js";
import mensHealth from "./mensHealth.js";
import mindbodygreen from "./mindbodygreen.js";
import prevention from "./prevention.js";
import shape from "./shape.js";
import verywellHealth from "./verywellHealth.js";
import webMd from "./webMd.js";
import womensHealth from "./womensHealth.js";

const allLifestyleAndHealth = [
  everydayHealth,
  health,
  healthline,
  mensHealth,
  mindbodygreen,
  prevention,
  shape,
  verywellHealth,
  webMd,
  womensHealth,
];

export const getNews = async () => {
  for (let LifestyleAndHealth of allLifestyleAndHealth) {
    await getArticles(LifestyleAndHealth, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let LifestyleAndHealth of allLifestyleAndHealth) {
    await getArticles(LifestyleAndHealth, 2);
  }
})();

export default allLifestyleAndHealth;
