"use client";

import { useSearchParams } from "next/navigation";

export default function ConsultationFormPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const questions: Record<string, string[]> = {
    "تطوير مشروع تراثي": [
      "ما القطاع التراثي المرتبط بالمشروع؟",
      "هل لديك منتج فعلي حالياً؟",
      "ما أبرز التحديات الحالية؟",
      "هل لديك هوية بصرية؟",
      "هل تستهدف السوق المحلي أم الدولي؟",
    ],
    "تطوير مشروع ثقافي": [
      "ما نوع المشروع الثقافي؟",
      "ما الفئة المستهدفة؟",
      "هل المشروع ربحي أم تنموي؟",
      "ما الأثر الذي تريد تحقيقه؟",
      "ما المرحلة الحالية للمشروع؟",
    ],
    "إعادة بناء علامة تجارية": [
      "ما اسم العلامة الحالية؟",
      "ما المشكلة الرئيسية بالعلامة؟",
      "هل لديك شعار وهوية حالية؟",
      "هل ترغب بإعادة التموضع؟",
      "ما السوق المستهدف؟",
    ],
  };

  return (
    <main className="min-h-screen bg-[#F9F6F1] text-[#2D2D2D] px-6 py-16" dir="rtl">
      <form action="https://formspree.io/f/xqenwepl" method="POST">
        {/* توجيه العميل بعد الإرسال الناجح */}
        <input type="hidden" name="_next" value="https://formspree.io/thanks" />
        {/* تحديد نوع الخدمة كحقل مخفي ليصلك في الإيميل */}
        <input type="hidden" name="service_type" value={type || "لم يتم التحديد"} />

        <div className="flex justify-end">
          <img src="/logo.png" alt="هوية ورؤية" className="w-28" />
        </div>

        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold text-[#D4AF37]">نموذج طلب الاستشارة</h1>
          <p className="mt-4">نوع الخدمة المختارة: {type}</p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="space-y-6">
            <input
              type="text"
              name="full_name"
              placeholder="الاسم الكامل"
              className="w-full p-4 rounded-xl border text-right"
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="رقم التواصل"
              className="w-full p-4 rounded-xl border text-right"
              required
            />
            <input
              type="email"
              name="email_address"
              placeholder="البريد الإلكتروني"
              className="w-full p-4 rounded-xl border text-right"
              required
            />
            <input
              type="text"
              name="project_name"
              placeholder="اسم المشروع أو العلامة"
              className="w-full p-4 rounded-xl border text-right"
            />
          </div>

          <div className="mt-10 space-y-8">
            {questions[type || ""]?.map((question, index) => (
              <div key={index}>
                <label className="block mb-3 font-semibold text-right">{question}</label>
                <textarea
                  name={`question_${index + 1}`}
                  className="w-full p-4 rounded-xl border min-h-[120px] text-right"
                  placeholder="اكتب إجابتك هنا..."
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="px-10 py-4 bg-[#D4AF37] rounded-xl font-bold text-black hover:bg-[#b8962d] transition-colors"
            >
              إرسال الطلب
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}