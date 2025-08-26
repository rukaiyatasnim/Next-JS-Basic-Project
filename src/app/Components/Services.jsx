"use client";

import Image from "next/image";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    brand: "SoundMax",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1641048930621-ab5d225ae5b0?q=80&w=327&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Apple 15 Pro Max",
    brand: "TechNova",
    price: "$999.99",
    image: "https://images.unsplash.com/photo-1695639516809-7688b5a97554?q=80&w=1032&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Smartwatch Series 5",
    brand: "FitTrack",
    price: "$199.99",
    image: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    brand: "EchoSound",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1542193810-9007c21cd37e?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Macbook Ultra",
    brand: "CompuTech",
    price: "$1299.99",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Gaming Mouse",
    brand: "HyperX",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "7",
    name: "Portable Charger",
    brand: "PowerGo",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "VR Headset",
    brand: "VisionPro",
    price: "$499.99",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=870&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Smart Home Hub",
    brand: "HomeLink",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1729839206142-d03c98f921fd?q=80&w=870&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-2xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 cursor-default"
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
