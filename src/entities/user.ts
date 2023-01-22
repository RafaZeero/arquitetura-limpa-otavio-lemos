import * as E from 'fp-ts/Either'
import { createEmail } from './email'
import { invalidEmailError, InvalidEmailError } from './errors/invalid-email-error'
import { UserData } from './user-data'

type User = UserData

type CreateUser = (user: User) => E.Either<InvalidEmailError, User>
export const createUser: CreateUser = user => {
  const emailOrError = createEmail(user.email)

  if (E.isLeft(emailOrError)) {
    return E.left(invalidEmailError())
  }
}
