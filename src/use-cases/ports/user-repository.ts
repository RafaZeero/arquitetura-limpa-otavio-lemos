import { UserData } from '../../entities/user-data';

export type Add = (user: UserData) => Promise<void>;
export type FindUserByEmail = (email: string) => Promise<UserData>;
export type FindAllUsers = () => Promise<UserData[]>;
export type Exists = (user: UserData) => Promise<boolean>;
