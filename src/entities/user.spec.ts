import { createUser } from './user'
import * as E from 'fp-ts/lib/Either'
import { invalidEmailError } from './errors/invalid-email-error'
import { pipe } from 'fp-ts/lib/function'

describe('User domain entity', () => {
  test('should not create a user with invalid email', () => {
    const invalidEmail = 'invalidemail@mail.com'
    const user = {
      name: 'valid name',
      email: invalidEmail
    }
    const error = createUser(user)
    expect(error).toEqual(E.left(invalidEmailError()))
  })

  test('should not create user with invalid name (too few characters', async () => {
    const invalid = 'Invalid email'
    const invalidName = 'R      '
    const error = createUser({ name: invalidName, email: 'valid@mail.com' })
    return pipe(
      error,
      E.mapLeft(error => expect(error).toEqual(new Error(invalid)))
    )
  })
})
