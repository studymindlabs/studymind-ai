"use client";

import {
  loginAction,
  registerAction,
} from "@/app/actions/auth.actions";

import type {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "@/lib/auth";

export function useAuth() {
  async function login(
    credentials: LoginCredentials
  ): Promise<AuthResponse> {
    return loginAction(credentials);
  }

  async function register(
    credentials: RegisterCredentials
  ): Promise<AuthResponse> {
    return registerAction(credentials);
  }

  return {
    login,
    register,
  };
}