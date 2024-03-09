import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
	const user = await this.userService.findOne({where: {
    	email: userEmail
    }})
    const passwordTrue = await bcrypt.compare(userPassword, user.password) 
    if (user && passwordTrue) {
    	const { id, name, email} = user
        return { id, name, email}
    }

	return null
}
}
