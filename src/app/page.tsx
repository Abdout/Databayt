import { LoginButton } from "@/component/auth/login-button";
import MdButton from "@/component/atom/button/md";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl">Databayt</h1>
        <p className="text-2xl">Business Automation</p>
        <div className="pt-6">
          <LoginButton asChild>
            <MdButton placeholder="Get started" />
          </LoginButton>
        </div>
      </div>
    </div>
  )
}