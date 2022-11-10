export interface User {
    id:number;
    userName: string;
    email?: string;
    password: string;
    mobile?: number;
    photo?:string
}
export interface login {
  userName: string;
  email?: string;
  password: string;
  mobile?: number;
}
