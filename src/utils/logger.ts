import * as tracer from 'tracer';

/**
 * Logger class that wraps `tracer` library in order to prefix the given messages with a `filename` and a `requestId`.
 *
 * The "`tracer`" instance is only created once (static LOGGER) and then each controller imports
 * a new instance of this class.
 *
 * `title` is currently either `info`, `warn`, `error` or `debug`
 */
class Logger {
    private static LOGGER = tracer.colorConsole({
        format: [
            '{{title}}: {{message}}',
            {
                error: '{{title}}: {{message}}, {{method}}\nStack: {{stack}}\n'
            }
        ],
        transport: (log) => {
            // tslint:disable-next-line: no-console
            console.log(log.output);
        }
    });

    private _requestId: string | number;
    private _filename: string;

    constructor(filename: string, requestId: string | number) {
        this._filename = filename;
        this._requestId = requestId;
    }

    public info(message: string, ...args: any) {
        Logger.LOGGER.info(`${this._filename} -- Request Id ${this._requestId}: ${message}`, ...args);
    }
    public error(message: string, ...args: any) {
        Logger.LOGGER.error(`${this._filename} -- Request Id ${this._requestId}: ${message}`, ...args);
    }
    public warn(message: string, ...args: any) {
        Logger.LOGGER.warn(`${this._filename} -- Request Id ${this._requestId}: ${message}`, ...args);
    }
    public debug(message: string, ...args: any) {
        Logger.LOGGER.debug(`${this._filename} -- Request Id ${this._requestId}: ${message}`, ...args);
    }
    public log(message: string, ...args: any) {
        Logger.LOGGER.log(message, ...args);
    }
}

export default Logger;
