export const normalizeErrorMessage = (e: unknown = ''): string => {
  if (e instanceof Error) {
    return e.message
  }

  return typeof e === 'string' ? e : JSON.stringify(e, null, 4)
}
