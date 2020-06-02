import { createContext } from "react";
import HeroStore from "./HeroStore";
import VillainStore from "./VillainStore";

export const rootStoreContext = createContext({
  heroStore: new HeroStore(),
  villainStore: new VillainStore()
});
