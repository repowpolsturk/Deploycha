import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Result } from '../results/model/result.model';
import { CreateResultDto } from '../results/dto/create-result.dto';
import { UpdateResultDto } from '../results/dto/update-result.dto';

@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(Result)
    private resultModel: typeof Result,
  ) {}

  async create(createResultDto: CreateResultDto): Promise<Result> {
    return this.resultModel.create(createResultDto);
  }

  async findAll(): Promise<Result[]> {
    return this.resultModel.findAll();
  }

  async findOne(id: number): Promise<Result> {
    const result = await this.resultModel.findByPk(id);
    if (!result) {
      throw new NotFoundException('Result not found');
    }
    return result;
  }

  async update(id: number, updateResultDto: UpdateResultDto): Promise<Result> {
    const result = await this.findOne(id);
    return result.update(updateResultDto);
  }

  async remove(id: number): Promise<void> {
    const result = await this.findOne(id);
    await result.destroy();
  }
}
