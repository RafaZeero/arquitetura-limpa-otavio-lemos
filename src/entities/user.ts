import * as E from 'fp-ts/Either';
import { createEmail } from './email';
import { InvalidEmailError } from './errors/invalid-email-error';
import { UserData } from './user-data';
import { pipe } from 'fp-ts/lib/function';

type User = UserData;

type CreateUser = (user: User) => E.Either<InvalidEmailError, User>;
export const createUser: CreateUser = user => {
  return pipe(
    createEmail(user.email),
    E.map((email): User => ({ email, name: user.name }))
  );
};
