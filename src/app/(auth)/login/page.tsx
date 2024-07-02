import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
