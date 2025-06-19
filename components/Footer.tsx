import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 text-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <p>&copy; 2025 MyApp. All rights reserved.</p>

        <a
          href="https://www.facebook.com/share/1EfL5hkaGq/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaFacebook className="text-xl" />
        </a>
      </div>
    </footer>
  )
}
