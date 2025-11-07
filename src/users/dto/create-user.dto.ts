import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

//  DTO para criar usuário com validações
export class CreateUserDto { // DTO
  @IsNotEmpty({ message: 'O nome é obrigatório.' }) 
  nome: string;

  @IsEmail({}, { message: 'Insira um e-mail válido.' }) 
  email: string; 

  @MinLength(6, { message: 'A senha deve ter 6 caracteres.' })
  senha: string; 

  @IsNotEmpty({ message: 'A matrícula é obrigatória.' }) 
  matricula: string;
}
