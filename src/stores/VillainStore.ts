import { observable, computed, action } from "mobx";
import { TVillain } from "../types/villains.type";
import {
  getVillains,
  getVillain,
  deleteVillain,
  postVillain,
  putVillain
} from "./VillainService";

class VillainStore {
  @observable villains: TVillain[] = [];
  @observable villain: TVillain = {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: ""
  };
  isLoading: boolean = false;
  error: string = "";

  @computed get villainsCount(): number {
    return this.villains.length;
  }

  @action setVillain(villain: TVillain) {
    this.villain = villain;
  }

  @action async getAllVillains() {
    this.villains = (await getVillains()).data;
  }

  @action async getVillainById(id: string) {
    this.villain = (await getVillain(id)).data;
  }

  @action async removeVillain(id: string) {
    await deleteVillain(id);
    this.villains = this.villains.filter(v => v.id !== id);
  }

  @action async addVillain(villain: TVillain) {
    await postVillain(villain);
    this.villains.unshift(villain);
  }

  @action async updateVillain(villain: TVillain) {
    await putVillain(villain);
    this.villains = this.villains.map(v => (v.id === villain.id ? villain : v));
  }
}

export default VillainStore;
