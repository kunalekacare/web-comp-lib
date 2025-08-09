import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Props = {
  title?: string;
  subtitle?: string;
  emailLabel?: string;
  passwordLabel?: string;
  submitLabel?: string;
  isLoading?: boolean;
  errorMessage?: string;
  onSubmit: (email: string, password: string) => void | Promise<void>;
  onForgotPassword?: () => void;
  renderSocial?: React.ReactNode;
  className?: string;
};

export function LoginCard({
  title = "Sign in",
  subtitle,
  emailLabel = "Email",
  passwordLabel = "Password",
  submitLabel = "Continue",
  isLoading,
  errorMessage,
  onSubmit,
  onForgotPassword,
  renderSocial,
  className
}: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit(email, password);
  }

  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {subtitle ? <CardDescription>{subtitle}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
          <div className="grid gap-2">
            <Label htmlFor="email">{emailLabel}</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errorMessage)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{passwordLabel}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={Boolean(errorMessage)}
              required
            />
          </div>
          {errorMessage ? (
            <p className="text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          ) : null}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Signing in..." : submitLabel}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {onForgotPassword ? (
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-primary-500 hover:underline"
          >
            Forgot password?
          </button>
        ) : null}
        {renderSocial}
      </CardFooter>
    </Card>
  );
}
