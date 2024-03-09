import { User } from "@prisma/client";

export class Auth implements User{
    id: number;
    email: string;
    name: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
}
