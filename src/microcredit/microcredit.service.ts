import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MicrocreditService {
  constructor(
    @InjectRepository(Microcredit)
    private readonly microcreditRepository: Repository<Microcredit>,
  ) {}

  async create(createMicrocreditDto: CreateMicrocreditDto) {
    const microcredit = this.microcreditRepository.create(createMicrocreditDto);
    return await this.microcreditRepository.save(microcredit);
  }

  async findAll() {
    return await this.microcreditRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const microcredit = await this.microcreditRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!microcredit) {
      throw new NotFoundException(`Microcredit with ID ${id} not found`);
    }
    return microcredit;
  }

  async update(id: number, updateMicrocreditDto: UpdateMicrocreditDto){
    await this.microcreditRepository.update(id, updateMicrocreditDto);
    const updatedMicrocredit = await this.findOne(id);
    return updatedMicrocredit;
  }

  async remove(id: number) {
    const result = await this.microcreditRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Microcredit with ID ${id} not found`);
    }
  }
 
}
