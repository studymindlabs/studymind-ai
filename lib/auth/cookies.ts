"use server";

import { cookies } from "next/headers";

const SESSION_COOKIE = "studymind_session";

export async function setSessionCookie(
  token: string
) {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getSessionCookie() {
  const cookieStore = await cookies();

  return cookieStore.get(SESSION_COOKIE)?.value;
}

export async function deleteSessionCookie() {
  const cookieStore = await cookies();

  cookieStore.delete(SESSION_COOKIE);
}