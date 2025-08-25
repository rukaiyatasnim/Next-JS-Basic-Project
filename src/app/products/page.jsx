"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetch("/services.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch products.");
                return res.json();
            })
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const goToDetails = (id) => {
        router.push(`/products/${id}`);
    };

    if (loading) return <div className="p-6 text-center">Loading products...</div>;
    if (error) return <div className="p-6 text-center text-red-600">Error: {error}</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900">Our Products</h1>
                <p className="mt-2 text-gray-600">Explore our latest collection of tech gadgets.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map((item) => (
                    <div key={item.id} className="bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-5">
                        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-4">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-900">{item.name}</h3>
                        <p className="text-purple-800 mt-1 font-semibold">{item.brand}</p>
                        <p className="mt-2 text-xl font-bold text-gray-900">{item.price}</p>
                        <p className="mt-3 text-gray-700">{item.description}</p>

                        {/* Details Button */}
                        <button
                            onClick={() => goToDetails(item.id)}
                            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
