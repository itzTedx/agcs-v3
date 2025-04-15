export interface SuccessResponse {
  success: true;
}

export interface ErrorResponse {
  success: false;
  message?: string;
  errors?: Record<string, string[]>;
}
