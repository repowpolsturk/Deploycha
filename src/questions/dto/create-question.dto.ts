import { IsInt, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateQuestionDto {
  @IsInt()
  readonly quiz_id: number;

  @IsString()
  readonly question: string;

  @IsInt()
  @IsOptional()
  readonly type_id?: number;

  @IsDate()
  @IsOptional()
  readonly created_at?: Date;
}
