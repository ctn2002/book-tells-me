import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, maxLength: 40 },
  address: { type: String, maxLength: 120 },
  phone: { type: String, maxLength: 15 },
  birth: { type: Date },
  gender: { type: String, maxLength: 5 },
});

module.exports = mongoose.model("Users", userSchema);
