"use server";

import { redirect } from "next/navigation";

import {
  createSession,
  setSessionCookie,
} from "@/lib/auth";

import { loginUser } from "@/lib/services";
import { loginSchema } from "@/lib/validations";

type LoginState = {
  success: boolean;
  message: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const validated = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return {
      success: false,
      message:
        validated.error.issues[0]?.message ??
        "Invalid input.",
    };
  }

  const result = await loginUser(
    validated.data.email,
    validated.data.password
  );

  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  }

  const token = await createSession({
    userId: result.user.id,
    email: result.user.email,
    role: result.user.role,
  });

  await setSessionCookie(token);

  redirect("/dashboard");
}