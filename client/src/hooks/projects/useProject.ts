import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";
import { useParams } from "react-router-dom";

export function useProject() {
  const { projectId } = useParams();

  const {
    isLoading,
    data: project,
    error,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjects(projectId as string),
    retry: false,
  });

  return { isLoading, project, error };
}
