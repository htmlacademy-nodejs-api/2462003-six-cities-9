import { PinoLogger } from './shared/libs/logger/index.js';
import { RestApplication } from './rest/index.js';
// import { RestConfig } from './shared/libs/config/index.js';

async function bootstrap() {
  const logger = new PinoLogger;
  const application = new RestApplication(logger);

  await application.init();
}

bootstrap();
