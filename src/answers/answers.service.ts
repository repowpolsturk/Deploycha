import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from '../answers/model/answer.model';
import { CreateAnswerDto } from '../answers/dto/create-answer.dto';
import { UpdateAnswerDto } from '../answers/dto/update-answer.dto';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer)
    private answerModel: typeof Answer,
  ) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.answerModel.create(createAnswerDto);
  }

  async findAll(): Promise<Answer[]> {
    return this.answerModel.findAll();
  }

  async findOne(id: number): Promise<Answer> {
    const answer = await this.answerModel.findByPk(id);
    if (!answer) {
      throw new NotFoundException('Answer not found');
    }
    return answer;
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<Answer> {
    const answer = await this.findOne(id);
    return answer.update(updateAnswerDto);
  }

  async remove(id: number): Promise<void> {
    const answer = await this.findOne(id);
    await answer.destroy();
  }
}
