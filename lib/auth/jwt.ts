import { jwtVerify, SignJWT } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined.");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export type JwtPayload = {
  userId: string;
  email: string;
  role: "STUDENT" | "ADMIN";
};

export async function createToken(
  payload: JwtPayload
) {
  return await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(
  token: string
) {
  try {
    const { payload } = await jwtVerify(
      token,
      secret
    );

    return payload as JwtPayload;
  } catch {
    return null;
  }
}