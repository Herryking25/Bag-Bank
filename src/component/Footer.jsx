import React from "react";
import { Instagram } from "lucide-react"; // Optional: or use image icon if preferred

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-green-600 font-semibold mb-4">Bag Bank</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-600 font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Support</a></li>
            <li><a href="#">Email us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-green-600 font-semibold mb-4">Viewer guides</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-between items-start">
          <div>
            <h4 className="text-green-600 font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          {/* Social Icon */}
          <div className="mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-700 text-white text-center text-sm py-4">
        Designed by Bag-Bank Team. All rights reserved © 2025
      </div>
    </footer>
  );
};

export default Footer;
