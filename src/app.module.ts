import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/portalAluno01', ),
    UsersModule,
  AuthModule,
  AlunoModule,
  ],
  
  
})
export class AppModule {}
