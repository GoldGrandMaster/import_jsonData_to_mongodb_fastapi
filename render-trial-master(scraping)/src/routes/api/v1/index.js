import { Router } from "express";
import testRouter from "./test.js";
import scrapeRouter from "./scrapeAllSites.js";

const router = Router();

router.use("/test", testRouter);
router.use("/scrape-all-sites", scrapeRouter);

export default router;
