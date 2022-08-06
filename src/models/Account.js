import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, maxLength: 256 },
  password: { type: String, maxLength: 16 },
  lastLogin: { type: Date },
  status: { type: String, maxLength: 15 },
  users: [{ type: Schema.Types.ObjectId, ref: "Users" }],
});

module.exports = mongoose.model("Users", userSchema);
