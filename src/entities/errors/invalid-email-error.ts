export type InvalidUserError = Error;

export const invalidUserError = {
  email: () => new Error('Invalid email'),
  name: () => new Error('Invalid name')
};
