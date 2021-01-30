import Logger from '../utils/logger';

/**
 * This is an abstract class that should be implemented by all services.
 *
 * There is the logger that can be used throughout all custom functions.
 */
abstract class Service {
    protected logger: Logger;

    /**
     * Only used to initiate the logger with the defined `filename` and `requestId`
     * @param logger Logger of the related function/controller
     */
    constructor(logger: Logger) {
        this.logger = logger;
    }
}

export default Service;
