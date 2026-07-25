import bcrypt from "bcrypt";

import { hashPassword } from "@/lib/auth";
import {
  createUser,
  findUserByEmail,
} from "@/lib/repositories";

type RegisterUserInput = {
  fullName: string;
  email: string;
  password: string;
};

export async function registerUser({
  fullName,
  email,
  password,
}: RegisterUserInput) {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await hashPassword(password);

  const user = await createUser({
    fullName,
    email,
    password: hashedPassword,
  });

  return user;
}

export type LoginResult =
  | {
      success: true;
      user: {
        id: string;
        fullName: string;
        email: string;
        role: "STUDENT" | "ADMIN";
      };
    }
  | {
      success: false;
      message: string;
    };

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResult> {
  const user = await findUserByEmail(email);

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const passwordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatched) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  return {
    success: true,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
}