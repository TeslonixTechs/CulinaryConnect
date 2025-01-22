const express = require("express");
const { getNotifications, markAsRead } = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getNotifications);
router.patch("/read", authMiddleware, markAsRead);

module.exports = router;
