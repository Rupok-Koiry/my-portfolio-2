import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExperience as updateExperienceApi } from "../../services/apiExperience";
import toast from "react-hot-toast";

export function useUpdateExperience() {
  const queryClient = useQueryClient();

  const {
    mutate: updateExperience,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateExperienceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
      toast.success("Experience updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateExperience, isUpdating, error };
}
