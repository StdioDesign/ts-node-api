import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an accout on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Darlan',
        email: 'darla.nascimento@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
