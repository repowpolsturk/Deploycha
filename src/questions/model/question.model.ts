import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Quiz } from 'src/quizzes/model/quizzes.model';
import { Type } from 'src/types/model/type.model';

@Table({ tableName: 'Questions', timestamps: false })
export class Question extends Model<Question> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Quiz)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quiz_id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  question: string;

  @ForeignKey(() => Type)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  type_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  created_at: Date;

  @BelongsTo(() => Quiz)
  quiz: Quiz;

  @BelongsTo(() => Type)
  type: Type;
}
