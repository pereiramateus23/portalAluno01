import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

// Serviço para gerenciar usuários
@Injectable() 
export class UsersService { 
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
    
  async register(createUserDto: CreateUserDto) {
    const { nome, email, senha, matricula } = createUserDto;

    
    const emailExistente = await this.userModel.findOne({ email });
    const matriculaExistente = await this.userModel.findOne({ matricula });
    if (emailExistente || matriculaExistente) {
      throw new BadRequestException('E-mail ou matrícula já cadastrados');
    }

    // criptografar senha
    const hashedPassword = await bcrypt.hash(senha, 10); 

    const novoUsuario = new this.userModel({
      nome,
      email,
      senha: hashedPassword,
      matricula,
    });
      
    await novoUsuario.save();

    return {
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario: {
        nome: novoUsuario.nome,
        email: novoUsuario.email,
        matricula: novoUsuario.matricula,
      },
    };
  }
  
  async listarUsuarios() {
    return this.userModel.find().select('-senha'); // Exclui o campo senha dos resultados
  }
    
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }
    async findByResetToken(token: string) {
  return this.userModel.findOne({ resetToken: token });
}

}


