import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { ListAllEntities } from './list-all-entities.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() CreateCatDto: CreateCatDto) {
    console.log(CreateCatDto.age);
    this.catsService.create(CreateCatDto);
    return 'created cat';
  }

  @Get()
  // @Redirect('https://nestjs.com', 301)
  // getDocs(@Query('veision') version: string) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  findAll(@Query() query: ListAllEntities) {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `return #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `deleted #${id}`;
  }
}
