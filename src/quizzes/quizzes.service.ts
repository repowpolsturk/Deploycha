import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from '../quizzes/model/quizzes.model';
import { CreateQuizDto } from '../quizzes/dto/create-quiz.dto';
import { UpdateQuizDto } from '../quizzes/dto/update-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectModel(Quiz)
    private quizModel: typeof Quiz,
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizModel.create(createQuizDto);
  }

  async findAll(): Promise<Quiz[]> {
    return this.quizModel.findAll();
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizModel.findByPk(id);
    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }
    return quiz;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.findOne(id);
    return quiz.update(updateQuizDto);
  }

  async remove(id: number): Promise<void> {
    const quiz = await this.findOne(id);
    await quiz.destroy();
  }
}
