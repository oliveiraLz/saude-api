import { forwardRef, Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { RoleService } from "./roles.service";
import { DatabaseModule } from "../../database/database.module";
import { RolesProviders } from "./roles.providers";
import { AuthModule } from "../auth/auth.module";
import { UsersService } from "../user/user.service";
import { GroupService } from "../group/group.service";

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule],
  controllers: [RolesController],
  providers: [...RolesProviders, RoleService, UsersService, GroupService],
  exports: [RoleService],
})
export class RolesModule {}
