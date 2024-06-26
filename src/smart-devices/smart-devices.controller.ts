import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmartDevicesService } from './smart-devices.service';
import { CreateSmartDeviceDto } from './dto/create-smart-device.dto';
import { UpdateSmartDeviceDto } from './dto/update-smart-device.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SmartDevice } from '@prisma/client';

@ApiTags('smart-devices')
@Controller('smart-devices')
export class SmartDevicesController {
  constructor(private readonly smartDevicesService: SmartDevicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new smart device' })
  @ApiResponse({ status: 201, description: 'The smart device has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createSmartDeviceDto: CreateSmartDeviceDto) {
    return this.smartDevicesService.create(createSmartDeviceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all smart devices' })
  @ApiResponse({ status: 200, description: 'Return all smart devices.' })
  findAll() {
    return this.smartDevicesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a smart device by id' })
  @ApiResponse({ status: 200, description: 'Return the smart device.' })
  @ApiResponse({ status: 404, description: 'Smart device not found.' })
  findOne(@Param('id') id: string) {
    return this.smartDevicesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a smart device by id' })
  @ApiResponse({ status: 200, description: 'The smart device has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Smart device not found.' })
  update(@Param('id') id: string, @Body() updateSmartDeviceDto: UpdateSmartDeviceDto) {
    return this.smartDevicesService.update(id, updateSmartDeviceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a smart device by id' })
  @ApiResponse({ status: 200, description: 'The smart device has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Smart device not found.' })
  remove(@Param('id') id: string) {
    return this.smartDevicesService.remove(id);
  }
}
