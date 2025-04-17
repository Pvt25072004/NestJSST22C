import { Test, TestingModule } from '@nestjs/testing';
import { ChatAppGateway } from './chat-app.gateway';

describe('ChatAppGateway', () => {
  let gateway: ChatAppGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatAppGateway],
    }).compile();

    gateway = module.get<ChatAppGateway>(ChatAppGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
