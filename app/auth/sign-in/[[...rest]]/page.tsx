"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

const SignInPage = () => {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url") || "/";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn
        routing="path"
        path="/auth/sign-in"
        afterSignInUrl={redirectUrl}
      />
    </div>
  );
};

export default SignInPage;
