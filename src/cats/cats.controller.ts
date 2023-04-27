import { Controller, Get, HttpCode, Param, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from 'src/cat/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get() //Basicamente é o que faz a rota de Get
  @HttpCode(204)
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id') //faz o get com o Id como parametro
  findOne(@Param() params: any): string {
    console.log(params.id);
    return 'This action returns a #${params.id} cat';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}

/* O Nest usa os decorators (funções com @) para associar as classes com a metadata e para criar o roteamento*/
