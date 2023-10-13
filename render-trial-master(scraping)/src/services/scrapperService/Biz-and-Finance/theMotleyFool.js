import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const theMotleyFool = {
  name: "theMotleyFool",
  saveDir: "Biz-and-Finance",
  url: "https://www.fool.com/",
  linkSelector: ["a.text-gray-1100"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["header + div.text-lg"],
    contentSelector: ["ul.font-medium"],
    articleContentSelector: [
      ".tailwind-article-body p",
      ".tailwind-article-body h1",
      ".tailwind-article-body h2",
      ".tailwind-article-body h3",
      ".tailwind-article-body h4",
      ".tailwind-article-body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theMotleyFool, 2);
})();

export default theMotleyFool;
