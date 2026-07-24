import { LoginForm } from "@/components/features/auth";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Register
        </h1>

        <LoginForm />
      </div>
    </main>
  );
}