import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Types', timestamps: false })
export class Type extends Model<Type> {
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
