import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExperience as deleteExperienceApi } from "../../services/apiExperience";
import toast from "react-hot-toast";

export function useDeleteExperience() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteExperience } = useMutation({
    mutationFn: deleteExperienceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experiences"],
      });
      toast.success("Experience deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteExperience };
}
