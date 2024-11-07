import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from '../results/results.service';
import { CreateResultDto } from '../results/dto/create-result.dto';
import { UpdateResultDto } from '../results/dto/update-result.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  findAll() {
    return this.resultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDto) {
    return this.resultsService.update(+id, updateResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resultsService.remove(+id);
  }
}
