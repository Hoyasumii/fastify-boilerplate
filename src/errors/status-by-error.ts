import { HTTP } from "@/enums";

export default {
  "Bad Request Error": HTTP.BAD_REQUEST,
  "Resource Not Found Eror": HTTP.NOT_FOUND,
  "Unauthorized Error": HTTP.UNAUTHORIZED,
  "Internal Server Error": HTTP.INTERNAL_SERVER_ERROR,
} as Record<string, HTTP>;
