import { prisma } from "@/lib/db";
import type { User } from "@prisma/client";

export async function findUserByEmail(
  email: string
): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function findUserById(
  id: string
): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

type CreateUserData = {
  fullName: string;
  email: string;
  password: string;
};

export async function createUser(data: CreateUserData): Promise<User> {
  return prisma.user.create({
    data,
  });
}