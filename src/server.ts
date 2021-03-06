import 'dotenv/config';
import 'reflect-metadata';

import App from './app';
import HealthController from './controllers/health/health.controller';
import SalutController from './controllers/salut/salut.controller';
import { validateEnv } from './utils/validateEnv';

// validating env
validateEnv();
const app = new App(
    [
        new HealthController(),
        new SalutController()
    ],
    parseInt(process.env.PORT, 10)
);

app.listen();
