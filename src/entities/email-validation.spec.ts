import { isEmailValid } from './email'

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept undefined strings', () => {
    const email = undefined
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email = ''
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should accept valid email', () => {
    const email = 'user@mail.co'
    expect(isEmailValid(email)).toBeTruthy()
  })

  test('should not accept email larger than 320 chars', () => {
    const email = 'u'.repeat(64).concat('@').concat('d'.repeat(127)).concat('.').concat('d'.repeat(128))
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept empty local part', () => {
    const email = '@mail.com'
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = 'u'.repeat(65).concat('@mail.com')
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept domain part than 255 chars', () => {
    const email = 'email@'.concat('d'.repeat(127)).concat('.').concat('d'.repeat(128))
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept empty domain', () => {
    const email = 'email@'
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept empty domain with a part larger than 63 chars', () => {
    const email = 'email@'.concat('d'.repeat(64)).concat('.com')
    expect(isEmailValid(email)).toBeFalsy()
  })

  test('should not accept local part with invalid char', () => {
    const email = 'e mail@mail.com'
    expect(isEmailValid(email)).toBeFalsy()
  })
})
