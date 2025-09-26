import expressAsyncHandler from "express-async-handler";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserModel";

// @desk Register a user
// @route POST /api/auth/register
// @access public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields required.");
  }

  const usernameTaken = await User.findOne({ username });
  if (usernameTaken) {
    res.status(400);
    throw new Error("Username already taken.");
  }

  const emailTaken = await User.findOne({ email });
  if (emailTaken) {
    res.status(400);
    throw new Error("An account with this email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User ${user} created`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is invalid.");
  }
});

// @desk Login a user
// @route POST /api/auth/login
// @access public
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields required.");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          email: user.email,
          id: user.id,
        },
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" }
    );
    res.status(200).json({
      token: accessToken,
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Email or password is incorrect.");
  }
});

// @desk Send password reset link to user (forgotPassword)
// @route POST /api/auth/forgot-password
// @access public
const forgotPassword = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Email is required.");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(200).json({
      message: "If an account with that email exists, a reset link was sent.",
    });
    return;
  }

  const resetToken = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "5m" }
  );

  // Send reset password link (console log it for now)
  console.log(
    `Password reset link: http://localhost:5173/reset-password/${resetToken}`
  );

  res.status(200).json({
    message: "If an account with that email exists, a reset link was sent.",
  });
});

// @desk Update the user's password
// @route POST /api/auth/reset-password
// @access public
const resetPassword = expressAsyncHandler(async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res
      .status(400)
      .json({ message: "New password and token required." });
  }

  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (err) {
    return res.status(400).json({ message: "Invalid or expired token." });
  }

  // Search for existing user object
  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  await user.save();

  res.status(200).json({ message: "Password reset successfully." });
});

export { registerUser, loginUser, forgotPassword, resetPassword };
