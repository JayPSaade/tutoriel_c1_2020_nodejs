import { NextFunction, Request, Response } from 'express';
import { Routes } from '../../constants/routes';
import IdInParamsDto from '../../dtos/id-in-params.dto';
import SomeException from '../../exceptions/some-error.exception';
import { IRequest } from '../../interfaces';
import validationMiddleware from '../../middlewares/validation.middleware';
import Logger from '../../utils/logger';
import { getResponse } from '../../utils/response';
import Controller from '../controller.abstract';

const filename = __filename.split(/(\\|\/)/g).pop();
class SalutController extends Controller {
    constructor() {
        super(Routes.Salut, filename);
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.sayHello);
        this.router.get(`${this.path}/:id`, validationMiddleware({ params: IdInParamsDto }), this.sayHelloToFriend);
        this.router.post(`${this.path}`, this.generateError);
    }

    private async sayHello(request: Request, response: Response, next: NextFunction) {
        response.send(getResponse('Salut!'));
    }

    private async sayHelloToFriend(request: Request, response: Response, next: NextFunction) {
        const name = request.params.id;
        response.send(getResponse(`Salut ${name}!`));
    }

    private async generateError(request: IRequest, response: Response, next: NextFunction) {
        const logger = new Logger(filename, request.requestId);
        logger.warn('Auto-generated error');
        return next(new SomeException('Une erreur auto-genere'));
    }
}

export default SalutController;
