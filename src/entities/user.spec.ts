import { createUser } from './user';
import * as E from 'fp-ts/lib/Either';
import { invalidUserError } from './errors/invalid-email-error';
import { pipe } from 'fp-ts/lib/function';

describe('User domain entity', () => {
  test('should not create a user with invalid email', async () => {
    const invalidEmail = 'invalidemail';
    const user = { name: 'valid name', email: invalidEmail };
    const error = createUser(user);
    return pipe(
      error,
      E.mapLeft(error => expect(error).toEqual(invalidUserError.email()))
    );
  });

  test('should not create user with invalid name (too few characters)', async () => {
    const invalidName = 'R      ';
    const user = { name: invalidName, email: 'valid@mail.com' };
    const error = createUser(user);
    return pipe(
      error,
      E.mapLeft(error => expect(error).toEqual(invalidUserError.name()))
    );
  });

  test('should not create user with invalid name (too many characters)', async () => {
    const invalidName = 'R'.repeat(256);
    const user = { name: invalidName, email: 'valid@mail.com' };
    const error = createUser(user);
    return pipe(
      error,
      E.mapLeft(error => expect(error).toEqual(invalidUserError.name()))
    );
  });

  test('should create user with valid data', async () => {
    const validName = 'rafa';
    const validEmail = 'rafa@zeero.com';
    const userTest = { name: validName, email: validEmail };
    const success = createUser(userTest);
    return pipe(
      success,
      E.map(user => expect(user).toEqual(userTest))
    );
  });
});
