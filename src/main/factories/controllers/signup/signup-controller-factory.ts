import { SignUpController } from '../../../../presentation/controllers/login/signup/signup-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeBdAuthentication } from '../../usecases/authentication/db-authentication-factory'
import { makeBdAddAccount } from '../../usecases/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '../../decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeBdAddAccount(), makeSignUpValidation(), makeBdAuthentication())
  return makeLogControllerDecorator(controller)
}