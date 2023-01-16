type IsEmailValid = (email: string) => boolean
export const isEmailValid: IsEmailValid = email => {
  return (
    Boolean(email) &&
    isEmailWithInvalidChars(email) &&
    isLocalPartValid(email) &&
    isDomainValid(email) &&
    isEmailWithinMaxSize(email)
  )
}

const emailRegex =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

type IsEmailWithinMaxSize = (email: string) => boolean
const isEmailWithinMaxSize: IsEmailWithinMaxSize = email => !(email.length > 320)

// local part is the segment of email before the '@' symbol
type IsLocalPartValid = (email: string) => boolean
const isLocalPartValid: IsLocalPartValid = email => isLocalPartWithinMinSize(email) && isLocalPartWithinMaxSize(email)

type IsLocalPartWithinMinSize = (email: string) => boolean
const isLocalPartWithinMinSize: IsLocalPartWithinMinSize = email => !(email.split('@')[0].length === 0)

type IsLocalPartWithinMaxSize = (email: string) => boolean
const isLocalPartWithinMaxSize: IsLocalPartWithinMaxSize = email => !(email.split('@')[0].length > 64)

// domain is the segment of email after the '@' symbol
type IsDomainValid = (email: string) => boolean
const isDomainValid: IsDomainValid = email =>
  isDomainWithinMinSize(email) && isDomainWithinMaxSize(email) && isDomainPartWithMaxSize(email)

type IsDomainWithinMaxSize = (email: string) => boolean
const isDomainWithinMaxSize: IsDomainWithinMaxSize = email => !(email.split('@')[1].length > 255)

type IsDomainWithinMinSize = (email: string) => boolean
const isDomainWithinMinSize: IsDomainWithinMinSize = email => !(email.split('@')[1].length === 0)

type IsDomainPartWithMaxSize = (email: string) => boolean
const isDomainPartWithMaxSize: IsDomainPartWithMaxSize = email => !(email.split('@')[1].split('.')[0].length > 63)

type IsEmailWithInvalidChars = (email: string) => boolean
const isEmailWithInvalidChars: IsEmailWithInvalidChars = email => emailRegex.test(email)
