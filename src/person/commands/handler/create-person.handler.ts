import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/entities/person';
import { Repository } from 'typeorm';
import { CreatePersonCommand } from '../impl/create-person.command';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}

  async execute(command: CreatePersonCommand): Promise<any> {
    const newPerson = new Person();
    newPerson.age = command.age;
    newPerson.name = command.name;

    await this.personRepo.insert(newPerson);
  }
}
