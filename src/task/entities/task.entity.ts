import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TaskEntity implements Task {

  createdAt: Date;

  updatedAt: Date;
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  published: boolean;
  @ApiProperty()
  authorId: number;
}

[
  {
    email: 'user1@example.com',
    name: 'User 1',
    password: 'password1',
  },
  {
    email: 'user2@example.com',
    name: 'User 2',
    password: 'password2',
  },
  {
    email: 'user3@example.com',
    name: 'User 3',
    password: 'password3',
  },
  {
    email: 'user4@example.com',
    name: 'User 4',
    password: 'password4',
  },
  {
    email: 'user5@example.com',
    name: 'User 5',
    password: 'password5',
  },
  {
    email: 'user6@example.com',
    name: 'User 6',
    password: 'password6',
  },
  {
    email: 'user7@example.com',
    name: 'User 7',
    password: 'password7',
  },
  {
    email: 'user8@example.com',
    name: 'User 8',
    password: 'password8',
  },
  {
    email: 'user9@example.com',
    name: 'User 9',
    password: 'password9',
  },
  {
    email: 'user10@example.com',
    name: 'User 10',
    password: 'password10',
  },
  {
    email: 'user11@example.com',
    name: 'User 11',
    password: 'password11',
  },
  {
    email: 'user12@example.com',
    name: 'User 12',
    password: 'password12',
  },
  {
    email: 'user13@example.com',
    name: 'User 13',
    password: 'password13',
  },
  {
    email: 'user14@example.com',
    name: 'User 14',
    password: 'password14',
  },
];
