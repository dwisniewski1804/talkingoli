import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Queue, Worker, JobsOptions } from 'bullmq';

const DEFAULT_QUEUE = 'default';
const PING_JOB = 'PING_JOB';

@Injectable()
export class QueueService implements OnModuleInit, OnModuleDestroy {
  private queue?: Queue;
  private worker?: Worker;

  async onModuleInit() {
    const connection = {
      host: process.env.REDIS_HOST ?? 'localhost',
      port: Number(process.env.REDIS_PORT ?? 6379),
    };

    this.queue = new Queue(DEFAULT_QUEUE, { connection });

    this.worker = new Worker(
      DEFAULT_QUEUE,
      async (job) => {
        if (job.name === PING_JOB) {
          console.log(`Received ${PING_JOB} at`, job.data?.timestamp ?? new Date().toISOString());
        }
      },
      { connection },
    );

    const jobOptions: JobsOptions = { removeOnComplete: true, removeOnFail: true };
    await this.queue.add(PING_JOB, { timestamp: new Date().toISOString() }, jobOptions);
  }

  async onModuleDestroy() {
    await this.worker?.close();
    await this.queue?.close();
  }
}
