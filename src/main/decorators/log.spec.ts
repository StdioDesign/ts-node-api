import { LogControllerDecoration } from './log'
import { HttpResponse, HttpRequest, Controller } from '../../presentation/protocols'

describe('LogCOntroller Decorator', () => {
  test('Should call controller handle', async () => {
    class ControllerStub implements Controller {
      async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = {
          statusCode: 200,
          body: {
            name: 'Darlan'
          }
        }
        return await new Promise(resolve => resolve(httpResponse))
      }
    }
    const controllerStub = new ControllerStub()
    const handlespy = jest.spyOn(controllerStub, 'handle')
    const sut = new LogControllerDecoration(controllerStub)
    const httpRequest = {
      body: {
        email: 'any_mail@mil.com',
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handlespy).toHaveBeenCalledWith(httpRequest)
  })
})
