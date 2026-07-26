"use server";

import { cookies } from "next/headers";

import { verifyToken } from "./jwt";

const SESSION_COOKIE = "studymind_session";

export async function getSession() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return await verifyToken(token);
}