import
{
  loginPath,
  surveyPath,
  signUpPath,
  surveyResultPath
} from './paths/'

export default {
  '/login': loginPath,
  '/signUp': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}
