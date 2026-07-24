export interface LoginFormProps {
  className?: string;

  onSubmit?: (
    email: string,
    password: string
  ) => void | Promise<void>;
}