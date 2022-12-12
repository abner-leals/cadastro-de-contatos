export interface IUser {
  id: string;
  full_name: string;
  telephone: string;
  email: string;
}
export interface IUserRequestCreate {
  full_name: string;
  telephone: string;
  email: string;
  password?: string;
}
export interface IUserResponseCreate {
  id: string;
  full_name?: string;
  phone_number: string;
  email: string;
}
export interface IAuthorization {
  id: string;
  email?: string;
}
export interface IClientUpdate {
  full_name?: string;
  telephone?: string;
  email?: string;
  password?: string;
}
