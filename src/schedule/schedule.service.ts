import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
    // to update data server
    private readonly logger = new Logger(ScheduleService.name);

    // @Cron('5 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 45');
    }
}
