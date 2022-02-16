import { useCallback, useEffect, useState } from 'react'
import Joi from 'joi'
import { IValidationErrorModel } from '../models/IValidationErrorModel'

export const useValidateForm = <T>(
  form: T,
  schema: Joi.ObjectSchema<T>,
  validatedKey?: string,
): {
  errors: IValidationErrorModel[] | null
  validateAll: () => boolean
  eraseErrors: () => void
} => {
  const [formErrors, setFormErrors] = useState<IValidationErrorModel[]>()

  const getFieldError = useCallback(
    (field: string, validatedData: unknown) => {
      const { error } = schema.validate(validatedData, { abortEarly: false })
      const errorDetail = error?.details?.filter((e) => {
        return e.path[0] === field && e.type !== 'object.unknown'
      })
      return errorDetail && errorDetail.length !== 0 ? errorDetail[0]?.message : null
    },
    [schema],
  )

  useEffect(() => {
    if (!validatedKey) return
    const fieldError = getFieldError(validatedKey, form)

    setFormErrors((errors) => {
      if (errors) {
        const currentErrorIndex = errors?.findIndex((f) => f.field === validatedKey)

        if (currentErrorIndex >= 0) errors.splice(currentErrorIndex, 1)

        if (fieldError) errors.push({ field: validatedKey, message: fieldError })
        return [...errors]
      }

      if (fieldError) return [{ field: validatedKey, message: fieldError }]

      return errors
    })
  }, [form, getFieldError, schema, validatedKey])

  const validateAll = (): boolean => {
    const { error } = schema.validate(form, { abortEarly: false })

    setFormErrors(
      error?.details.map((m) => {
        return {
          field: m.path[0].toString(),
          message: m.message,
        }
      }),
    )

    if (!error?.details.length) return true
    return false
  }

  const eraseErrors = () => {
    setFormErrors(undefined)
  }
  return { errors: formErrors ?? null, validateAll, eraseErrors }
}
