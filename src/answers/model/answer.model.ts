import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Question } from 'src/questions/model/question.model';
import { Result } from 'src/results/model/result.model';
import { User } from 'src/users/model/user.model';

@Table({ tableName: 'Answers', timestamps: false })
export class Answer extends Model<Answer> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Question)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  question_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  answer: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_correct: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Result)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  results_id: number;

  @BelongsTo(() => Question)
  question: Question;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Result)
  result: Result;
}
