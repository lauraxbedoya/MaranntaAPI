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
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ContactsModule } from './api/contacts/contacts.module';
import { Contact } from './api/contacts/entities/contacts.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';

@Module({
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get('DB_HOST'),
          port: +config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          entities: [User, Stock, StockImage, Order, Contact],
          synchronize: true,
        }
      },
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    StockModule,
    OrderModule,
    ContactsModule,
    CloudinaryModule
  ],
})
export class AppModule { }
