type IsEmail = (email: string) => boolean
export const isEmail: IsEmail = email => {
  return Boolean(email)
}

// local part is the segment of email before the '@' symbol
type IsLocalPartValid = (email: string) => boolean
export const isLocalPartValid: IsLocalPartValid = email => !(email.split('@')[0].length > 64)
