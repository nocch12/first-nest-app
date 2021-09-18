import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { ListAllEntities } from './list-all-entities.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() CreateCatDto: CreateCatDto) {
    console.log(CreateCatDto.age);
    return await this.catsService.create(CreateCatDto);
  }

  @Get()
  // @Redirect('https://nestjs.com', 301)
  // getDocs(@Query('veision') version: string) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  async findAll(@Query() query: ListAllEntities) {
    return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.catsService.find(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.catsService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    return await this.catsService.update(id, updateCatDto);
  }
}
