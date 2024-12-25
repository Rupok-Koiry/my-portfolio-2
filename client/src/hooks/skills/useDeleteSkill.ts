import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSkill as deleteSkillApi } from "../../services/apiSkills";
import toast from "react-hot-toast";

export function useDeleteSkill() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteSkill } = useMutation({
    mutationFn: deleteSkillApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["skills"],
      });
      toast.success("Skill deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteSkill };
}
