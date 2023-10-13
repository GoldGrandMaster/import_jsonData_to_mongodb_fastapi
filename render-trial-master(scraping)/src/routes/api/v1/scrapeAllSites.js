import { Router } from "express";
import scrapeAllSitesJob from "../../../jobs/scrapeAllSites.js";

const router = Router();

router.get("/", async (req, res, next) => {
  await scrapeAllSitesJob();

  res.status(200).json({ status: "Successfully Scraped all sites" });
});

export default router;
