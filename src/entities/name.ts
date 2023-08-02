import * as E from 'fp-ts/Either';
import { invalidUserError, InvalidUserError } from './errors/invalid-email-error';
import { flow } from 'fp-ts/lib/function';
import { Name } from './name-data';

/* Name exists and it's length is bigger than 2 */
const isNameValid = (name: string) => name && name.trim().length > 2 && name.trim().length < 256;

/* Email Creation */
type CreateName = (name: string) => E.Either<InvalidUserError, Name>;
export const createName: CreateName = flow(E.fromPredicate(isNameValid, invalidUserError.name));
