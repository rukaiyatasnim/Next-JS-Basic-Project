"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch product data.");
                return res.json();
            })
            .then((json) => {
                // Compare IDs as strings
                const found = json.find((p) => p.id === params.id);
                if (!found) throw new Error("Product not found.");
                setProduct(found);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [params.id]);

    if (loading)
        return <p className="p-6 text-center">Loading product details...</p>;

    if (error)
        return (
            <p className="p-6 text-center text-red-600">Error: {error}</p>
        );

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="relative w-full h-72 rounded-lg overflow-hidden mb-6">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p className="text-gray-600 mt-1">{product.brand}</p>
                <p className="mt-2 text-xl font-semibold">{product.price}</p>
                <p className="mt-4 text-gray-700">{product.description}</p>
                <Link
                    href="/products"
                    className="inline-block mt-6 text-blue-600 hover:underline"
                >
                    ← Back to Products
                </Link>
            </div>
        </div>
    );
}
