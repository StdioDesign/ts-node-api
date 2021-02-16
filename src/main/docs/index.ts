import { loginPath, surveyPath } from './paths'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components/'
import { accountSchema, errorSchema, loginParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema, apiKeyAuthSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Node API',
    description: 'API node utilizando conceitos de TDD, SOLID e Clean Architeture',
    version: '1.0.0'
  },
  licence: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
