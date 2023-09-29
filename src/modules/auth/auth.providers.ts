import { DataSource } from "typeorm";
import { UsersEntity } from "../user/entities/user.entity";
import { GroupsEntity } from "../group/entities/group.entity";
import { RoleEntity } from "../permissions/entities/roles.entity";

export const AuthProviders = [
  {
    provide: "USERS_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersEntity),
    inject: ["DATA_SOURCE"],
  },
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
];
