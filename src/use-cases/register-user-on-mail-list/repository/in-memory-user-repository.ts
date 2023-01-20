import * as User from '../../ports/user-repository'
import { UserData } from '../user-data'

export const _repository: UserData[] = []

export const add: User.Add = async user => {
  const userExists = await exists(user)
  if (!userExists) {
    _repository.push(user)
  }
}

export const findUserByEmail: User.FindUserByEmail = async email => {
  return _repository.find(user => user.email === email) || null
}

export const findAllUsers: User.FindAllUsers = async () => {
  return _repository.slice()
}

export const exists: User.Exists = async user => {
  return (await findUserByEmail(user.email)) !== null
}
