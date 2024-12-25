import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../services/apiProjects";

export function useProjects() {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    retry: false,
  });

  return { isLoading, projects, error };
}
