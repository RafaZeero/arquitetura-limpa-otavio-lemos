type IsEmailValid = (email: string) => boolean
export const isEmailValid: IsEmailValid = email => {
  return Boolean(email)
}
