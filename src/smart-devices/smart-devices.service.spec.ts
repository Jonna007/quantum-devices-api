import { Test, TestingModule } from '@nestjs/testing';
import { SmartDevicesService } from './smart-devices.service';

describe('SmartDevicesService', () => {
  let service: SmartDevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartDevicesService],
    }).compile();

    service = module.get<SmartDevicesService>(SmartDevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
