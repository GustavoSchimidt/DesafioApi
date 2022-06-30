import { MissingParamsError } from '../errors/missingParamsError'
import { badRequest } from '../helpers/http-helper'
import { httpRequest, httpResponse } from '../protocols/http'

export class SingUpController {
  handle (httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) return badRequest(new MissingParamsError('name'))
    if (!httpRequest.body.email) return badRequest(new MissingParamsError('email'))
  }
}
