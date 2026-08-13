const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getRevenueByDay,
  getOrdersByStatus,
  getRecentOrders,
} = require("../controllers/adminAnalytics.controller");

const { protect, authorize } = require("../middleware/authMiddleware");

// ✅ Sirf admin ke liye accessible
router.get("/stats", protect, authorize("admin"), getDashboardStats);
router.get("/revenue", protect, authorize("admin"), getRevenueByDay);
router.get("/orders-status", protect, authorize("admin"), getOrdersByStatus);
router.get("/recent-orders", protect, authorize("admin"), getRecentOrders);

module.exports = router;
