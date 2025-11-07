import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express'; 
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

interface JwtPayload {
  sub: string;  // ID do usuário
  email: string;
  iat?: number; // opcional- data de emissão
  exp?: number; // opcional- data de expiração
}

@Controller('aluno')
export class AlunoController {
  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  getDashboard(@Req() request: Request) {
    const user = request['user'] as JwtPayload; // define o tipo explicitamente

    if (!user) {
      return { mensagem: 'Usuário não autenticado' };
    }

    return {
      mensagem: `Bem-vindo, ${user.email}!`,
      usuario: user.sub, // ID do usuário vindo do token
    };
  }
}
