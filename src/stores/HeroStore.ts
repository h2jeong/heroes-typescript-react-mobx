import { observable, action, computed } from "mobx";
import { THero } from "../types/heros.type";
import {
  allHeroes,
  getHeroById,
  postHero,
  deleteHero,
  putHero
} from "./HeroService";

class HeroStore {
  @observable heroes: THero[] = [];
  @observable hero: THero = {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };
  @observable isLoading: boolean = false;
  error: string = "";

  @action getHeroes = async () => {
    this.isLoading = true;
    try {
      this.heroes = (await allHeroes()).data;
    } catch (e) {
      this.error = e.message;
      alert(this.error);
    }
    this.isLoading = false;
  };

  @action getHero = async (id: string) => {
    this.isLoading = true;
    try {
      this.hero = (await getHeroById(id)).data;
    } catch (e) {
      this.error = e.message;
      alert(this.error);
    }
    this.isLoading = false;
  };
  @action addHero = async (hero: THero) => {
    this.isLoading = true;
    try {
      await postHero(hero);
    } catch (e) {
      this.error = e.message;
      alert(this.error);
    }
    this.isLoading = false;
  };
  @action updateHero = async (hero: THero) => {
    this.isLoading = true;
    try {
      await putHero(hero);
      this.heroes = this.heroes.map(h => (h.id === hero.id ? hero : h));
    } catch (e) {
      this.error = e.message;
      alert(this.error);
    }
    this.isLoading = false;
  };
  @action removeHero = async (id: string) => {
    this.isLoading = true;
    try {
      await deleteHero(id);
      this.heroes = this.heroes.filter(h => h.id !== id);
    } catch (e) {
      this.error = e.message;
      alert(this.error);
    }
    this.isLoading = false;
  };

  @action setHero = (hero: THero): void => {
    this.hero = hero;
  };

  @computed get heroesCount(): number {
    return this.heroes.length;
  }
}

export default HeroStore;
