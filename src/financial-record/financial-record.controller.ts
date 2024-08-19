import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialRecordService } from './financial-record.service';
import { CreateFinancialRecordDto } from './dto/create-financial-record.dto';
import { UpdateFinancialRecordDto } from './dto/update-financial-record.dto';

@Controller('financial-record')
export class FinancialRecordController {
  constructor(private readonly financialRecordService: FinancialRecordService) {}

  @Post()
  async create(@Body() createFinancialRecordDto: CreateFinancialRecordDto) {
    return this.financialRecordService.create(createFinancialRecordDto);
  }

  @Get()
  async findAll() {
    return this.financialRecordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.financialRecordService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, 
  @Body() updateFinancialRecordDto: UpdateFinancialRecordDto) {
    return this.financialRecordService.update(id, updateFinancialRecordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.financialRecordService.remove(id);
  }
}
