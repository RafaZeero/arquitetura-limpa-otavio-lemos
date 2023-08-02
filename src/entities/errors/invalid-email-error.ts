export type InvalidEmailError = Error;

export const invalidEmailError = () => new Error('Invalid email');
