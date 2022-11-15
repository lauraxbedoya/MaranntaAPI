import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4321,
      username: 'postgres',
      password: 'postgres',
      database: 'marannta_api',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
