import mongoose from "mongoose";

/* LatestNewsSchema will correspond to a collection in your MongoDB database. */

const LatestNewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide your title."],
    },
    paragraphs: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      default: "latestnews",
    },
  },
  { timestamps: true }
);

export default mongoose.models.LatestNews ||
  mongoose.model("LatestNews", LatestNewsSchema);
