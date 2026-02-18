import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-10 text-pink-400 border-t border-pink-100 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <p className="font-semibold text-pink-600 mb-2">My Fitness Journey</p>
                <p className="text-sm">
                    © 2026 ปั้นหุ่นสวยด้วยมือเรา | สร้างสรรค์ด้วยความรัก 💕
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    {['IG', 'FB', 'TW'].map((social) => (
                        <span key={social} className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-100 hover:text-pink-600 transition-colors cursor-pointer">
                            {social}
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
