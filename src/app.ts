
/**
 * External Modules
 */
import * as dotenv from "dotenv";

import server from './config/server';


/**
 * Application Configuration
 */

dotenv.config();


/**
 * Server COnfiguration
 */
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server Connected At Port ${PORT}`);
});

