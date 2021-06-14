import express from 'express';
import cors from "cors";
import helmet from "helmet";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import debug from 'debug';

import { CommonRoutesConfig } from '../common/common.routes.config';
import { UsersRoutes } from '../users/users.routes.config';
import { errorHandler } from '../middlewares/error.middleware';
const app = express();
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

/**
 * Middlewares Registration
 */
app.use(express.json());
app.use(helmet());
app.use(cors());

/**
 * Add Logger
 */
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));

/**
 * Push ROutes
 */
routes.push(new UsersRoutes(app));


/**
 * Starting Route
 */
const PORT = process.env.PORT || 5000;
const runningMessage = `Server running at http://localhost:${PORT}`;
app.get('/', (req: express.Request, res: express.Response) => {

    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
        console.log(route);
    });
    res.status(200).send(runningMessage);
});


/**
* Register Exceptions Middlewares
*/


app.use(errorHandler);

export default app;