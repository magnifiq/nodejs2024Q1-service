export interface User {
  id: string; 
  login: string;
  password: string;
  version: number; 
  createdAt: number; 
  updatedAt: number; 
}

export class UserInstance implements User {
  constructor(
    public id: string,
    public login: string,
    public password: string,
    public version: number,
    public createdAt: number,
    public updatedAt: number,
  ) {}
}
