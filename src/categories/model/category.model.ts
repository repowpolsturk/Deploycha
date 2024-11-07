import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Categories', timestamps: false })
export class Category extends Model<Category> {
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
  name: string;
}
