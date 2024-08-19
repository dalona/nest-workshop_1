import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';

@Controller('microcredit')
export class MicrocreditController {
  constructor(private readonly microcreditService: MicrocreditService) {}

  @Post()
  async create(@Body() createMicrocreditDto: CreateMicrocreditDto) {
    return this.microcreditService.create(createMicrocreditDto);
  }

  @Get()
  async findAll() {
    return this.microcreditService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.microcreditService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateMicrocreditDto: UpdateMicrocreditDto) {
    return this.microcreditService.update(id, updateMicrocreditDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.microcreditService.remove(id);
  }
}
