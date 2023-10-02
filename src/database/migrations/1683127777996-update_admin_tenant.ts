import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAdminTenant1683127777996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` 

        UPDATE acesso.group set tenant_id = '372b7820-a1cb-4e31-930b-dcb0bcaf7503' WHERE id = '0bbca75e-3dd6-4d36-932f-03dfed7bfd42';

        
                                                       `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
                `);
  }
}
