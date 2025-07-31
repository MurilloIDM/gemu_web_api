import { compare } from "bcrypt";

export class Account {
  id: number;
  email: string;
  password: string;

  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.password);
  }
}
