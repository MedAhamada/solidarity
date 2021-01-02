import * as bcrypt from 'bcrypt';

export async function hash(plainPassword: string, saltRounds= 10 ): Promise<any>{
  return bcrypt.hash(plainPassword, saltRounds);
}

export async function compare(plainPassword: string, _hash: string): Promise<any>{
  return bcrypt.compare(plainPassword, _hash);
}
