import Image from 'next/image'

export default function Home() {
  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')"
    }}
    
  >
      <div className="relative w-60 h-60 rounded-full bg-white/40 shadow-lg border-4 border-white flex items-center justify-center">
        <Image
          src="/pro.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-md border-4 border-sky-300"
        />
      </div>
      <p className="mt-6 text-xl text-sky-900 font-semibold drop-shadow">
        Jirasak waennak 652021044
      </p>
      <p className="mt-6 text-xl text-sky-900 font-semibold drop-shadow">
        จะหลับกี่โมง ก็ตื่นสายเสมอ
      </p>
    </div>
  )
}
