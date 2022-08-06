import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  nameBook: { type: String, maxLength: 200 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  urlDownload: { type: String, maxLength: 255 },
  // admins: { type: Schema.Types.ObjectId, ref: "Admins" },
  genres: { type: String, maxLength: 50 },
  author: { type: String, maxLength: 40 },
});

module.exports = mongoose.model("Books", bookSchema);
