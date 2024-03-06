import { ApiProperty } from '@nestjs/swagger';
import {  User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UserEntity implements User {
  @Exclude()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  
  @IsOptional()
  @IsString()
  password: string;
}
