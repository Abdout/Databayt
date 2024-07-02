import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema(
  {
    title: String,
    desc: String,
    body: String,
    image: String,
    author: String,
    slug: String,
    catSlug: String,
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;