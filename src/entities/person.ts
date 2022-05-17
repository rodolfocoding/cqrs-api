import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Person' })
export class Person {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'age' })
  age: number;
}
