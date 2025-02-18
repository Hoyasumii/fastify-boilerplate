export class BadRequestError extends Error {
  constructor(cause?: string) {
    super("Bad Request Error", { cause });
    this.name = "Bad Request Error";
  }
}
