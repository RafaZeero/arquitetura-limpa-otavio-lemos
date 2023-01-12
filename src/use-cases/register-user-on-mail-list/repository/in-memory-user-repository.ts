import { UserRepository } from '../../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private _repository: UserData[]

  constructor(repository: UserData[]) {
    this._repository = repository
  }

  public async add(user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this._repository.push(user)
    }
  }

  public async findUserByEmail(email: string): Promise<UserData> {
    const userExists = this._repository.filter(user => user.email === email)
    return userExists[0] ? userExists[0] : null
  }

  public async findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }

  public async exists(user: UserData): Promise<boolean> {
    return (await this.findUserByEmail(user.email)) !== null
  }
}
