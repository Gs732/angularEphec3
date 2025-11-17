export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  address: string;
  role: 'admin' | 'user';
}