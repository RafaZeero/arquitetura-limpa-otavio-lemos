import { createUser } from './user'
import { left } from 'fp-ts/lib/Either'
import { invalidEmailError } from './errors/invalid-email-error'

describe('User domain entity', () => {
  it('should not create a user with invalid email', () => {
    const invalidEmail = 'invalid_email'
    const user = {
      name: 'valid name',
      email: invalidEmail
    }
    const error = createUser(user)
    expect(error).toEqual(left(invalidEmailError()))
  })
})
