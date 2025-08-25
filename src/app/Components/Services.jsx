"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 cursor-default"
            >
              <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-500 mb-2">{item.brand}</p>
                <p className="text-indigo-600 font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
