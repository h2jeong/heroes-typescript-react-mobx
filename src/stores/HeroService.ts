import { http } from "../utils/http-service";
import { BaseUrl } from "../utils/api-config";
import { THero } from "../types/heros.type";

export async function allHeroes(): Promise<any> {
  // console.log("getHeroes");
  return await http.get(BaseUrl.heroes);
}

export async function getHeroById(id: string): Promise<any> {
  // console.log("getHeroById");
  return await http.get(`${BaseUrl.heroes}${id}`);
}

export async function postHero(hero: THero): Promise<any> {
  // console.log("post");

  return await http.post(BaseUrl.heroes, hero);
}

export async function deleteHero(id: string): Promise<any> {
  // console.log("delete");

  return await http.delete(`${BaseUrl.heroes}${id}`);
}

export async function putHero(hero: THero): Promise<any> {
  // console.log("put");

  return await http.put(`${BaseUrl.heroes}${hero.id}`, hero);
}
