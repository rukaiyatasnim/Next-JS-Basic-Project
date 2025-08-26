"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navMenu = () => (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/products">Products</Link></li>
      {mounted && session && <li><Link href="/dashboard/add-product">Add Product</Link></li>}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navMenu()}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">TechNest</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>

      <div className="navbar-end">
        {mounted && session ? (
          <button onClick={() => signOut({ callbackUrl: "/" })} className="btn bg-red-500 text-white hover:bg-red-600">
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn bg-green-500 text-white hover:bg-green-600">Login</Link>
        )}
      </div>
    </div>
  );
}
