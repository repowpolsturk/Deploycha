import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from '../questions/model/question.model';
import { CreateQuestionDto } from '../questions/dto/create-question.dto';
import { UpdateQuestionDto } from '../questions/dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question)
    private questionModel: typeof Question,
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionModel.create(createQuestionDto);
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.findAll();
  }

  async findOne(id: number): Promise<Question> {
    const question = await this.questionModel.findByPk(id);
    if (!question) {
      throw new NotFoundException('Question not found');
    }
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
    const question = await this.findOne(id);
    return question.update(updateQuestionDto);
  }

  async remove(id: number): Promise<void> {
    const question = await this.findOne(id);
    await question.destroy();
  }
}
