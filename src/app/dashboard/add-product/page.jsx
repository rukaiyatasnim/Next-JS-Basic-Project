"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        description: "",
        image: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status]);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", brand: "", price: "", description: "", image: "" });
        }, 1000);
    };

    if (status === "loading") return <p className="p-6 text-center">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Add New Product</h1>

            {success && <p className="mb-4 text-green-600 font-semibold">Product added successfully!</p>}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full p-3 border rounded" required />
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" className="w-full p-3 border rounded" required />
                <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-3 border rounded" required />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-3 border rounded" required />
                <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-3 border rounded" required />
                <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition">
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
}
