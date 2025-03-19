const express = require("express");
const router = express.Router();
const authMiddleware=require("../Middleware/AuthMiddleware");
// router.use(authMiddleware);
const {
  insertVideo,
  insertHistory,
  getWatchList,
  getHistory,
  removeFromWatchList,
  removeFromHistory,
  insertManyVideos,
  getAllVideos,
  updateViews,
  getCarousel,
  searchVideos,
  videoPreview
} = require("../Controllers/VideoController");

router.post("/insert", insertVideo);
router.post("/insertHistory", insertHistory);
router.get("/watchList/:userId", getWatchList);
router.get("/history/:userId", getHistory);
router.delete("/removeFromWatchList/:id", removeFromWatchList);
router.delete("/removeFromHistory/:id", removeFromHistory);
router.post("/insertMany", insertManyVideos);
router.get("/getAllVideos", getAllVideos);
router.get("/videoPreview/:id",videoPreview);
router.put("/updateViews/:videoId", updateViews);
router.get("/carousel", getCarousel);
router.get("/search", searchVideos);

module.exports = router;
