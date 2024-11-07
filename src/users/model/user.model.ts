import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from 'src/roles/model/role.model';


@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column({ unique: true })
  email: string;

  @Column
  password: string;

  @ForeignKey(() => Role)
  @Column
  role_id: number;

  @BelongsTo(() => Role)
  role: Role;
}
