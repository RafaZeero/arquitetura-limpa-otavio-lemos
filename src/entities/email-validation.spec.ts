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
})
