import { Errors } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';
import Logger from '../utils/logger';
import HttpException from './http.exception';

class UnexpectedException extends HttpException {
    constructor(err: Error, logger: Logger) {
        logger.error(err.message);
        const error = Errors.UnexpectedError;
        super(StatusCodes.UnhandledError, error.code, error.message);
    }
}

export default UnexpectedException;
