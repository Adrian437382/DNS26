function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-8 text-center text-[var(--text-muted)] mt-auto border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="flex flex-col gap-2 mb-4">
                <p className="text-lg font-medium text-white">
                    <span className="opacity-70 text-sm ml-2">سازنده:</span>
                    <span className="text-[var(--primary-color)]">آدرین حبیبی</span>
                </p>
                <p className="text-sm">
                    <span className="opacity-70 ml-2">نوع:</span>
                    <span className="text-blue-400 font-mono">دائم</span>
                </p>
            </div>
            
            <div className="text-xs opacity-50 space-y-1">
                <p>© {currentYear} تمامی حقوق محفوظ است.</p>
                <p>توجه: این ابزار فقط آی‌پی‌های تصادفی تولید می‌کند.</p>
            </div>
        </footer>
    );
}