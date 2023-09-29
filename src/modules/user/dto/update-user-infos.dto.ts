import { IsOptional } from "class-validator";

export class UpdateUserInfosDto {
  @IsOptional()
  name: string;

  @IsOptional()
  email: string;

  @IsOptional()
  password: string;
}
