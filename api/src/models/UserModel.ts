import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username."],
      unique: [true, "Username is taken."],
      minlength: [3, "Username must be at least 3 characters."],
      maxlength: [20, "Username must be less than 20 characters."],
    },
    email: {
      type: String,
      required: [true, "Please enter an email address."],
      unique: [true, "An account with this email address already exists!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password."],
      minlength: [6, "Password must be at least 6 characters long."],
    },
    bio: {
      type: String,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
