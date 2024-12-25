import handleApiRequest from "../utils/handleApiRequest";
import api from "./api";

export async function getAllSkills() {
  const response = await handleApiRequest(api.get("/skills"));
  return response.data.data;
}

export async function getSkills(skillId: string) {
  const response = await handleApiRequest(api.get(`/skills/${skillId}`));
  return response.data.data;
}

export async function createSkill(newSkill: any) {
  const response = await handleApiRequest(api.post("/skills", newSkill));
  return response.data.data;
}
export async function updateSkill({
  newSkill,
  skillId,
}: {
  newSkill: any;
  skillId: string;
}) {
  const response = await handleApiRequest(
    api.patch(`/skills/${skillId}`, newSkill)
  );
  return response.data.data;
}

export async function deleteSkill(skillId: string) {
  const response = await handleApiRequest(api.delete(`/skills/${skillId}`));
  return response.data.data;
}
