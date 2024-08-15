import { DASHBOARD_TITLE_ERROR_MESSAGE, isNotEmptyValidation } from "@/shared/@common/utils/validation"
import { DefaultValues } from "../types"

export const validate = (values: DefaultValues) => {
  const error: Partial<DefaultValues> = {}

  error.title = isNotEmptyValidation(values.title) ? "" : DASHBOARD_TITLE_ERROR_MESSAGE.EMPTY

  return error
}
