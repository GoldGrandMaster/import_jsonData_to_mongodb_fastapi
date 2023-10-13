import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const vogue = {
  name: "vogue",
  Model: ArtAndFashion,
  url: "https://www.vogue.com/",
  linkSelector: [".summary-item__hed-link"],
  articleSelectors: {
    titleSelector: [".ContentHeaderHed-NCyCC", "h1"],
    dateSelector: ["time"],
    contentSelector: [".body__inner-container p"],
    articleContentSelector: [".body__inner-container  p"],
  },
};
export const getNews = async () => {
  const res = await getArticles(vogue, 2);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(vogue, 2);
})();

export default vogue;
