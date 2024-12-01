import crypto from 'crypto';

export const hashPassword = (password: string, salt: string): string => {
  return crypto.createHash('sha256').update(password + salt).digest('hex');
};

export const comparePassword = (password: string, salt: string, hash: string): boolean => {
  return hashPassword(password, salt) === hash;
};

const password = 'senhaSegura123';
const salt = crypto.randomBytes(16).toString('hex'); 
const hashedPassword = hashPassword(password, salt);

console.log('Salt:', salt);
console.log('Senha Hasheada:', hashedPassword);

const isMatch = comparePassword(password, salt, hashedPassword);
console.log('Senha correta:', isMatch);
