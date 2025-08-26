"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // redirect if not logged in
    }
  }, [status, router]);

if (status === "loading") {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="loader">loading</div> 
    </div>
  );
}


  if (!session) return null;

  return children;
}
