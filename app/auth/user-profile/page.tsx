import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserProfile path="/auth/user-profile" routing="path" />
    </div>
  );
}
