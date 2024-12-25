import * as factory from '../../utils/handlerFactory';
import Blog from './blog.model';

export const createBlog = factory.createOne(Blog);
export const getBlog = factory.getOne(Blog);
export const getAllBlogs = factory.getAll(Blog);
export const updateBlog = factory.updateOne(Blog);
export const deleteBlog = factory.deleteOne(Blog);
