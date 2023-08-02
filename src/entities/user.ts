import * as E from 'fp-ts/Either';
import { createEmail } from './email';
import { InvalidUserError } from './errors/invalid-email-error';
import { UserData } from './user-data';
import { pipe } from 'fp-ts/lib/function';

type User = UserData;

type CreateUser = (user: User) => E.Either<InvalidUserError, User>;
export const createUser: CreateUser = user => {
  return pipe(
    createEmail(user.email),
    E.map((email): User => ({ email, name: user.name }))
  );
};
