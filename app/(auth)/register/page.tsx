import { RegisterForm } from "@/components/features/auth";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </main>
  );
}