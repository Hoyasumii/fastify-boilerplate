export class InternalServerError extends Error {
  constructor(name?: string, message?: string) {
    super(name ?? "Internal Server Error", {
      cause: message ?? "Internal Server Error",
    });
    this.name = "Internal Server Error";
  }
}
