import { IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateResultDto {
  @IsInt()
  readonly user_id: number;

  @IsInt()
  readonly quiz_id: number;

  @IsInt()
  @IsOptional()
  readonly score?: number;

  @IsDate()
  @IsOptional()
  readonly completed?: Date;
}
