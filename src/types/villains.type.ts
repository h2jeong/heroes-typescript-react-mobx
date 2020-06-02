export interface TVillain {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
}

export interface TVillains {
  villainses: TVillain[];
  villains: TVillains;
  isLoading: boolean;
  error: string;
}
