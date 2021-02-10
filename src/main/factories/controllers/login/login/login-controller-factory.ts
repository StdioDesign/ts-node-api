import { makeLoginValidation } from './login-validation-factory'
import { Controller } from '../../../../../presentation/protocols'
import { LoginController } from '../../../../../presentation/controllers/login/Login/login-controller'
import { makeBdAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeBdAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
