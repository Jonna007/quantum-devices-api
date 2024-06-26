import { ApiProperty } from '@nestjs/swagger';

export class CreateSmartDeviceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ isArray: true, example: ['WiFi', 'Camera', 'Voice Assistant'] })
  features: string[];
}
