import { checkIsEntryFile } from "../../../utils/utils.js";
import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import vogue from "./vogue.js";
import artNews from "./artNews.js";
import artsy from "./artsy.js";
import dazed from "./dazed.js";
import elle from "./elle.js";
import harpersbazaar from "./harpersbazaar.js";
import hyperallergic from "./hyperallergic.js";
import refinery29 from "./refinery29.js";
import theCut from "./theCut.js";
import wMagazine from "./wMagazine.js";

const allArtAndFashion = [
  artNews,
  artsy,
  dazed,
  elle,
  harpersbazaar,
  hyperallergic,
  refinery29,
  theCut,
  vogue,
  wMagazine,
];

export const getNews = async () => {
  for (let artAndFashion of allArtAndFashion) {
    await getArticles(artAndFashion, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;

  for (let artAndFashion of allArtAndFashion) {
    await getArticles(artAndFashion, 2);
  }
})();

export default allArtAndFashion;
