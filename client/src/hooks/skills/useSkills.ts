import { useQuery } from "@tanstack/react-query";
import { getAllSkills } from "../../services/apiSkills";

export function useSkills() {
  const {
    isLoading,
    data: skills,
    error,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: getAllSkills,
    retry: false,
  });

  return { isLoading, skills, error };
}
