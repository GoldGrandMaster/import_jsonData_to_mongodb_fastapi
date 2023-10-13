import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const kotaku = {
  name: "kotaku",
  Model: Gaming,
  url: "https://kotaku.com/",
  linkSelector: [".dprZcn"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h2"],
    articleContentSelector: [
      ".js_post-content p",
      ".js_post-content h2",
      ".js_post-content h3",
      ".js_post-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(kotaku, 2);
})();

export default kotaku;
