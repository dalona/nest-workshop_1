import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFinancialRecordDto } from './dto/create-financial-record.dto';
import { UpdateFinancialRecordDto } from './dto/update-financial-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialRecord } from './entities/financial-record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialRecordService {
  constructor(
    @InjectRepository(FinancialRecord)
    private readonly financialRecordRepository: Repository<FinancialRecord>,
  ) {}

  async create(createFinancialRecordDto: CreateFinancialRecordDto) {
    const financialRecord = this.financialRecordRepository.create(createFinancialRecordDto);
    return await this.financialRecordRepository.save(financialRecord);
  }

  async findAll() {
    return await this.financialRecordRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const financialRecord = await this.financialRecordRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!financialRecord) {
      throw new NotFoundException(`Financial record with ID ${id} not found`);
    }
    return financialRecord;
  }

  async update(id: number, updateFinancialRecordDto: UpdateFinancialRecordDto) {
    await this.financialRecordRepository.update(id, updateFinancialRecordDto);
    const updatedRecord = await this.findOne(id);
    return updatedRecord;
  }

  async remove(id: number) {
    const result = await this.financialRecordRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Financial record with ID ${id} not found`);
    }
  }
  
}
