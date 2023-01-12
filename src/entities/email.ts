type IsEmailValid = (email: string) => boolean
export const isEmailValid: IsEmailValid = email => {
  return Boolean(email) && isLocalPartValid(email) && isEmailWithinMaxSize(email)
}

// local part is the segment of email before the '@' symbol
type IsLocalPartValid = (email: string) => boolean
export const isLocalPartValid: IsLocalPartValid = email => !(email.split('@')[0].length > 64)

type IsEmailWithinMaxSize = (email: string) => boolean
export const isEmailWithinMaxSize: IsEmailWithinMaxSize = email => !(email.length > 320)
