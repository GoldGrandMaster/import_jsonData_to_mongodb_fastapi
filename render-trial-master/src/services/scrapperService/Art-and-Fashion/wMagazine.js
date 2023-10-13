import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const wMagazine = {
  name: "wMagazine",
  Model: ArtAndFashion,
  url: "https://www.wmagazine.com/",
  linkSelector: [".ZXH"],
  articleSelectors: {
    titleSelector: [".aVX", "h1"],
    dateSelector: ["time"],
    contentSelector: [".r87"],
    articleContentSelector: [
      ".AOL p",
      ".AOL h2",
      ".AOL h3",
      ".AOL h4",
      ".AOL h5",
      ".AOL h6",
      ".AOL ul",
    ],
  },
};
export const getNews = async () => {
  const res = await getArticles(wMagazine, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(wMagazine, 2);
})();

export default wMagazine;
