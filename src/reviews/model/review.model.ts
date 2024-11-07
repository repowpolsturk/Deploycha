import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Quiz } from 'src/quizzes/model/quizzes.model';
import { User } from 'src/users/model/user.model';


@Table({ tableName: 'Reviews', timestamps: false })
export class Review extends Model<Review> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @ForeignKey(() => Quiz)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quiz_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  rating: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  comment: string;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Quiz)
  quiz: Quiz;
}
