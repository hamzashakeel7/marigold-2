import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn routing="path" path="/auth/sign-in" />
    </div>
  );
};

export default SignInPage;
