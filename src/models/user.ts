import shortid from 'shortid';
import debug from 'debug';
import { User } from '../interfaces/User';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UserRepostoiry {
    users: Array<User> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }
}

export default new UserRepostoiry();