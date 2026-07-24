"use server";

import { login, register } from "@/lib/auth";

import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "@/lib/auth";

export async function loginAction(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  return login(credentials);
}

export async function registerAction(
  credentials: RegisterCredentials
): Promise<AuthResponse> {
  return register(credentials);
}