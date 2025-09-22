import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-800 mb-4">
            Let&apos;s Connect
          </div>
          
          {/* Contact Information */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
              <span>📧 couragedoggy@email.com</span>
              <span>•</span>
              <span>📱 +91 9876543210</span>
            </div>
            <div className="text-sm text-gray-600">
              📍 India
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-violet-600 hover:text-violet-800 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-violet-600 hover:text-violet-800 transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-violet-600 hover:text-violet-800 transition-colors duration-300">
              Email
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 border-t border-gray-200 pt-4">
            © 2025 COURAGE THE COWARDLY DOG. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


