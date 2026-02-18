"use client";

import React from 'react';
import HeroSection from '@/components/HeroSection';
import WorkoutSchedule from '@/components/WorkoutSchedule';
import MealPlan from '@/components/MealPlan';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50/30 text-gray-800 font-sans selection:bg-pink-200">
      <HeroSection />

      <main className="max-w-5xl mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="space-y-16">
          <WorkoutSchedule />
          <MealPlan />

          {/* Tips Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-bold text-pink-600 mb-4 text-xl flex items-center gap-2">
                <span>💡</span> ทริคสำคัญ
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>ดื่มน้ำอย่างน้อย 2-3 ลิตรต่อวัน ผิวจะสวยด้วยนะ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>พักผ่อนให้เพียงพอ 7-8 ชั่วโมง ร่างกายจะได้ซ่อมแซม</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>ค่อยๆ ทำ ไม่ต้องรีบเปรียบเทียบกับใคร เราแข่งกับตัวเอง</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-bold text-green-600 mb-4 text-xl flex items-center gap-2">
                <span>✅</span> สัญญาณดีๆ
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>เสื้อผ้าเริ่มใส่สบายขึ้น ไม่อึดอัด</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>ตื่นมาแล้วรู้สึกสดชื่น ไม่เพลียเฟลีย</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>บันไดไม่ใช่ศัตรูอีกต่อไป! เดินขึ้นลงได้สบายๆ</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}