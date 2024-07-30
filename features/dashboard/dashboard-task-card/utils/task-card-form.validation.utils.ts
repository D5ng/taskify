export function isTaskCardFormValidation({ ...state }) {
  const isValid = state.manager && state.title && state.description && state.deadline
  return !!isValid
}
