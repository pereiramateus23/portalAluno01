// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface.js';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 🔑 Lê o token do cabeçalho Authorization
      ignoreExpiration: false,
      secretOrKey: 'segredoSuperSeguro', // mesmo segredo usado no JwtModule
    });
  }
    // valida o token e retorna os dados do usuário
  async validate(payload: JwtPayload) {
    const user = await this.usersService.findByEmail(payload.email);
    if (!user) return null;
    return user; // o Nest injeta isso em req.user
  }
}
