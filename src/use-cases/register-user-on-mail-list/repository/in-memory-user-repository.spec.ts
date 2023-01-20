import { UserData } from '../user-data'
import { add, findAllUsers, findUserByEmail, _repository } from './in-memory-user-repository'

describe('In Memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    _repository.push(...users)
    const user = await findUserByEmail('user@mail.co')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'user_name'
    const email = 'user@mail.co'
    _repository.push(...users)
    await add({ name, email })
    const user = await findUserByEmail('user@mail.co')
    expect(user.name).toBe('user_name')
  })

  test('should return all users in the repository', async () => {
    clearRepo()
    const users: UserData[] = [
      { name: 'user_name1', email: 'user1@mail.co' },
      { name: 'user_name2', email: 'user2@mail.co' }
    ]
    _repository.push(...users)
    const usersInRepository = findAllUsers()
    expect((await usersInRepository).length).toBe(users.length)
  })
})

const clearRepo = () => {
  if (_repository.length === 0) return

  _repository.pop()

  clearRepo()
}
