import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto, ResetPasswordDto } from './dto/reset-password.dto';

  // Serviço de autenticação
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.usersService.findByEmail(email);
    if (usuario && (await bcrypt.compare(senha, usuario.senha))) {
      const { senha, ...result } = usuario.toObject();
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const usuario = await this.validarUsuario(loginDto.email, loginDto.senha);

    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { email: usuario.email, sub: usuario._id };
    const token = this.jwtService.sign(payload);

    return {
      mensagem: 'Login realizado com sucesso!',
      token,
    };
  }
  //Esqueci minha senha
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new BadRequestException('E-mail não encontrado.');

    // Gerar token temporário aleatório
    const token = crypto.randomBytes(20).toString('hex');
      
    user.resetToken = token;
    user.resetTokenExpira = new Date(Date.now() + 3600000); // 1 hora
    await user.save();

    // Aqui você poderia enviar o token por e-mail /simulando isso retornando o token no JSON.
    return {
      mensagem: 'Token de redefinição gerado por 1 hora).',
      token,
    };
  }

  //Redefinir senha
  async resetPassword(dto: ResetPasswordDto) {  // alterado para async
    const user = await this.usersService.findByResetToken(dto.token); 
    if (!user) throw new BadRequestException('Token inválido ou expirado.');  

    
    if (!user.resetTokenExpira || user.resetTokenExpira < new Date()) {
      throw new BadRequestException('Token expirado.');
    }
    const novaSenhaHash = await bcrypt.hash(dto.novaSenha, 10);

    user.senha = novaSenhaHash;
    user.resetToken = undefined;
    user.resetTokenExpira = undefined;
    await user.save();

    return { mensagem: 'Senha redefinida com sucesso!' };
  }
}
