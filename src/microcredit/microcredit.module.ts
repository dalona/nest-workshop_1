import { Module } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { MicrocreditController } from './microcredit.controller';

@Module({
  controllers: [MicrocreditController],
  providers: [MicrocreditService],
})
export class MicrocreditModule {}
