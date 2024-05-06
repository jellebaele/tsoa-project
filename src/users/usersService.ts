// src/users/usersService.ts
import { UUID, User } from './user';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers' | 'test'>;

export class UsersService {
  public get(id: UUID, name?: string): User {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
      test: 'test',
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000).toString(), // Random
      status: 'Happy',
      ...userCreationParams,
    };
  }
}
