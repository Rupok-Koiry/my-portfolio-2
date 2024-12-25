import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../../services/apiExperience";
import { useParams } from "react-router-dom";

export function useExperience() {
  const { experienceId } = useParams();

  const {
    isLoading,
    data: experience,
    error,
  } = useQuery({
    queryKey: ["experience", experienceId],
    queryFn: () => getExperiences(experienceId as string),
    retry: false,
  });

  return { isLoading, experience, error };
}
