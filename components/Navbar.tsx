'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* โลโก้ */}
        <div className="w-32 h-auto">
          <Image
            src="/next.svg"
            alt="Logo"
            width={128}
            height={40}
            priority
          />
        </div>

        {/* เมนู */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold ${
                pathname === link.href
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'text-gray-700'
              } hover:text-blue-500 transition`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
