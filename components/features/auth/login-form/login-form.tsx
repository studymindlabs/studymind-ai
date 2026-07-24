"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { loginSchema, type LoginFormData } from "@/lib/validation/login.schema";
import { cn } from "@/lib/utils";

import type { LoginFormProps } from "./login-form.types";

export function LoginForm({
  className,
  onSubmit,
}: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submit(data: LoginFormData) {
    await onSubmit?.(data.email, data.password);
  }

  return (
    <Card
      className={cn(
        "mx-auto w-full max-w-md p-8",
        className
      )}
    >
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Sign in to continue your learning journey.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-5"
      >
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-between text-sm">
        <button
          type="button"
          className="text-zinc-400 hover:text-white transition"
        >
          Forgot Password?
        </button>

        <button
          type="button"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Create Account
        </button>
      </div>
    </Card>
  );
}