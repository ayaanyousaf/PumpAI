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

export { registerUser, loginUser };
