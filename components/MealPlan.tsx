import React from 'react';

const MealPlan = () => {
    return (
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-pink-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center flex items-center justify-center gap-2">
                <span>🥗</span> แผนการกิน (สูตร 2:1:1)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-green-50 rounded-2xl border border-green-100 transition-transform hover:scale-105 shadow-sm group">
                    <span className="text-5xl mb-4 block group-hover:animate-bounce">🥦</span>
                    <h3 className="font-bold text-xl text-green-800 mb-2">ผัก 2 ส่วน</h3>
                    <p className="text-gray-600 text-sm">ผักใบเขียว หลากสี ต้มหรือสด<br />เน้นใยอาหาร อิ่มนาน</p>
                </div>
                <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 transition-transform hover:scale-105 shadow-sm group">
                    <span className="text-5xl mb-4 block group-hover:animate-bounce delay-100">🍚</span>
                    <h3 className="font-bold text-xl text-yellow-800 mb-2">แป้ง 1 ส่วน</h3>
                    <p className="text-gray-600 text-sm">ข้าวไม่ขัดสี ขนมปังโฮลวีต<br />พลังงานดี มีประโยชน์</p>
                </div>
                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 transition-transform hover:scale-105 shadow-sm group">
                    <span className="text-5xl mb-4 block group-hover:animate-bounce delay-200">🍗</span>
                    <h3 className="font-bold text-xl text-red-800 mb-2">โปรตีน 1 ส่วน</h3>
                    <p className="text-gray-600 text-sm">อกไก่ ไข่ต้ม ปลา เนื้อไม่ติดมัน<br />สร้างกล้ามเนื้อ ซ่อมแซมร่างกาย</p>
                </div>
            </div>

            <div className="mt-8 p-6 bg-pink-50 rounded-xl border-l-4 border-pink-400">
                <h4 className="font-bold text-pink-700 mb-2 text-lg">💡 ตัวอย่างเมนูง่ายๆ</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>ข้าวกล้อง + ไข่เจียวผักโขม + แกงจืดเต้าหู้</li>
                    <li>สลัดอกไก่ย่าง + ขนมปังโฮลวีต 1 แผ่น</li>
                    <li>ลาบหมูสับ (ไม่มัน) + ผักสดเยอะๆ + ข้าวไรซ์เบอรี่</li>
                </ul>
            </div>
        </section>
    );
};

export default MealPlan;
