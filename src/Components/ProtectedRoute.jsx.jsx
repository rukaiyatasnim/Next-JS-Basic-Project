// app/components/ProtectedRoute.jsx
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
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!session) return null; // prevent rendering until check is done

    return children;
}
