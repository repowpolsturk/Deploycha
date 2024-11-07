import { IsInt, IsBoolean } from 'class-validator';

export class CreateUsersRoleDto {
  @IsInt()
  readonly user_id: number;

  @IsInt()
  readonly role_id: number;

  @IsBoolean()
  readonly is_creator: boolean;
}
