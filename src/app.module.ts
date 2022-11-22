import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './api/order/entities/order.entity';
import { OrderModule } from './api/order/order.module';
import { Stock } from './api/stock/entities/stock.entity';
import { StockImage } from './api/stock/entities/stock_image.entity';
import { StockModule } from './api/stock/stock.module';
import { AuthModule } from './api/user/auth/auth.module';
import { User } from './api/user/entities/user.entity';
import { UsersModule } from './api/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './api/contacts/contacts.module';
import { Contact } from './api/contacts/entities/contacts.entity';

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
      entities: [User, Stock, StockImage, Order, Contact],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    StockModule,
    OrderModule,
    ContactsModule
  ],
})
export class AppModule { }
