import shortid from 'shortid';
import debug from 'debug';
import { CreateUserDto } from '../dto/User';

const log: debug.IDebugger = debug('app:in-memory-dao');

class User {
    users: Array<CreateUserDto> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }
}

export default new User();