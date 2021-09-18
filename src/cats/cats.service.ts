import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { CreateCatDto, UpdateCatDto } from './cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async find(id: number): Promise<Cat> {
    return this.catsRepository.findOne(id);
  }

  async create(cat: CreateCatDto): Promise<InsertResult> {
    return await this.catsRepository.insert(cat);
  }

  async update(id: number, cat: UpdateCatDto): Promise<UpdateResult> {
    return await this.catsRepository.update(id, cat);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.catsRepository.delete(id);
  }
}
