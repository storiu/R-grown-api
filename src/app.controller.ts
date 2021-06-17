import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { SubscribeDto } from "./dtos/subscribe.dto";
import { SuccessResponseDto } from "./dtos/success-response.dto";

@Controller('Subscription')
export class AppController {
  constructor() {}

  @Post('subscribe')
  async subscribe(@Body() body: SubscribeDto): Promise<SuccessResponseDto> {
    return new SuccessResponseDto();
  }

}
