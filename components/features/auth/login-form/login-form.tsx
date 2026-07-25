"use client";

import { useActionState } from "react";

import { loginAction } from "@/app/actions/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState = {
  success: false,
  message: "",
};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <div className="w-full rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-2 text-3xl font-bold">
        Welcome Back
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        Sign in to your StudyMind AI account
      </p>

      <form action={formAction} className="space-y-4">

        <div>
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </div>

        {state.message && (
          <p
            className={
              state.success
                ? "text-sm text-green-600"
                : "text-sm text-red-600"
            }
          >
            {state.message}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={pending}
        >
          {pending ? "Signing In..." : "Sign In"}
        </Button>

      </form>
    </div>
  );
}