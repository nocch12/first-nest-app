import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [TypeOrmModule.forFeature([Cat])],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catsService: CatsService) {}
}
