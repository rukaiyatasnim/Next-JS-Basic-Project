"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About */}
                <div>
                    <h3 className="text-xl font-bold mb-3">TechNest</h3>
                    <p className="text-gray-400">
                        TechNest is your destination for the latest tech gadgets.
                        Quality products, fast delivery, and excellent support.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Contact</h3>
                    <p>Email: support@technest.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Address: Banani, Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-6 text-center py-4 text-gray-400">
                &copy; {new Date().getFullYear()} TechNest. All rights reserved.
            </div>
        </footer>
    );
}
