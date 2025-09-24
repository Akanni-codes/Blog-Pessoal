import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [],
  controllers: [],
  exports: [],
})
export class TemaModule {}
