import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBlog as updateBlogApi } from "../../services/apiBlogs";
import toast from "react-hot-toast";

export function useUpdateBlog() {
  const queryClient = useQueryClient();

  const {
    mutate: updateBlog,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateBlogApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateBlog, isUpdating, error };
}
