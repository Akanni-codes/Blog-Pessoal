import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostagemModule } from './postagem/postagem.module';

import { TemaModule } from './tema/tema.module';
import { AutthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';

import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './auth/data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    AutthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
