import { Middleware } from '../../../presentation/protocols'
import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { makeDdLoadAccountByToken } from '../usecases/account/add-account/db-add-account-factory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDdLoadAccountByToken(), role)
}
