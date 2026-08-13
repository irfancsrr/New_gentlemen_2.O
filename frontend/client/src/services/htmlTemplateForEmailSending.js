const HtmlTempleForEmail=`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="background-color: #B08D57; color: #fff; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">NovaCart</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <h3 style="margin-top: 0;">Hello, {{username}}</h3>
        <p>Thank you for your order <strong>#{{orderNumber}}</strong>.</p>
        <p>We’re processing your order and will notify you once it ships.</p>
        <p style="margin: 20px 0;">
          <a href="{{orderLink}}" style="background-color: #B08D57; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px;">View Order</a>
        </p>
        <p>If you have any questions, feel free to reply to this email.</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #555;">
        &copy; 2026 NovaCart. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default HtmlTempleForEmail;