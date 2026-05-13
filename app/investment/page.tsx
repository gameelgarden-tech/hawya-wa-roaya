"use client";

import { useRouter } from "next/navigation";

export default function InvestmentPage() {

const router = useRouter();

const sectors = [

"العسل",
"البن اليمني",
"الحلويات الشعبية",
"الأزياء التقليدية",
"المشغولات الفضية",
"الحرف اليدوية",
"الفنون البصرية",


];

return (


<main className="min-h-screen bg-[#F9F6F1] text-[#2D2D2D] px-6 py-20">

  {/* الشعار */}
  <div className="flex justify-end">
    <img
      src="/logo.png"
      className="w-28"
      loading="eager"
    />
  </div>

  {/* العنوان */}
  <div className="text-center mt-12">

    <h1 className="text-5xl font-bold text-[#D4AF37]">
      استثمر بعلامة مبتكرة
    </h1>

    <p className="mt-8 max-w-4xl mx-auto leading-loose text-xl text-[#444]">

      اختر أحد قطاعات التراث والثقافة اليمنية لنصنع ونقدم لك
      علامة تجارية مبتكرة بهوية تسويقية عصرية وخطة دخول
      للسوق المستهدف.

    </p>

  </div>

  {/* القطاعات */}
  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">

    {sectors.map((sector) => (

      <button
        key={sector}
        onClick={() => {

          if (sector === "البن اليمني") {
            router.push("/investment/coffee");
          }

        }}
        className="bg-white rounded-3xl p-10 shadow-md border border-[#EFE3C2]
        hover:border-[#D4AF37] hover:shadow-xl hover:scale-[1.02]
        transition-all duration-300 text-right min-h-[260px]"
      >

        <h2 className="text-3xl font-bold text-[#D4AF37]">
          {sector}
        </h2>

        <p className="mt-8 leading-loose text-[#555]">

          اكتشف فرص بناء علامة تجارية مبتكرة في قطاع
          {sector} ضمن الاقتصاد الإبداعي والتراث اليمني.

        </p>

      </button>

    ))}

  </div>

  {/* الرسالة النهائية */}
  <div className="mt-28 text-center max-w-5xl mx-auto">

    <p className="text-2xl leading-loose text-[#444]">

      أكد اهتمامك ليتواصل معك خبراؤنا ونبدأ بعرض
      العلامة المبتكرة وخطة الاستثمار وفق منهجيات
      الإدارة والتسويق والصناعات الإبداعية الحديثة.

    </p>

  </div>

</main>


);
}
