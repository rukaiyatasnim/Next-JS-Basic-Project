"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [form, setForm] = useState({ username: "", password: "" });
    const router = useRouter();

    async function handleLogin(e) {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            username: form.username,
            password: form.password,
        });

        if (!res.error) {
            router.push("/products");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
