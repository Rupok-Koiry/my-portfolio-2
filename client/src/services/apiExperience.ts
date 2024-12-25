import handleApiRequest from "../utils/handleApiRequest";
import api from "./api";

export async function getAllExperiences() {
  const response = await handleApiRequest(api.get("/experiences"));
  return response.data.data;
}

export async function getExperiences(experienceId: string) {
  const response = await handleApiRequest(
    api.get(`/experiences/${experienceId}`)
  );
  return response.data.data;
}

export async function createExperience(newExperience: any) {
  const response = await handleApiRequest(api.post("/experiences", newExperience));
  return response.data.data;
}
export async function updateExperience({
  newExperience,
  experienceId,
}: {
  newExperience: any;
  experienceId: string;
}) {
  const response = await handleApiRequest(
    api.patch(`/experiences/${experienceId}`, newExperience)
  );
  return response.data.data;
}

export async function deleteExperience(experienceId: string) {
  const response = await handleApiRequest(
    api.delete(`/experiences/${experienceId}`)
  );
  return response.data.data;
}
