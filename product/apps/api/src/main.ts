import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const port = Number(process.env.API_PORT ?? 3000);
  const allowedOrigin = process.env.WEB_ORIGIN ?? '*';
  app.enableCors({ origin: allowedOrigin, credentials: false });
  await app.listen(port);
  console.log(`talkingoli-api listening on port ${port}`);
}

bootstrap().catch((error) => {
  console.error('Failed to bootstrap talkingoli-api', error);
  process.exit(1);
});
