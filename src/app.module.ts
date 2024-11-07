import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/model/user.model';
import { Role } from './roles/model/role.model';
import { UsersRole } from './users_role/model/users_role.model';
import { Quiz } from './quizzes/model/quizzes.model';
import { Category } from './categories/model/category.model';
import { Review } from './reviews/model/review.model';
import { Question } from './questions/model/question.model';
import { Answer } from './answers/model/answer.model';
import { Result } from './results/model/result.model';
import { Type } from './types/model/type.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UsersRoleModule } from './users_role/users_role.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { QuestionsModule } from './questions/questions.module';
import { TypesModule } from './types/types.module';
import { ResultsModule } from './results/results.module';
import { AnswersModule } from './answers/answers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Make sure to load environment variables from .env file
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('PG_HOST'), // Use PG_HOST from .env
        port: +configService.get('PG_PORT'), // Use PG_PORT from .env, converted to number
        username: configService.get('PG_USERNAME'), // Use PG_USERNAME from .env
        password: configService.get('PG_PASSWORD'), // Use PG_PASSWORD from .env
        database: configService.get('PG_DATABASE'), // Use PG_DATABASE from .env
        models: [
          User,
          Role,
          UsersRole,
          Quiz,
          Category,
          Review,
          Question,
          Answer,
          Result,
          Type,
        ],
        autoLoadModels: true, // Automatically loads all models defined in the application
        synchronize: true, // Synchronize models with the database (use cautiously in production)
        logging: false, // Set to true for debugging purposes
      }),
    }),
    UsersModule,
    RolesModule,
    UsersRoleModule,
    QuizzesModule,
    CategoriesModule,
    ReviewsModule,
    QuestionsModule,
    AnswersModule,
    ResultsModule,
    TypesModule,
    AuthModule,
  ],
})
export class AppModule {}
