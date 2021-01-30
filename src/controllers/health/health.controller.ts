import { NextFunction, Request, Response } from 'express';
import { Routes } from '../../constants/routes';
import { getResponse } from '../../utils/response';
import Controller from '../controller.abstract';

const filename = __filename.split(/(\\|\/)/g).pop();
class HealthController extends Controller {
    constructor() {
        super(Routes.Health, filename);
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.checkHealth);
    }

    private async checkHealth(request: Request, response: Response, next: NextFunction) {
        response.send(getResponse<boolean>(true));
    }
}

export default HealthController;
