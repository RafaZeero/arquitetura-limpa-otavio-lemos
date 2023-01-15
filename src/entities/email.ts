type IsEmailValid = (email: string) => boolean
export const isEmailValid: IsEmailValid = email => {
  return Boolean(email) && isLocalPartValid(email) && isEmailWithinMaxSize(email) && isDomainWithinMaxSize(email)
}

// local part is the segment of email before the '@' symbol
type IsLocalPartValid = (email: string) => boolean
type IsLocalPartWithinMinSize = (email: string) => boolean
type IsLocalPartWithinMaxSize = (email: string) => boolean
const isLocalPartValid: IsLocalPartValid = email => isLocalPartWithinMinSize(email) && isLocalPartWithinMaxSize(email)
const isLocalPartWithinMinSize: IsLocalPartWithinMinSize = email => email.split('@')[0].length > 0
const isLocalPartWithinMaxSize: IsLocalPartWithinMaxSize = email => !(email.split('@')[0].length > 64)

type IsEmailWithinMaxSize = (email: string) => boolean
const isEmailWithinMaxSize: IsEmailWithinMaxSize = email => !(email.length > 320)

type IsDomainWithinMaxSize = (email: string) => boolean
const isDomainWithinMaxSize: IsDomainWithinMaxSize = email => !(email.split('@')[1].length > 255)
