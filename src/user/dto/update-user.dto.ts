import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserCreateDto } from './create-user.dto';
import { IsNotEmpty, IsEmail, IsOptional, IsString } from 'class-validator';

export class UserUpdateDto extends PartialType(UserCreateDto) {

  updatedAt: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  password: string;
}
