import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExperience as createExperienceApi } from "../../services/apiExperience";
import toast from "react-hot-toast";

export function useCreateExperience() {
  const queryClient = useQueryClient();

  const {
    mutate: createExperience,
    isPending,
    error,
  } = useMutation({
    mutationFn: createExperienceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["experiences"],
      });
      toast.success("Experience created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createExperience, isPending, error };
}
