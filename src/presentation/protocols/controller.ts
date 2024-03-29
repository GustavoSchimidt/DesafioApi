import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle (httpRequest: HttpResponse): Promise<HttpRequest>
}
