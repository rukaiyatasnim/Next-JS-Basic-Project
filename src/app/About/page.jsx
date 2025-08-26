"use client";

export default function AboutPage() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>

            <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to our platform! We are passionate about delivering the best tech products to our customers.
                Our mission is to provide high-quality gadgets with excellent customer support.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
                Our team works tirelessly to bring you the latest innovations in technology.
                From smartphones and laptops to smart home devices, we strive to keep you connected and up-to-date.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
                We value trust, quality, and customer satisfaction above all. Thank you for being a part of our journey!
            </p>

            <div className="text-center mt-8">
                <a
                    href="/products"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                >
                    Explore Products
                </a>
            </div>
        </div>
    );
}
