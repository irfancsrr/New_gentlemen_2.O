const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { sendEmail } = require("../utils/sendEmail");

// POST /api/email/send
router.post(
  "/send",
  asyncHandler(async (req, res) => {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
      throw ApiError.badRequest("To, subject, and html are required");
    }

    await sendEmail({ to, subject, html });

    res.status(200).json({ message: "Email sent successfully" });
  })
);

module.exports = router;
