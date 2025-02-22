import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We'd love to hear from you! Please reach out to us using the following contact methods:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <FaEnvelope className="text-3xl text-green-600" />
              <a href="mailto:sales@metaagro.co.in" className="text-xl text-blue-600 hover:underline">
                sales@metaagro.co.in
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <FaLinkedin className="text-3xl text-blue-600" />
              <a href="https://www.linkedin.com/company/metaagroofficial/" className="text-xl text-blue-600 hover:underline">
              @metaagroofficial
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FaFacebook className="text-3xl text-blue-600" />
              <a href="https://www.facebook.com/metaagroofficial/" className="text-xl text-blue-600 hover:underline">
              @metaagroofficial
              </a>
              </div>

            <div className="flex items-center justify-center space-x-4">
              <FaInstagramSquare className="text-3xl text-red-600" />
              <a href="https://www.instagram.com/metaagroofficial/" className="text-xl text-blue-600 hover:underline">
              @metaagroofficial
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FaYoutube className="text-3xl text-red-600" />
              <a href="https://www.youtube.com/@metaagroofficial" className="text-xl text-blue-600 hover:underline">
              @metaagroofficial
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FaTwitter className="text-3xl text-blue-600" />
              <a href="https://bsky.app/profile/metagro.bsky.social" className="text-xl text-blue-600 hover:underline">
              @metagro.bsky.social
              </a>
            </div>

          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
