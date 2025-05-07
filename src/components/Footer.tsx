import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">360CostManagement</h3>
          <p className="text-gray-400">
            Empowering businesses with accurate financial insights and
            strategic guidance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            
            <li>Email: info@360costmanagement.com</li>
            <li>Phone: (347) 785-9125</li>
            <li>Fax: (929) 296-7431</li>
            <li>Location: New York, NY</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} 360CostManagement. All rights reserved.
      </div>
    </footer>
  );
}