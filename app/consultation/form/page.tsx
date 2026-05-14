'use client'

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// 1. مكون فرعي يحتوي على منطق النموذج (Form Logic)
function ConsultationFormContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // هنا يمكنك إضافة منطق الـ Form الخاص بك واستخدام searchParams دون مشاكل
    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">طلب استشارة فنية</h1>
            <form className="space-y-4">
                {/* الحقول الخاصة بالنموذج تضاف هنا */}
                <div>
                    <label className="block mb-2">نوع الخدمة المحددة:</label>
                    <input 
                        type="text" 
                        className="w-full p-2 border rounded bg-gray-50"
                        value={searchParams.get('service') || 'استشارة عامة'} 
                        readOnly 
                    />
                </div>
                {/* ... باقي الحقول ... */}
                <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:opacity-90">
                    إرسال الطلب
                </button>
            </form>
        </div>
    );
}

// 2. المكون الرئيسي الذي يتم تصديره (يغلف المحتوى بـ Suspense)
export default function ConsultationPage() {
    return (
        <main className="min-h-screen bg-white py-12">
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-[400px]">
                    <p className="text-lg animate-pulse">جاري تحميل النموذج...</p>
                </div>
            }>
                <ConsultationFormContent />
            </Suspense>
        </main>
    );
}