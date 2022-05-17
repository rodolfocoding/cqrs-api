import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { Repository } from 'typeorm';
import { GetPersonsQuery } from '../impl/get-persons.query';

@QueryHandler(GetPersonsQuery)
export class GetPersonsHandler implements IQueryHandler<GetPersonsHandler> {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  async execute(): Promise<Person[]> {
    return await this.personRepo.find();
  }
}
