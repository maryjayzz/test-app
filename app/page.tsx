"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">เริ่มต้นออกกำลังกายฉบับมือใหม่</h1>
        <p className="text-lg opacity-90 italic">"วินัยชนะทุกอย่าง เริ่มแต่น้อยแต่ทำสม่ำเสมอ"</p>
      </header>

      <main className="max-w-4xl mx-auto p-6 -mt-10">
        
        {/* แผนการกิน */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
            🥗 แผนการกิน (สูตร 2:1:1)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-xl border border-green-100 transition-transform hover:scale-105">
              <span className="text-4xl">🥦</span>
              <h3 className="font-bold mt-2 text-green-800">ผัก 2 ส่วน</h3>
              <p className="text-sm text-gray-600">ผักใบเขียว หลากสี ต้มหรือสด</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 transition-transform hover:scale-105">
              <span className="text-4xl">🍚</span>
              <h3 className="font-bold mt-2 text-yellow-800">แป้ง 1 ส่วน</h3>
              <p className="text-sm text-gray-600">ข้าวไม่ขัดสี ขนมปังโฮลวีต</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100 transition-transform hover:scale-105">
              <span className="text-4xl">🍗</span>
              <h3 className="font-bold mt-2 text-red-800">โปรตีน 1 ส่วน</h3>
              <p className="text-sm text-gray-600">อกไก่ ไข่ต้ม ปลา เนื้อไม่ติดมัน</p>
            </div>
          </div>
        </section>

        {/* ตารางออกกำลังกาย */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 overflow-hidden">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">🏋️ ตาราง 4 สัปดาห์แรก</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-indigo-50 text-indigo-700">
                  <th className="p-4 border-b">วัน</th>
                  <th className="p-4 border-b">กิจกรรม</th>
                  <th className="p-4 border-b">รายละเอียด</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { day: "จันทร์", type: "Bodyweight", desc: "สควอท, วิดพื้น, แพลงก์ (3 เซต)" },
                  { day: "อังคาร", type: "Cardio", desc: "เดินเร็ว 20-30 นาที" },
                  { day: "พุธ", type: "Rest", desc: "พักร่างกาย (Rest Day)", isRest: true },
                  { day: "พฤหัส", type: "Bodyweight", desc: "เน้นท่าเดิม โฟกัสกล้ามเนื้อ" },
                  { day: "ศุกร์", type: "Cardio", desc: "เดินเร็ว 30-40 นาที" },
                  { day: "เสาร์", type: "Hobby", desc: "ว่ายน้ำ, ปั่นจักรยาน, ทำงานบ้าน" },
                  { day: "อาทิตย์", type: "Rest", desc: "พักร่างกาย (Rest Day)", isRest: true },
                ].map((item, idx) => (
                  <tr key={idx} className={item.isRest ? "bg-gray-50 text-gray-400" : "hover:bg-indigo-50/30 transition-colors"}>
                    <td className="p-4 font-bold">{item.day}</td>
                    <td className="p-4 italic">{item.type}</td>
                    <td className="p-4">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-indigo-100 p-6 rounded-2xl border-l-8 border-indigo-500 shadow-md">
            <h3 className="font-bold text-indigo-800 mb-3 text-lg">💡 ทริคสำคัญ</h3>
            <ul className="space-y-2 text-indigo-900 text-sm">
              <li>• ดื่มน้ำอย่างน้อย 2-3 ลิตรต่อวัน</li>
              <li>• พักผ่อนให้เพียงพอ 7-8 ชั่วโมง</li>
              <li>• ค่อยๆ ทำ ไม่ต้องรีบเปรียบเทียบกับใคร</li>
            </ul>
          </div>
          <div className="bg-green-100 p-6 rounded-2xl border-l-8 border-green-500 shadow-md">
            <h3 className="font-bold text-green-800 mb-3 text-lg">✅ ความก้าวหน้า</h3>
            <ul className="space-y-2 text-green-900 text-sm">
              <li>• เสื้อผ้าเริ่มใส่สบายขึ้น</li>
              <li>• ตื่นมาแล้วรู้สึกสดชื่น ไม่เพลีย</li>
              <li>• ทำท่าเดิมได้นานขึ้น หรือเหนื่อยน้อยลง</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-gray-400 border-t border-gray-200">
        <p>© 2026 My Fitness Journey - ปั้นหุ่นสวยด้วยมือเรา</p>
      </footer>
    </div>
  );
}