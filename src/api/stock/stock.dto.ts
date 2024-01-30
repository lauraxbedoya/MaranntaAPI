import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Categories, Sizes } from './stock.enum';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @IsEnum(Categories)
  categories: Categories;

  @IsString()
  @IsNotEmpty()
  reference: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  @IsEnum(Sizes)
  size: Sizes;

  @IsString()
  @IsOptional()
  breastsize: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateProductDto {

  @IsString()
  @IsOptional()
  @IsEnum(Sizes)
  size: Sizes;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}