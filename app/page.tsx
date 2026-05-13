"use client";

import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter();

return (


<main className="min-h-screen bg-[#0D0D0D]
text-white flex flex-col items-center
justify-center px-6 py-16">

  {/* الشعار */}
  <img
    src="/logo.png"
    alt="هوية ورؤية"
    className="w-48 mb-10
    drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]"
    loading="eager"
  />

  {/* الشعار النصي */}
  <p className="text-2xl text-center text-[#E5D3B3]">
    من الإرث إلى الأثر
  </p>

  {/* النص التعريفي */}
  <div className="mt-10 text-center max-w-4xl">

    <p className="text-2xl leading-loose text-[#EAEAEA]">

      العقل الرقمي الاستراتيجي للتراث
      والاقتصاد الإبداعي اليمني

    </p>

    <p className="mt-4 text-xl leading-loose text-[#CFCFCF]">

      نحول الهوية إلى قيمة،
      والثقافة إلى أثر،
      والتراث إلى قوة إنتاجية.

    </p>

  </div>

  {/* الأزرار */}
  <div className="mt-16 flex flex-col md:flex-row gap-6">

    {/* الاستشارات */}
    <button
      onClick={() => router.push("/consultation")}
      className="px-8 py-4 rounded-2xl
      bg-gradient-to-r from-[#D4AF37]
      to-[#B68B2C]
      text-black font-bold shadow-xl
      hover:scale-105 transition-all duration-300"
    >
      اطلب استشارة
    </button>

    {/* اكتشف المنصة */}
    <button
      className="px-8 py-4 rounded-2xl
      border border-[#D4AF37]
      text-[#F5E6B5]
      hover:bg-[#1A1A1A]
      transition-all duration-300"
    >
      اكتشف المنصة
    </button>

    {/* الاستثمار */}
    <button
      onClick={() => router.push("/investment")}
      className="px-8 py-4 rounded-2xl
      bg-gradient-to-r from-[#D4AF37]
      to-[#B68B2C]
      text-black font-bold shadow-xl
      hover:scale-105 transition-all duration-300"
    >
      استثمر بعلامة مبتكرة
    </button>

  </div>

</main>


);
}
