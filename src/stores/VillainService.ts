import { http } from "../utils/http-service";
import { BaseUrl } from "../utils/api-config";
import { TVillain } from "../types/villains.type";

export async function getVillains() {
  return await http.get(BaseUrl.villains);
}

export async function getVillain(id: string) {
  return await http.get(`${BaseUrl.villains}${id}`);
}

export async function deleteVillain(id: string) {
  return await http.delete(`${BaseUrl.villains}${id}`);
}

export async function postVillain(villain: TVillain) {
  return await http.post(BaseUrl.villains, villain);
}

export async function putVillain(villain: TVillain) {
  return await http.put(`${BaseUrl.villains}${villain.id}`, villain);
}
