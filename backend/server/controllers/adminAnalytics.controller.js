const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

// Dashboard Stats
exports.getDashboardStats = async (req, res) => {
  try {
    const totalRevenueAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalPrice" } } }
    ]);

    const revenueByDay = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$totalPrice" }
        }
      },
      { $sort: { _id: 1 } },
      { $limit: 14 }
    ]);

    const ordersByStatus = await Order.aggregate([
      { $group: { _id: "$orderStatus", count: { $sum: 1 } } }
    ]);

    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("user", "name email");
  //  console.log({
  //     totalRevenue: totalRevenueAgg[0]?.total || 0,
  //     totalOrders: await Order.countDocuments(),
  //     totalProducts: await Product.countDocuments(),
  //     totalUsers: await User.countDocuments(),
  //     revenueByDay,
  //     ordersByStatus,
  //     recentOrders,
  //   });
    res.json({
      totalRevenue: totalRevenueAgg[0]?.total || 0,
      totalOrders: await Order.countDocuments(),
      totalProducts: await Product.countDocuments(),
      totalUsers: await User.countDocuments(),
      revenueByDay,
      ordersByStatus,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats", error: error.message });
  }
};

// Revenue by Day
exports.getRevenueByDay = async (req, res) => {
  try {
    const revenueByDay = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          revenue: { $sum: "$totalPrice" }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(revenueByDay);
  } catch (error) {
    res.status(500).json({ message: "Error fetching revenue data", error: error.message });
  }
};

// Orders by Status
exports.getOrdersByStatus = async (req, res) => {
  try {
    const ordersByStatus = await Order.aggregate([
      { $group: { _id: "$orderStatus", count: { $sum: 1 } } }
    ]);
    res.json(ordersByStatus);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders by status", error: error.message });
  }
};

// Recent Orders
exports.getRecentOrders = async (req, res) => {
  try {
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("user", "name email");
    res.json(recentOrders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recent orders", error: error.message });
  }
};
