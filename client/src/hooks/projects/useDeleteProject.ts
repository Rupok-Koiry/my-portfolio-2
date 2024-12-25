import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success("Project deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteProject };
}
