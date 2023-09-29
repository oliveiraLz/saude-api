import { DataSource } from "typeorm";
import { GroupsEntity } from "./entities/group.entity";
import { RoleEntity } from "../permissions/entities/roles.entity";
import { UsersEntity } from "../user/entities/user.entity";

export const GroupProviders = [
  {
    provide: "GROUPS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GroupsEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "ROLE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RoleEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "USERS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
    inject: ["DATA_SOURCE"],
  },
];
