import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="bg-secondary text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Keylearn-inverse-logo.png" alt="Key Learn Logo" className="h-16 mr-3" />
          </div>
  
          {/* Menu */}
          <div>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li className="group relative">
              <Link href="/our-courses" className="hover:text-gray-300">Courses</Link>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white text-blue-800 shadow-lg mt-2 w-40">
                <li><Link href="/our-courses/mathematics" className="block px-4 py-2 hover:bg-blue-100">Maths</Link></li>
                <li><Link href="/our-courses/english" className="block px-4 py-2 hover:bg-blue-100">English</Link></li>
                <li><Link href="/our-courses/leadership-program" className="block px-4 py-2 hover:bg-blue-100">LeaderShip</Link></li>
              </ul>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-gray-300">Media</a>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white text-blue-800 shadow-lg mt-2 w-40">
                <li><Link href="/media/testimonals" className="block px-4 py-2 hover:bg-blue-100">Testimonals</Link></li>
                <li><Link href="/media/video-testimonals" className="block px-4 py-2 hover:bg-blue-100">Video Testimonals</Link></li>
                <li><Link href="/media/gallery" className="block px-4 py-2 hover:bg-blue-100">Gallery</Link></li>
              </ul>
            </li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          
  
          {/* Call-to-Action Button */}
          <li>
          <Link
            href="/apply"
            className="px-4 py-2 rounded hover:bg-yellow-600"
          >
            Apply Now
          </Link>
          </li>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
  