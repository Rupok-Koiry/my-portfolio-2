import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog as deleteBlogApi } from "../../services/apiBlogs";
import toast from "react-hot-toast";

export function useDeleteBlog() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBlog } = useMutation({
    mutationFn: deleteBlogApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
      toast.success("Blog deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteBlog };
}
