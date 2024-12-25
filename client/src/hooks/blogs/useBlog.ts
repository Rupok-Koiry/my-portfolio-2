import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../services/apiBlogs";
import { useParams } from "react-router-dom";

export function useBlog() {
  const { blogId } = useParams();

  const {
    isLoading,
    data: blog,
    error,
  } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogs(blogId as string),
    retry: false,
  });

  return { isLoading, blog, error };
}
