import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const ieeeSpectrum = {
  name: "ieeeSpectrum",
  saveDir: "Science-and-Tech",
  url: "https://spectrum.ieee.org/",
  linkSelector: [".widget__headline a"],
  articleSelectors: {
    titleSelector: ["h1.widget__headline"],
    dateSelector: [".social-date__text"],
    contentSelector: [".widget__subheadline-text"],
    articleContentSelector: [
      ".body-description p",
      ".body-description h2",
      ".body-description h3",
      ".body-description h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(ieeeSpectrum, 2);
})();

export default ieeeSpectrum;
