import React from 'react';

const HeroSection = () => {
    return (
        <header className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200 text-pink-900 py-24 px-6 text-center shadow-lg rounded-b-3xl mb-12 animate-in fade-in zoom-in duration-700">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm">
                    เริ่มต้น <span className="text-pink-600">รักตัวเอง</span> วันนี้
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 italic max-w-2xl mx-auto leading-relaxed">
                    "ไม่ต้องเก่งที่สุด แค่ดีขึ้นกว่าเมื่อวานก็พอแล้ว<br />
                    สุขภาพดีเริ่มต้นจากการขยับเล็กๆ น้อยๆ"
                </p>
                <button className="mt-8 px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform active:scale-95 border-2 border-pink-100">
                    เริ่มกันเลย! 💕
                </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        </header>
    );
};

export default HeroSection;
