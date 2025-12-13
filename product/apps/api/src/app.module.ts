import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { QueueService } from './queue.service';

@Module({
  controllers: [HealthController],
  providers: [QueueService],
})
export class AppModule {}
