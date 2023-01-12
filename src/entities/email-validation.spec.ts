import { isEmail, isLocalPartValid } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(isEmail(email)).toBeFalsy()
  })

  test('should not accept undefined strings', () => {
    const email = undefined
    expect(isEmail(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''
    expect(isEmail(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email = 'user@mail.co'
    expect(isEmail(email)).toBeTruthy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = 'u'.repeat(65).concat('@mail.com')
    expect(isLocalPartValid(email)).toBeFalsy()
  })
})
