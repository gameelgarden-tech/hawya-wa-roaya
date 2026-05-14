'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConsultationPage() {

  const router = useRouter();

  const [selected, setSelected] = useState("");

  const services = [
    {
      title: "تطوير مشروع تراثي",
      description:
        "استشارات لتطوير المشاريع المرتبطة بالتراث والصناعات التقليدية.",
    },
    {
      title: "تطوير مشروع ثقافي",
      description:
        "بناء وتطوير المبادرات والمشاريع الثقافية والإبداعية الحديثة.",
    },
    {
      title: "إعادة بناء علامة تجارية",
      description:
        "إعادة تصميم الهوية التسويقية وبناء علامة أكثر قوة وتأثيراً.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#2D2D2D] px-6 py-16">

      {/* الشعار */}
      <div className="flex justify-end">
        <img
          src="/logo.png"
          alt="هوية ورؤية"
          className="w-28"
        />
      </div>

      {/* العنوان */}
      <div className="text-center mt-8">

        <h1 className="text-5xl font-bold text-[#D4AF37]">
          اطلب استشارة
        </h1>

        <p className="mt-5 max-w-2xl mx-auto leading-loose">
          اختر نوع الخدمة التي تحتاج إليها لنساعدك في تطوير مشروعك
          التراثي أو الثقافي أو إعادة بناء علامتك التجارية.
        </p>

      </div>

      {/* الخدمات */}
      <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((service) => (

          <button
            key={service.title}
            onClick={() => setSelected(service.title)}
            className={`p-6 rounded-3xl border text-right transition-all duration-300 ${
              selected === service.title
                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                : "bg-white border-[#E5D3B3] hover:border-[#D4AF37]"
            }`}
          >

            <h2 className="text-2xl font-bold">
              {service.title}
            </h2>

            <p className="mt-4 leading-loose text-sm">
              {service.description}
            </p>

          </button>

        ))}

      </div>

      {/* زر المتابعة */}
      <div className="mt-12 flex justify-center">

        <button
          onClick={() =>
            router.push(`/consultation/form?type=${selected}`)
          }
          className={`px-8 py-4 rounded-xl font-bold transition ${
            selected
              ? "bg-[#D4AF37] text-black"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selected}
        >
          متابعة
        </button>

      </div>

    </main>
  );
}