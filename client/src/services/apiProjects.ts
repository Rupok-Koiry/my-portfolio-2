import handleApiRequest from "../utils/handleApiRequest";
import api from "./api";

export async function getAllProjects() {
  const response = await handleApiRequest(api.get("/projects"));
  return response.data.data;
}

export async function getProjects(projectId: string) {
  const response = await handleApiRequest(api.get(`/projects/${projectId}`));
  return response.data.data;
}

export async function createProject(newProject: any) {
  const response = await handleApiRequest(api.post("/projects", newProject));
  return response.data.data;
}
export async function updateProject({
  newProject,
  projectId,
}: {
  newProject: any;
  projectId: string;
}) {
  const response = await handleApiRequest(
    api.patch(`/projects/${projectId}`, newProject)
  );
  return response.data.data;
}

export async function deleteProject(projectId: string) {
  const response = await handleApiRequest(api.delete(`/projects/${projectId}`));
  return response.data.data;
}
