function Generator() {
    const [dns1, setDns1] = React.useState('');
    const [dns2, setDns2] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const generate = () => {
        setLoading(true);
        // Simulate "searching" or calculating for effect
        setTimeout(() => {
            setDns1(generateRandomIP());
            setDns2(generateRandomIP());
            setLoading(false);
        }, 600);
    };

    // Initial generation on mount
    React.useEffect(() => {
        generate();
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-8">
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <IpCard label="DNS اولیه (Preferred)" ip={dns1} delay={100} />
                <IpCard label="DNS ثانویه (Alternate)" ip={dns2} delay={200} />
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={generate}
                    disabled={loading}
                    className="relative group bg-[var(--primary-color)] text-slate-900 text-xl px-12 py-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden font-heading"
                >
                    <span className={`flex items-center gap-2 relative z-10 ${loading ? 'animate-pulse' : ''}`}>
                        {loading ? (
                            <>
                                <div className="icon-loader-2 animate-spin text-xl"></div>
                                در حال جستجو...
                            </>
                        ) : (
                            <>
                                <div className="icon-wand text-xl"></div>
                                تولید آی‌پی جدید
                            </>
                        )}
                    </span>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></div>
                </button>
                
                <p className="mt-6 text-[var(--text-muted)] text-sm max-w-md mx-auto leading-relaxed opacity-80">
                    نکته: این آی‌پی‌ها کاملاً تصادفی تولید می‌شوند. برای بهترین نتیجه در بازی، ممکن است نیاز باشد چندین بار امتحان کنید تا سروری با پینگ مناسب پیدا کنید.
                </p>
            </div>

            {/* Visual fake stats for "gamer" feel */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-8 p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <div className="text-center">
                    <div className="text-[var(--text-muted)] text-xs mb-1">وضعیت سرور</div>
                    <div className="text-green-400 text-sm font-mono">آنلاین</div>
                </div>
                <div className="text-center border-x border-slate-800">
                    <div className="text-[var(--text-muted)] text-xs mb-1">پروتکل</div>
                    <div className="text-blue-400 text-sm font-mono">IPv4</div>
                </div>
                <div className="text-center">
                    <div className="text-[var(--text-muted)] text-xs mb-1">منطقه</div>
                    <div className="text-purple-400 text-sm font-mono">جهانی</div>
                </div>
            </div>
        </div>
    );
}