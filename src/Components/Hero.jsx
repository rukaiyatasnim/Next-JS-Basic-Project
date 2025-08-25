"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative bg-gray-900 text-white h-[80vh] flex items-center justify-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
            <div className="relative z-10 max-w-3xl text-center px-6">
                <h1 className="text-5xl font-extrabold mb-4">
                    Welcome to TechNest
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                    Discover the latest tech gadgets, high-quality products, and exclusive deals.
                    Stay ahead with TechNest.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link
                        href="/products"
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                    >
                        Explore Products
                    </Link>
                    <Link
                        href="/about"
                        className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-700 transition-colors"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
