"use client";

export default function CoffeeInvestmentPage() {
  return (
    
    <main dir="rtl" className="min-h-screen bg-[#F9F6F1] text-[#2D2D2D] px-6 py-16 font-sans">
      
      {/* الشعار */}
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="هوية ورؤية"
          className="w-40 mb-10"
          loading="eager"
        />
      </div>

      {/* العنوان */}
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-[#D4AF37] text-xl font-semibold">
          هوية ورؤية
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
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
        className="max-w-4xl mx-auto mt-16 bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-[#EFE3C2]"
      >
        {/* البيانات الأساسية */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold mr-2">الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              placeholder="مثال: محمد أحمد"
              className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold mr-2">الدولة</label>
            <input
              type="text"
              name="country"
              placeholder="مكان الإقامة الحالي"
              className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold mr-2">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold mr-2">رقم التواصل</label>
            <input
              type="tel"
              name="phone"
              placeholder="+966 xxxx xxxx"
              className="p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
              required
            />
          </div>
        </div>

        {/* حجم الاستثمار */}
        <div className="mt-8">
          <label className="block mb-3 font-bold text-lg">حجم الاستثمار المتوقع</label>
          <select
            name="investmentSize"
            className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none appearance-none bg-white"
          >
            <option value="under-50k">أقل من 50 ألف دولار</option>
            <option value="50k-250k">50 ألف - 250 ألف دولار</option>
            <option value="250k-1m">250 ألف - مليون دولار</option>
            <option value="above-1m">أكثر من مليون دولار</option>
          </select>
        </div>

        {/* الأسئلة التفصيلية */}
        {[
          { id: "experience", label: "هل لديك خبرة تجارية أو استثمارية؟", placeholder: "شاركنا خبرتك السابقة..." },
          { id: "interestReason", label: "لماذا تهتم بقطاع البن اليمني؟", placeholder: "اكتب تفاصيل اهتمامك..." },
          { id: "targetMarkets", label: "ما الأسواق التي تستهدفها؟", placeholder: "الخليج، أوروبا، شرق آسيا..." }
        ].map((field) => (
          <div key={field.id} className="mt-8">
            <label className="block mb-3 font-bold text-lg">{field.label}</label>
            <textarea
              name={field.id}
              className="w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] outline-none min-h-[120px] transition-all"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        {/* نوع الطلب المخفي */}
        <input type="hidden" name="_subject" value="طلب استثمار جديد - قطاع البن اليمني" />

        {/* زر الإرسال */}
        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B68B2C] text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full md:w-auto"
          >
            إرسال الاهتمام الاستثماري
          </button>
        </div>
      </form>
    </main>
  );
}