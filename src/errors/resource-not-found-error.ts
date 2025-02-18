export class ResourceNotFoundError extends Error {
  constructor(target?: string) {
    super(`${target || "Resource"} Not Found Error`);
    this.name = "Resource Not Found Error";
  }
}
