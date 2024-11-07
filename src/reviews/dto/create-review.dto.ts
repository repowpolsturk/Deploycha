import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  readonly user_id: number;

  @IsInt()
  readonly quiz_id: number;

  @IsInt()
  @IsOptional()
  readonly rating?: number;

  @IsString()
  @IsOptional()
  readonly comment?: string;
}
