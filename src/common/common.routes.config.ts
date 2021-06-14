import express from 'express';

export abstract class CommonRoutesConfig {
    /**
     * Private Fields
     */
    app: express.Application;
    name: string;
    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName(): String {
        return this.name;
    }

    /**
     * Abstract Functions
     */
    abstract configureRoutes(): express.Application;
}