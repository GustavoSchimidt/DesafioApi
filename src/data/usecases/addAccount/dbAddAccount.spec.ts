import { DbAddAccount } from './dbAddAccount'

const makeSut = (encrypterStub: any): DbAddAccount => {
  return new DbAddAccount(encrypterStub)
}

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return await new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = makeSut(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'Valid Name',
      email: 'valid_email@mail.com',
      password: 'validPassword'
    }

    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('validPassword')
  })
})
