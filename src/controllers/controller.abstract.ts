import { Router } from 'express';
import { Routes } from '../constants/routes';
import { IController } from '../interfaces';

abstract class Controller implements IController {
    public path: Routes;
    public router: Router;
    public filename: string;

    constructor(path: Routes, filename: string) {
        this.path = path;
        this.router = Router();
        this.filename = filename;
        this.initializeRoutes();
    }

    public abstract initializeRoutes(): void;
}

export default Controller;
