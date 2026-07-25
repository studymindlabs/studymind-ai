"use client";

import { useActionState } from "react";

import { registerAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState = {
  success: false,
  message: "",
};

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );

  return (
    <div className="w-full max-w-md rounded-xl border bg-white p-6 shadow-sm">
      <h1 className="mb-2 text-3xl font-bold">
        Create Account
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        Join StudyMind AI
      </p>

      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="fullName">
            Full Name
          </Label>

          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label htmlFor="password">
            Password
          </Label>

          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword">
            Confirm Password
          </Label>

          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />
        </div>

        {state.message && (
          <p
            className={
              state.success
                ? "text-green-600 text-sm"
                : "text-red-600 text-sm"
            }
          >
            {state.message}
          </p>
        )}

        <Button
          type="submit"
          disabled={pending}
          className="w-full"
        >
          {pending
            ? "Creating..."
            : "Create Account"}
        </Button>
      </form>
    </div>
  );
}