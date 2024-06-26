import { PartialType } from '@nestjs/swagger';
import { CreateSmartDeviceDto } from './create-smart-device.dto';

export class UpdateSmartDeviceDto extends PartialType(CreateSmartDeviceDto) {}
