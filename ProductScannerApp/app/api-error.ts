export class ApiError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ApiError'
    this.message = message
  }
}