import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FinancialRecordModule } from './financial-record/financial-record.module';
import { MicrocreditModule } from './microcredit/microcredit.module';

@Module({
  imports: [UsersModule, FinancialRecordModule, MicrocreditModule],
})
export class AppModule {}
