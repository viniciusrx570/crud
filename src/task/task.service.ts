import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async findAll(): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: {
        published: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>  {
    return this.prisma.task.update({
      where: { id: id },
      data: updateTaskDto,
    });
  }
  remove(id: number) {
    return this.prisma.task.delete({
      where: { id: id },
    });
  }


}
