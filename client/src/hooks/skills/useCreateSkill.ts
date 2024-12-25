import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSkill as createSkillApi } from "../../services/apiSkills";
import toast from "react-hot-toast";

export function useCreateSkill() {
  const queryClient = useQueryClient();

  const {
    mutate: createSkill,
    isPending,
    error,
  } = useMutation({
    mutationFn: createSkillApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["skills"],
      });
      toast.success("Skill created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createSkill, isPending, error };
}
