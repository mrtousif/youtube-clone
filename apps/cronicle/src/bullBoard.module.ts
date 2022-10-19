import { BullModule, getQueueToken } from '@nestjs/bull';
import { Module, NestModule, Inject, MiddlewareConsumer } from '@nestjs/common';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { Queue } from 'bull';

@Module({
    imports: [
      BullModule.registerQueue({
        name: 'queue1',
      }),
    ],
  })
  export class BullBoardModule implements NestModule {
    @Inject(getQueueToken('queue1'))
    private readonly queue: Queue
  
    configure(consumer: MiddlewareConsumer) {
      const serverAdapter = new ExpressAdapter()
      const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard(
        { queues: [new BullAdapter(this.queue)], serverAdapter },
      )
      serverAdapter.setBasePath('/api/admin/queues')
      consumer.apply(serverAdapter.getRouter()).forRoutes('/admin/queues')
    }
  }