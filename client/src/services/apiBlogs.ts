import handleApiRequest from "../utils/handleApiRequest";
import api from "./api";

export async function getAllBlogs() {
  const response = await handleApiRequest(api.get("/blogs"));
  return response.data.data;
}

export async function getBlogs(blogId: string) {
  const response = await handleApiRequest(api.get(`/blogs/${blogId}`));
  return response.data.data;
}

export async function createBlog(newBlog: any) {
  const response = await handleApiRequest(api.post("/blogs", newBlog));
  return response.data.data;
}
export async function updateBlog({
  newBlog,
  blogId,
}: {
  newBlog: any;
  blogId: string;
}) {
  const response = await handleApiRequest(
    api.patch(`/blogs/${blogId}`, newBlog)
  );
  return response.data.data;
}

export async function deleteBlog(blogId: string) {
  const response = await handleApiRequest(api.delete(`/blogs/${blogId}`));
  return response.data.data;
}
