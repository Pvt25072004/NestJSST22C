import { Test, TestingModule } from '@nestjs/testing';
import { AuthenController } from './authen.controller';

describe('AuthenController', () => {
  let controller: AuthenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenController],
    }).compile();

    controller = module.get<AuthenController>(AuthenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
