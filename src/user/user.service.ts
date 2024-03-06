import { Injectable } from '@nestjs/common';

import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

 async create(createUserDto: Prisma.UserCreateInput) : Promise<User> {
    return await this.prisma.user.create({

      data: await createUserDto
    });
  }

  update(id: number, updateteUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      data: updateteUserDto,
      where: {
        id: id
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id
      }
    });
  }


  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id
      }
    });
  }
}
