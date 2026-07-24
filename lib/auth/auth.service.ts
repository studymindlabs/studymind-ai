import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "./auth.types";

/**
 * Login user
 * Database integration will be added later.
 */
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  console.log("Login request:", credentials);

  return {
    success: true,
    message: "Login service is ready.",
  };
}

/**
 * Register user
 * Database integration will be added later.
 */
export async function register(
  credentials: RegisterCredentials
): Promise<AuthResponse> {
  console.log("Register request:", credentials);

  return {
    success: true,
    message: "Register service is ready.",
  };
}