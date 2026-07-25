"use server";

import { registerSchema } from "@/lib/validations";
import { registerUser } from "@/lib/services";

type RegisterState = {
  success: boolean;
  message: string;
};

export async function registerAction(
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  try {
    const validated = registerSchema.safeParse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!validated.success) {
      return {
        success: false,
        message: validated.error.issues[0]?.message ?? "Invalid input.",
      };
    }

    const { fullName, email, password } = validated.data;

    await registerUser({
      fullName,
      email,
      password,
    });

    return {
      success: true,
      message: "Registration successful.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong.",
    };
  }
}