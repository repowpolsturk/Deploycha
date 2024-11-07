import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateAnswerDto {
  @IsInt()
  readonly question_id: number;

  @IsString()
  readonly answer: string;

  @IsBoolean()
  @IsOptional()
  readonly is_correct?: boolean;

  @IsInt()
  readonly user_id: number;

  @IsInt()
  @IsOptional()
  readonly results_id?: number;
}
