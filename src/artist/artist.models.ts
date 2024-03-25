export interface Artist {
  id: string; 
  name: string;
  grammy: boolean;
}

export class ArtistInstance implements Artist {
  constructor(public id: string, public name: string, public grammy: boolean) {}
}
