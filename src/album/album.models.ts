export interface Album {
  id: string; 
  name: string;
  year: number;
  artistId: string | null; 
}

export class AlbumInstance implements Album {
  constructor(
    public id: string,
    public name: string,
    public year: number,
    public artistId: string | null,
  ) {}
}
