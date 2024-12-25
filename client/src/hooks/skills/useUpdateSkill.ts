import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSkill as updateSkillApi } from "../../services/apiSkills";
import toast from "react-hot-toast";

export function useUpdateSkill() {
  const queryClient = useQueryClient();

  const {
    mutate: updateSkill,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateSkillApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["skills"],
      });
      toast.success("Skill updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateSkill, isUpdating, error };
}
