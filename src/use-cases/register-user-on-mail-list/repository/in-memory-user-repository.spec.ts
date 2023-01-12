import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In Memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepository = new InMemoryUserRepository(users)
    const user = await userRepository.findUserByEmail('user@mail.co')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'user_name'
    const email = 'user@mail.co'
    const userRepository = new InMemoryUserRepository(users)
    await userRepository.add({ name, email })
    const user = await userRepository.findUserByEmail('user@mail.co')
    expect(user.name).toBe('user_name')
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      { name: 'user_name1', email: 'user1@mail.co' },
      { name: 'user_name2', email: 'user2@mail.co' }
    ]
    const userRepository = new InMemoryUserRepository(users)
    const usersInRepository = userRepository.findAllUsers()
    expect((await usersInRepository).length).toBe(users.length)
  })
})