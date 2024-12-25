import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject as updateProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useUpdateProject() {
  const queryClient = useQueryClient();

  const {
    mutate: updateProject,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success("Project updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateProject, isUpdating, error };
}
