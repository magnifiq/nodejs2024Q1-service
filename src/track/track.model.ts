export interface Track {
  id: string; 
  name: string;
  artistId: string | null; 
  albumId: string | null; 
  duration: number; 
}

export class TrackInstance implements Track {
  constructor(
    public id: string,
    public name: string,
    public artistId: string | null,
    public albumId: string | null,
    public duration: number,
  ) {}
}
