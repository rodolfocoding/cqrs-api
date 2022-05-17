import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Person } from './entities/person';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `${process.env.POSTGRES_HOST}`,
      port: parseInt(`${process.env.POSTGRES_PORT}`),
      username: `${process.env.POSTGRES_USER}`,
      password: `${process.env.POSTGRES_PASSWORD}`,
      database: `${process.env.POSTGRES_DB}`,
      entities: [Person],
      synchronize: true,
    }),
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
