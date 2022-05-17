import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { CreatePersonHandler } from './commands/handler/create-person.handler';
import { PersonController } from './person.controller';
import { GetPersonsHandler } from './queries/handler/get-persons.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [GetPersonsHandler, CreatePersonHandler],
})
export class PersonModule {}
