import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
     forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: 'segredoSuperSeguro', // ideal armazenar em variável .env
      signOptions: { expiresIn: '1h' }, // token expira em 1 hora
    }),

      
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
