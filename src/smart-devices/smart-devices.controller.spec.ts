import { Test, TestingModule } from '@nestjs/testing';
import { SmartDevicesController } from './smart-devices.controller';
import { SmartDevicesService } from './smart-devices.service';

describe('SmartDevicesController', () => {
  let controller: SmartDevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartDevicesController],
      providers: [SmartDevicesService],
    }).compile();

    controller = module.get<SmartDevicesController>(SmartDevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
