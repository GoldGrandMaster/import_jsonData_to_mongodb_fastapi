import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import destructoid from "./destructoid.js";
import euroGamer from "./euroGamer.js";
import gameInformer from "./gameInformer.js";
import gameSpot from "./gameSpot.js";
import ign from "./ign.js";
import kotaku from "./kotaku.js";
import pcGamer from "./pcGamer.js";
import polygon from "./polygon.js";
import rockPaperShotgun from "./rockPaperShotgun.js";
import vg247 from "./vg247.js";

const allGaming = [
  destructoid,
  euroGamer,
  gameInformer,
  gameSpot,
  ign,
  kotaku,
  pcGamer,
  polygon,
  rockPaperShotgun,
  vg247,
];
export const getNews = async () => {
  for (let gaming of allGaming) {
    await getArticles(gaming, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let gaming of allGaming) {
    await getArticles(gaming, 2);
  }
})();

export default allGaming;
