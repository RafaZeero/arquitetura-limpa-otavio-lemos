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
    return this._repository.find(user => user.email === email) || null
  }

  public async findAllUsers(): Promise<UserData[]> {
    return this._repository.slice()
  }

  public async exists(user: UserData): Promise<boolean> {
    return (await this.findUserByEmail(user.email)) !== null
  }
}
