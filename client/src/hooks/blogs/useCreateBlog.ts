import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog as createBlogApi } from "../../services/apiBlogs";
import toast from "react-hot-toast";

export function useCreateBlog() {
  const queryClient = useQueryClient();

  const {
    mutate: createBlog,
    isPending,
    error,
  } = useMutation({
    mutationFn: createBlogApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createBlog, isPending, error };
}
