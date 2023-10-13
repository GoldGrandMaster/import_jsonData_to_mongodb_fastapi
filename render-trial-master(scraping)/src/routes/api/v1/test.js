import { Router } from "express";

const router = Router();

router.use("/", async (req, res, next) => {
  res.status(200).json({ status: "test success" });
});

export default router;
