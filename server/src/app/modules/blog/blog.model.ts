import { Schema, model } from 'mongoose';
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },

    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Blog = model('Blog', blogSchema);
export default Blog;
