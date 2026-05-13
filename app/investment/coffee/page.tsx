"use client";

import React from 'react';

export default function CoffeeInvestmentPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F9F6F1] text-[#2D2D2D] px-6 py-16 font-sans">
      
      {/* الشعار */}
      <div className="flex justify-center mb-10">
        <img
          src="/logo.png"
          alt="هوية ورؤية"
          className="w-40"
          loading="eager"
        />
      </div>

      {/* العنوان */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="text-[#D4AF37] text-xl font-semibold mb-4">هوية ورؤية</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          طلب الاستثمار — قطاع البن اليمني
        </h1>
        <p className="mt-8 leading-loose text-xl text-[#555]">
          شاركنا معلوماتك الأولية ليقوم فريقنا بالتواصل معك وعرض تفاصيل الفرصة الاستثمارية والعلامة التجارية المقترحة.
        </p>
      </div>

      {/* النموذج */}
      <form
        action="https://formspree.io/f/mkoyawez"
        method="POST"
        className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-[#EFE3C2]"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" name="fullName" placeholder="الاسم الكامل" className="p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-[#D4AF37]" required />
          <input type="text" name="country" placeholder="الدولة" className="p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-[#D4AF37]" required />
          <input type="email" name="email" placeholder="البريد الإلكتروني" className="p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-[#D4AF37]" required />
          <input type="tel" name="phone" placeholder="رقم التواصل" className="p-4 rounded-2xl border outline-none focus:ring-2 focus:ring-[#D4AF37]" required />
        </div>

        <div className="mt-8">
          <label className="block mb-3 font-bold">حجم الاستثمار المتوقع</label>
          <select name="investmentSize" className="w-full p-4 rounded-2xl border bg-white outline-none focus:ring-2 focus:ring-[#D4AF37]">
            <option value="under-50k">أقل من 50 ألف دولار</option>
            <option value="50k-250k">50 ألف - 250 ألف دولار</option>
            <option value="250k-1m">250 ألف - مليون دولار</option>
            <option value="above-1m">أكثر من مليون دولار</option>
          </select>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <textarea name="experience" placeholder="هل لديك خبرة تجارية أو استثمارية؟" className="w-full p-4 rounded-2xl border min-h-[120px] outline-none focus:ring-2 focus:ring-[#D4AF37]" />
          <textarea name="interestReason" placeholder="لماذا تهتم بقطاع البن اليمني؟" className="w-full p-4 rounded-2xl border min-h-[120px] outline-none focus:ring-2 focus:ring-[#D4AF37]" />
        </div>

        <input type="hidden" name="_subject" value="طلب استثمار جديد - قطاع البن اليمني" />

        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className="px-12 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B68B2C] text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform"
          >
            إرسال الاهتمام الاستثماري
          </button>
        </div>
      </form>
    </main>
  );
}