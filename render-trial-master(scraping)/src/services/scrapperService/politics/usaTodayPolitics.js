import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const usaTodayPolitics = {
  name: "usaTodayPolitics",
  Model: Politics,
  url: "https://www.usatoday.com/news/politics/",
  linkSelector: [".gnt_m_he", ".gnt_m_flm_a"],
  articleSelectors: {
    titleSelector: [".gnt_ar_hl", "h1"],
    dateSelector: [".gnt_ar_dt , .gnt_sv_dt?aria-label"],
    contentSelector: [".gnt_ar_b p"],
    articleContentSelector: [
      ".gnt_ar_b p",
      ".gnt_ar_b h1",
      ".gnt_ar_b h2",
      ".gnt_ar_b h3",
      ".gnt_ar_b h4",
      ".gnt_ar_b h5",
      ".gnt_ar_b h6",
      ".gnt_ar_b ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(usaTodayPolitics, 2);
})();

export default usaTodayPolitics;
