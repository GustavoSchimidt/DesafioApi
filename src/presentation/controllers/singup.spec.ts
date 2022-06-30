import { MissingParamsError } from '../errors/missingParamsError'
import { SingUpController } from './singup'

describe('SingUp Controller ', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        email: 'nome.bonito@email.com',
        password: 'nomeBonito123',
        passwordConfirmation: 'nomeBonito123'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SingUpController()
    const httpRequest = {
      body: {
        name: 'Nome Bonito',
        password: 'nomeBonito123',
        passwordConfirmation: 'nomeBonito123'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('email'))
  })
})
