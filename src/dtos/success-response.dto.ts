import { ApiProperty } from "@nestjs/swagger";

export class SuccessResponseDto {

  @ApiProperty()
  success: boolean;

  constructor() {
    this.success = true;
  }
}
