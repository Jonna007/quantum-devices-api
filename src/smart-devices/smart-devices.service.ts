import { Injectable } from '@nestjs/common';
import { CreateSmartDeviceDto } from './dto/create-smart-device.dto';
import { UpdateSmartDeviceDto } from './dto/update-smart-device.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SmartDevice } from '@prisma/client';

@Injectable()
export class SmartDevicesService {
  constructor(private prisma: PrismaService) {}

  async create(createSmartDeviceDto: CreateSmartDeviceDto): Promise<SmartDevice> {
    return await this.prisma.smartDevice.create({
      data: createSmartDeviceDto,
    });
  }

  async findAll(): Promise<SmartDevice[]> {
    return await this.prisma.smartDevice.findMany();
  }

  async findOne(id: string): Promise<SmartDevice> {
    return await this.prisma.smartDevice.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateSmartDeviceDto: UpdateSmartDeviceDto): Promise<SmartDevice> {
    return await this.prisma.smartDevice.update({
      where: { id },
      data: updateSmartDeviceDto,
    });
  }

  async remove(id: string): Promise<SmartDevice> {
    return await this.prisma.smartDevice.delete({
      where: { id },
    });
  }
}
