export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface HttpOptions {
  queryParams?: Record<string, unknown>;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
}
