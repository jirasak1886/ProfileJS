import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 max-w-3xl w-full">
        {/* รูปโปรไฟล์ */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 rounded-full border-4 border-sky-300 shadow-md overflow-hidden mb-4">
            <Image
              src="/pro.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-sky-700">จิรศักดิ์ แว่นนาค (Jirasak Waennak)</h1>
          <p className="text-sm text-gray-600">652021044</p>
          <p className="text-base text-gray-800 italic mt-2">"จะหลับกี่โมง ก็ตื่นสายเสมอ"</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white/90 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">ข้อมูลส่วนตัว</h2>
            <p className="text-black"><strong>วันเกิด:</strong> 18 กพ 2003</p>
            <p className="text-black"><strong>อีเมล:</strong> 652021044@tsu.ac.th</p>
            <a
              href="https://www.facebook.com/share/1EfL5hkaGq/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <FaFacebook className="text-xl" />
              <p className="text-black"><strong>Facebook:</strong>Jirasakwaennak</p>
            </a>



          </div>

          <div className="bg-white/90 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">ทักษะและความสามารถ</h2>
            <ul className="bg-white/90 p-4 rounded-lg shadow text-black">
              <li>ใช้งาน Canva </li>
              <li>Office</li>
              <li>Html css</li>
              <li>Flutter nodeJS</li>
            </ul>
          </div>

          <div className="bg-white/90 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">การศึกษา</h2>
            <p className="text-black">เคยศึกษาประถมศึกษาที่</p>
            <a
              href="https://www.phatthalung.go.th/2022/initiative/detail/39/data.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-blue-600 transition"
            >
              ตชด.บ้านควนตะแบก
            </a>
            <p className="text-black">เคยศึกษามัธยมศึกษาที่</p>
            <a
              href="https://nkkw.thai.ac/home/personal/5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-blue-600 transition"
            >
              โรงเรียนนิคมควนขนุนวิทยา
            </a>

            <p className="text-black">ปัจจุบันกำลังศึกษาที่</p>
            <a
              href="https://scidi.tsu.ac.th/csit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline hover:text-blue-600 transition"
            >
              วิทยาการคอมพิวเตอร์ ม ทักษิณ
            </a>
          </div>

          <div className="bg-white/90 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">งานอดิเรก</h2>
            <ul className="bg-white/90 p-4 rounded-lg shadow text-black">
              <li>ฟังเพลง </li>
              <li>นอน</li>
              <li>เล่นเกม</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
