"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(`❌ ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 relative flex flex-col items-center justify-center px-6">
     

      <div className="absolute top-10 left-6 gap-4">
        <Link href="/">
         <Link href="/" className="flex items-center text-2xl gap-4  hover:text-gray-900 transition">
          Home
        </Link>
          <Image src={assets.logo} alt="QuickCart logo" className="  w-32 md:w-36" />
        </Link>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 w-full max-w-md text-gray-800">
        <h1 className="text-3xl font-semibold text-center mb-2 text-gray-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400  resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium py-2 rounded-lg transition duration-200`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMessage && (
          <p className="text-center mt-4 text-sm">
            {responseMessage}
          </p>
        )}
      </div>

      {/* Optional contact info */}
      <div className="text-center mt-10 text-gray-600 text-sm">
        <p>📞 +91-234-567-8900</p>
        <p> contact@quickcart.helpdesk</p>
      </div>
    </div>
  );
};

export default ContactPage;
