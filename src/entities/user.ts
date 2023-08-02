import * as E from 'fp-ts/Either';
import { createEmail } from './email';
import { InvalidUserError } from './errors/invalid-email-error';
import { UserData } from './user-data';
import { pipe } from 'fp-ts/lib/function';
import { createName } from './name';

type User = UserData;

type CreateUser = (user: User) => E.Either<InvalidUserError, User>;
export const createUser: CreateUser = user =>
  pipe(
    createEmail(user.email),
    E.bindTo('email'),
    E.bind('name', () => createName(user.name))
  );
