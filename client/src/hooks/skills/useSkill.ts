import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../services/apiSkills";
import { useParams } from "react-router-dom";

export function useSkill() {
  const { skillId } = useParams();

  const {
    isLoading,
    data: skill,
    error,
  } = useQuery({
    queryKey: ["skill", skillId],
    queryFn: () => getSkills(skillId as string),
    retry: false,
  });

  return { isLoading, skill, error };
}
