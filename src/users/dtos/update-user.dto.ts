import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  emial: string;

  @IsString()
  @IsOptional()
  password: string;
}
