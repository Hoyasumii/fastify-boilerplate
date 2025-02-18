export class UnauthorizedError extends Error {
  constructor(cause?: string) {
    super("Unauthorized Error", { cause });
    this.name = "Unauthorized Error";
  }
}
