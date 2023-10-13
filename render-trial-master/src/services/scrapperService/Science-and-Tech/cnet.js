import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const cnet = {
  name: "cnet",
  Model: ScienceAndTech,
  url: "https://www.cnet.com/",
  linkSelector: [
    ".c-storiesHighlightsLead a",
    ".c-storiesHighlightsCard a",
    ".c-storiesTrending_story",
    ".c-storiesLatest_story",
    ".c-dealsDailyCard_link",
    ".c-storiesExpertCardStory_link",
    ".c-storiesDeepDivesCard a",
  ],
  articleSelectors: {
    titleSelector: [".c-contentHeader_headline"],
    dateSelector: ["time"],
    contentSelector: [".speakableTextDek"],
    articleContentSelector: [
      ".c-pageArticle_content h3",
      ".c-pageArticle_content p",
      ".c-pageArticle_content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(cnet, 2);
})();

export default cnet;
