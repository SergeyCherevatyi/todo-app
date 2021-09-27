export enum EOrder {
  ASC = "ACS", // 0 - 10
  DESC = "DESC", // 10 - 0
}

export interface IUserFilterSettings {
  search: string;
  order: EOrder;
  sortBy: keyof IUser;
}

export interface IUserState {
  error: null | string;
  loading: boolean;
  filterSettings: IUserFilterSettings;
  users: IUser[];
  user: null | IUser;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  cratedAt: Date;
  avatar: null | string;
}
