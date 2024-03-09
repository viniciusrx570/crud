import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UserEntity implements User {
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @Exclude()
  id: number;
  
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  password: string;
}
