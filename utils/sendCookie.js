import jwt from "jsonwebtoken";

// funcation to send cookie
export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

  res.status(statusCode).cookie("accessToken", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 15 * 60 * 1000,
  }).json({
    success: true,
    message,
  });
};