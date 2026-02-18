import React from 'react';

const WorkoutSchedule = () => {
    const schedule = [
        { day: "จันทร์", type: "Bodyweight", desc: "สควอท, วิดพื้น, แพลงก์ (3 เซต)", icon: "💪" },
        { day: "อังคาร", type: "Cardio", desc: "เดินเร็ว 20-30 นาที", icon: "🏃‍♀️" },
        { day: "พุธ", type: "Rest", desc: "พักร่างกาย (Rest Day)", isRest: true, icon: "😴" },
        { day: "พฤหัส", type: "Bodyweight", desc: "เน้นท่าเดิม โฟกัสกล้ามเนื้อ", icon: "🧘‍♀️" },
        { day: "ศุกร์", type: "Cardio", desc: "เดินเร็ว 30-40 นาที", icon: "🚶‍♀️" },
        { day: "เสาร์", type: "Hobby", desc: "ว่ายน้ำ, ปั่นจักรยาน, ทำงานบ้าน", icon: "🏊‍♀️" },
        { day: "อาทิตย์", type: "Rest", desc: "พักร่างกาย (Rest Day)", isRest: true, icon: "🛌" },
    ];

    return (
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-pink-100 max-w-4xl mx-auto transform transition-all hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center flex items-center justify-center gap-2">
                <span>🏋️‍♀️</span> ตาราง 4 สัปดาห์แรก
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-pink-50 text-pink-700 rounded-t-lg">
                            <th className="p-4 border-b border-pink-100 first:rounded-tl-lg">วัน</th>
                            <th className="p-4 border-b border-pink-100">กิจกรรม</th>
                            <th className="p-4 border-b border-pink-100 last:rounded-tr-lg">รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-pink-50">
                        {schedule.map((item, idx) => (
                            <tr key={idx} className={`transition-colors duration-200 ${item.isRest ? "bg-gray-50 text-gray-400" : "hover:bg-pink-50/50"}`}>
                                <td className="p-4 font-bold whitespace-nowrap">
                                    <span className="inline-block w-8">{item.icon}</span>
                                    {item.day}
                                </td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.isRest ? 'bg-gray-100 text-gray-500' : 'bg-pink-100 text-pink-600'}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className="p-4 text-sm md:text-base">{item.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 italic">
                    * ปรับเปลี่ยนได้ตามความเหมาะสมของร่างกาย
                </p>
            </div>
        </section>
    );
};

export default WorkoutSchedule;
