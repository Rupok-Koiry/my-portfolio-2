import express from 'express';
import auth from '../../middlewares/auth';
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from './blog.controller';

const router = express.Router();

router
  .route('/')
  .get(auth('admin'), getAllBlogs)
  .post(auth('admin'), createBlog);

router
  .route('/:id')
  .get(auth('admin'), getBlog)
  .patch(auth('admin'), updateBlog)
  .delete(auth('admin'), deleteBlog);

export const BlogRoutes = router;
