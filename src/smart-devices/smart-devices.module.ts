import { Module } from '@nestjs/common';
import { SmartDevicesService } from './smart-devices.service';
import { SmartDevicesController } from './smart-devices.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SmartDevicesController],
  providers: [SmartDevicesService],
  imports: [PrismaModule]
})
export class SmartDevicesModule {}
