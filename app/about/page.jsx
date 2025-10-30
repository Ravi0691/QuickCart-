"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";



const About = () => {
  return (

    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* Top Section */}
      <Link href="/" className="hover:text-gray-900 transition  flex   items-center justify-between text-xl md:px-16 md:px-30 py-10">
          Home
        </Link>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-16">
        {/* Left: Logo and Text */}
        <div className="md:w-1/2 space-y-6">
          <Image
            src={assets.logo}
            alt="QuickCart Logo"
            className="w-36 md:w-44"
          />
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            About <span className="text-blue-600">QuickCart</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            QuickCart is a next-generation e-commerce platform built to make
            online shopping faster, simpler, and more enjoyable. Whether you’re
            hunting for the latest smartphones, laptops, or accessories,
            QuickCart ensures a seamless buying experience from browsing to
            checkout.
          </p>
        </div>

        {/* Right: Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={assets.about_us}
            alt="About QuickCart"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg"
/>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
          Our Mission
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our mission is to empower tech enthusiasts by providing them with a
          reliable platform to shop high-quality gadgets and accessories. We aim
          to deliver not only great products but also trust, transparency, and a
          modern user experience that keeps customers coming back.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-10">
          Why Choose QuickCart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Trusted Products
            </h3>
            <p className="text-sm text-gray-600">
              We partner only with verified brands and sellers to ensure you get
              genuine products every time.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Secure Checkout
            </h3>
            <p className="text-sm text-gray-600">
              Your payments and data are protected with advanced encryption and
              verified gateways.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Get your favorite gadgets delivered quickly with real-time order
              tracking and notifications.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
          Meet Our Team
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          We’re a small but passionate team of developers, designers, and tech
          enthusiasts working together to make online shopping better for
          everyone.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example team cards (you can replace with real people) */}
          <div className="w-60 p-5 bg-gray-50 rounded-xl shadow-md text-center">
            <Image
              src={assets.girl_with_earphone_image}
              alt="Team member"
              width={100}
              height={100}
              className="mx-auto rounded-md mb-4"
            />
            <h3 className="font-medium text-gray-900">Top Notch </h3>
            <p className="text-sm text-gray-500">Best Quality</p>
          </div>
          <div className="w-60 p-5 bg-gray-50 rounded-xl shadow-md text-center">
            <Image
              src={assets.girl_with_headphone_image}
              alt="Team member"
              width={100}
              height={100}
              className="mx-auto rounded-md mb-4"
            />
            <h3 className="font-medium text-gray-900">Feel The Bass </h3>
            <p className="text-sm text-gray-500">Let Your Heart Feel it</p>
          </div>
        </div>
      </section>

      {/* Footer tagline */}
      <div className="text-center py-10 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          © 2025 QuickCart All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
