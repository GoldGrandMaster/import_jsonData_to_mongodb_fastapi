import agenda from "./index.js";
import { getNews } from "../services/scrapperService/index.js";
import { getNews as getArtAndFashion } from "../services/scrapperService/Art-and-Fashion/index.js";
import { getNews as getBizAndFinance } from "../services/scrapperService/Biz-and-Finance/index.js";
import { getNews as getEntertainment } from "../services/scrapperService/Entertainment/index.js";
import { getNews as getGaming } from "../services/scrapperService/Gaming/index.js";
import { getNews as getLawAndCrime } from "../services/scrapperService/Law-and-crime/index.js";
import { getNews as getLifestyleAndHealth } from "../services/scrapperService/Lifestyle-and-health/index.js";
import { getNews as getPolitics } from "../services/scrapperService/politics/index.js";
import { getNews as getScienceAndTech } from "../services/scrapperService/Science-and-Tech/index.js";
import { getNews as getSports } from "../services/scrapperService/Sports/index.js";
import { getNews as getWeb3 } from "../services/scrapperService/Web3/index.js";

agenda.define("scrape-all-sites", async (job) => {
  console.log("job scrape-all-sites started working");
  await getNews();
});

agenda.define("scrape-art-and-fashion", async (job) => {
  console.log("job scrape-art-and-fashion started working");
  await getArtAndFashion();
});

agenda.define("scrape-biz-and-finance", async (job) => {
  console.log("job scrape-biz-and-finance started working");
  await getBizAndFinance();
});

agenda.define("scrape-entertainment", async (job) => {
  console.log("job scrape-entertainment started working");
  await getEntertainment();
});

agenda.define("scrape-gaming", async (job) => {
  console.log("job scrape-gaming started working");
  await getGaming();
});

agenda.define("scrape-law-and-crime", async (job) => {
  console.log("job scrape-law-and-crime started working");
  await getLawAndCrime();
});

agenda.define("scrape-lifestyle-and-health", async (job) => {
  console.log("job scrape-lifestyle-and-health started working");
  await getLifestyleAndHealth();
});

agenda.define("scrape-politics", async (job) => {
  console.log("job scrape-politics started working");
  await getPolitics();
});

agenda.define("scrape-science-and-tech", async (job) => {
  console.log("job scrape-science-and-tech started working");
  await getScienceAndTech();
});

agenda.define("scrape-sport", async (job) => {
  console.log("job scrape-sport started working");
  await getSports();
});

agenda.define("scrape-web3", async (job) => {
  console.log("job scrape-web3 started working");
  await getWeb3();
});

export default async () => {
  // await agenda.every("6 hours", "scrape-all-sites");
  await agenda.every("6 hours", "scrape-art-and-fashion");
  await agenda.every("6 hours", "scrape-biz-and-finance");
  await agenda.every("6 hours", "scrape-entertainment");
  await agenda.every("6 hours", "scrape-gaming");
  await agenda.every("6 hours", "scrape-law-and-crime");
  await agenda.every("6 hours", "scrape-lifestyle-and-health");
  await agenda.every("6 hours", "scrape-politics");
  await agenda.every("6 hours", "scrape-science-and-tech");
  await agenda.every("6 hours", "scrape-sport");
  await agenda.every("6 hours", "scrape-web3");

  await agenda.start();
};
