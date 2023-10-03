import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: "Nome completo do usuário" })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Email do usuário" })
  @IsNotEmpty({
    message: "Email não pode ser vazio",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Senha do usuário" })
  @IsNotEmpty()
  // @Matches(RegExHelper.password, { message: MessagesHelper.PASSWORD_VALID })   // Validação para colocar caracteres no Email
  password: string;

  @ApiProperty({ description: "Cpf do usuário" })
  @IsNotEmpty({
    message: "CPF não pode estar vazio",
  })
  cpf: string;

  @ApiProperty({ description: "Número de celular do usuário" })
  @IsNotEmpty({ message: "O número de celular do usuário deve ser preenchido" })
  @ApiProperty({ description: "Grupo do usuário" })
  @IsArray()
  @IsString({
    each: true,
    message: "Uuid de Grupos precisam ser uma string",
  })
  @IsOptional()
  groups: string[];
}
