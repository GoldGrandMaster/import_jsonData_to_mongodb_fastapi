import { Router } from "express";
import apiRotuer from "./api/index.js";

const router = Router();

router.use("/api", apiRotuer);

export default router;
