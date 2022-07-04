import { EmailValidator } from '../presentation/protocols'
import isEmail from 'validator/lib/isEmail'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return isEmail(email)
  }
}
