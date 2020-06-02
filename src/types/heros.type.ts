export interface THero {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
}

export interface THeroes {
  heroes: THero[];
  hero: THero;
  isLoading: boolean;
  error: string;
}
