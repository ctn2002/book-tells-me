import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  adminLoginID: { type: String, maxLength: 20 },
  password: { type: String, maxLength: 16 },
  lastLogin: { type: Date },
  admins: [{ type: Schema.Types.ObjectId, ref: "Admins" }],
});

module.exports = mongoose.model("Users", userSchema);
