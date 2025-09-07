"use client"
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";
import { useAuth, useClerk, useUser } from "@clerk/nextjs";

export function AppbarClient() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk()

  return (
    <Appbar onSignin={() => {
      router.push("/sign-in")
    }} isSignedIn={!!isSignedIn} onSignout={async () => {
      await signOut()
      router.push("/sign-in")
    }} />
  );
}
