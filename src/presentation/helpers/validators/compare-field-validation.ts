import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldToComparedName: string

  constructor (fieldName: string, fieldToComparedName) {
    this.fieldName = fieldName
    this.fieldToComparedName = fieldToComparedName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToComparedName]) {
      return new InvalidParamError(this.fieldToComparedName)
    }
  }
}
