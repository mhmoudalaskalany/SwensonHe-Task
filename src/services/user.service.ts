import { User } from "../interfaces/User";

export class UserService {
    users: User[] = [
        {
            id: '1',
            firstName: "mahmoud",
            lastName: "ragab",
            password: "123456"
        },
        {
            id: '2',
            firstName: "ahmed",
            lastName: "ragab",
            password: "123456"
        },
        {
            id: '3',
            firstName: "mohammed",
            lastName: "ragab",
            password: "123456"
        }
    ]
    constructor() {

    }

    findAll = async (): Promise<User[]> => Object.values(this.users);

    find = async (id: number): Promise<User> => this.users[id];

}

// export default new UserService();



