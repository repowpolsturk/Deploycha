import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Role } from 'src/roles/model/role.model';
import { User } from 'src/users/model/user.model';

@Table({ tableName: 'Users_role', timestamps: false })
export class UsersRole extends Model<UsersRole> {
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

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_creator: boolean;
}
