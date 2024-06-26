import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SmartDevicesModule } from './smart-devices/smart-devices.module';

@Module({
  imports: [PrismaModule, SmartDevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
