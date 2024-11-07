import { IsString, IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  readonly title: string;

  @IsInt()
  readonly creator_id: number;

  @IsInt()
  @IsOptional()
  readonly category_id?: number;

  @IsDate()
  @IsOptional()
  readonly created_at?: Date;

  @IsString()
  @IsOptional()
  readonly sorting?: string;
}
