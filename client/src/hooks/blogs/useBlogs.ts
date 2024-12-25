import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../services/apiBlogs";

export function useBlogs() {
  const {
    isLoading,
    data: blogs,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  return { isLoading, blogs, error };
}
