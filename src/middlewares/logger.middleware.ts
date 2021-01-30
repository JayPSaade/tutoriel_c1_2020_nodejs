import { NextFunction, Response } from 'express';
import { IRequest } from '../interfaces';

function loggerMiddleware(request: IRequest, response: Response, next: NextFunction) {
    try {
        const requestId = Math.floor(Math.random() * Math.floor(99999)) + Date.now();
        console.log(`New request incoming - Request id: `, requestId, request.method, request.url);
        request.requestId = requestId;
        next();
    } catch (err) {
        next();
    }
}

export default loggerMiddleware;
