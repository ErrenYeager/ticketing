import { Module } from '@nestjs/common';
import { TicketModule } from './ticket/ticket.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamModule } from './param/param.module';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    TicketModule,
    ParamModule,
    ]
})
export class AppModule {}

