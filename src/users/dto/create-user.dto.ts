// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role_id: number; // Добавлено поле role_id
}