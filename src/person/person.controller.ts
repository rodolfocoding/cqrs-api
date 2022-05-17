import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePersonCommand } from './commands/impl/create-person.command';
import { GetPersonsQuery } from './queries/impl/get-persons.query';

@Controller('person')
export class PersonController {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}

  @Get('all')
  async getAll() {
    return await this.queryBus.execute(new GetPersonsQuery());
  }

  @Post('add')
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  async save(@Body() payload: CreatePersonCommand) {
    this.commandBus.execute(payload);
  }
}
