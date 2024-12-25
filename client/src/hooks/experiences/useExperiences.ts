import { useQuery } from "@tanstack/react-query";
import { getAllExperiences } from "../../services/apiExperience";

export function useExperiences() {
  const {
    isLoading,
    data: experiences,
    error,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: getAllExperiences,
    retry: false,
  });

  return { isLoading, experiences, error };
}
