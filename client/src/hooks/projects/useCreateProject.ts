import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject as createProjectApi } from "../../services/apiProjects";
import toast from "react-hot-toast";

export function useCreateProject() {
  const queryClient = useQueryClient();

  const {
    mutate: createProject,
    isPending,
    error,
  } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success("Project created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createProject, isPending, error };
}
