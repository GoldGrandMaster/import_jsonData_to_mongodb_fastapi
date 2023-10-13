import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import aboveTheLaw from "./aboveTheLaw.js";
import courthouseNewsService from "./courthouseNewsService.js";
import crimeOnline from "./crimeOnline.js";
import findLaw from "./findLaw.js";
import justia from "./justia.js";
import law from "./law.js";
import legalInsurrection from "./legalInsurrection.js";
import theCrimeReport from "./theCrimeReport.js";
import theMarshallProject from "./theMarshallProject.js";
import associatedPress from "./associatedPress.js";
import theIndependent from "./theIndependent.js";

const allLaw = [
  aboveTheLaw,
  associatedPress,
  courthouseNewsService,
  crimeOnline,
  findLaw,
  justia,
  law,
  legalInsurrection,
  theCrimeReport,
  theIndependent,
  theMarshallProject,
];

export const getNews = async () => {
  for (let law of allLaw) {
    await getArticles(law, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let law of allLaw) {
    await getArticles(law, 2);
  }
})();

export default allLaw;
