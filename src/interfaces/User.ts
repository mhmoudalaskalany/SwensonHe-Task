import { Base } from "./Base";

export interface User extends Base {
    password: string;
    firstName?: string;
    lastName?: string;
}