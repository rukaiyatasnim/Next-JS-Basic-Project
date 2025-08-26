"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: "1",
        name: "Wireless Headphones",
        brand: "SoundMax",
        price: "$149.99",
        image: "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?q=80&w=327&auto=format&fit=crop",
        description: "High-quality wireless headphones with noise-cancellation."
    },
    {
        id: "2",
        name: "Apple 15 Pro Max",
        brand: "TechNova",
        price: "$999.99",
        image: "https://images.unsplash.com/photo-1695639516809-7688b5a97554?q=80&w=1032&auto=format&fit=crop",
        description: "The latest Apple iPhone 15 Pro Max with A17 chip."
    },
    {
        id: "3",
        name: "Smartwatch Series 5",
        brand: "FitTrack",
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=870&auto=format&fit=crop",
        description: "Track your fitness and health with Smartwatch Series 5."
    },
    {
        id: "4",
        name: "Bluetooth Speaker",
        brand: "EchoSound",
        price: "$79.99",
        image: "https://images.unsplash.com/photo-1542193810-9007c21cd37e?q=80&w=870&auto=format&fit=crop",
        description: "Portable Bluetooth speaker with high-quality sound."
    },
    {
        id: "5",
        name: "Macbook Ultra",
        brand: "CompuTech",
        price: "$1299.99",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=870&auto=format&fit=crop",
        description: "Powerful Macbook Ultra for professionals and creatives."
    },
    {
        id: "6",
        name: "Gaming Mouse",
        brand: "HyperX",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=870&auto=format&fit=crop",
        description: "High-precision gaming mouse for ultimate performance."
    },
    {
        id: "7",
        name: "Portable Charger",
        brand: "PowerGo",
        price: "$39.99",
        image: "https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?q=80&w=870&auto=format&fit=crop",
        description: "Compact portable charger for charging on the go."
    },
    {
        id: "8",
        name: "VR Headset",
        brand: "VisionPro",
        price: "$499.99",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=870&auto=format&fit=crop",
        description: "Immersive VR headset for next-level virtual experiences."
    },
    {
        id: "9",
        name: "Smart Home Hub",
        brand: "HomeLink",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1729839206142-d03c98f921fd?q=80&w=870&auto=format&fit=crop",
        description: "Control your smart home devices with ease."
    }
];

export default function ProductDetailsPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const found = products.find((p) => p.id === params.id);
        if (found) {
            setProduct(found);
        } else {
            setError("Product not found.");
        }
        setLoading(false);
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
