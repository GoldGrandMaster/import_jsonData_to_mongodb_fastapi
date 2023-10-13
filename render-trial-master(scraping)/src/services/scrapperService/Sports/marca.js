import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const marca = {
  name: "marca",
  saveDir: "Sports",
  url: "https://www.marca.com/en/",
  linkSelector: [".ue-c-cover-content__link"],
  articleSelectors: {
    titleSelector: [".ue-l-article__header-content h1"],
    dateSelector: ["time"],
    contentSelector: [".ue-c-article__standfirst"],
    articleContentSelector: [".ue-c-article__body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(marca, 2);
})();

export default marca;
