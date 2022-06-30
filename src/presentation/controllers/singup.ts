import { MissingParamsError } from '../errors/missingParamsError'
import { badRequest } from '../helpers/http-helper'
import { httpRequest, httpResponse } from '../protocols/http'

export class SingUpController {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) return badRequest(new MissingParamsError(field))
    }
  }
}
