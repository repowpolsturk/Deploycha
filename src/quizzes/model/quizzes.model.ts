import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Category } from 'src/categories/model/category.model';
import { User } from 'src/users/model/user.model';

@Table({ tableName: 'Quizzes', timestamps: false })
export class Quiz extends Model<Quiz> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  creator_id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  category_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  created_at: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  sorting: string;

  @BelongsTo(() => User)
  creator: User;

  @BelongsTo(() => Category)
  category: Category;
}
