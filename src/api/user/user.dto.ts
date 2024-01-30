import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, Validate } from "class-validator";
import { UniqueFields } from "./unique-fields.guard";
import { UserRole } from "./user.enum";

export class CreateUserDto {

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueFields, ['email'])
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole.Customer;

}

export class CreateUserAdminDto {

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueFields, ['email'])
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  @IsNotEmpty()
  role: UserRole.Admin;

}