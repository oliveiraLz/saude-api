import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableUser1680870752631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              CREATE SCHEMA IF NOT EXISTS acesso;
    
              CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
              
              CREATE TABLE acesso.user (
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                name varchar NOT NULL,
                email  varchar NOT NULL,
                password  varchar NOT NULL,
                cpf varchar UNIQUE NOT NULL,
                numero_cel varchar NOT NULL,
                dt_nasc date NOT NULL,
                genero varchar NOT NULL,
                create_at timestamp NOT NULL DEFAULT now(),
                update_at timestamp NOT NULL DEFAULT now(),
                deleted_at timestamp NULL,
                primary key (id)
              );
    
              CREATE UNIQUE INDEX user_email_idx ON acesso.user USING btree (email);
              CREATE UNIQUE INDEX user_cpf_idx ON acesso.user USING btree (cpf);
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
              DROP TABLE IF EXISTS acesso.user;
            `);
  }
}
