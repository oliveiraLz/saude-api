import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UserController } from "./user.controller";
import { DatabaseModule } from "src/database/database.module";
import { UserProviders } from "./user.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UsersService],
  exports: [UsersService],
})
export class UserModule {}
