function IpCard({ label, ip, delay }) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        if (!ip) return;
        navigator.clipboard.writeText(ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div 
            className="glass-panel rounded-xl p-6 relative group transition-all duration-300 hover:border-[var(--primary-color)] w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-[var(--text-muted)] text-sm font-medium">{label}</span>
                <div className={`icon-signal ${ip ? 'text-[var(--primary-color)]' : 'text-slate-600'} text-sm`}></div>
            </div>
            
            <div className="flex items-center justify-between gap-4">
                <div className="font-mono text-2xl md:text-3xl tracking-widest text-white font-bold truncate">
                    {ip || '---.---.---.---'}
                </div>
                
                <button 
                    onClick={handleCopy}
                    className="p-3 rounded-lg bg-slate-700/50 hover:bg-[var(--primary-color)] hover:text-white text-[var(--text-muted)] transition-colors active:scale-95"
                    title="کپی کردن"
                >
                    {copied ? (
                        <div className="icon-check text-xl"></div>
                    ) : (
                        <div className="icon-copy text-xl"></div>
                    )}
                </button>
            </div>
            
            {/* Decoration line */}
            <div className="absolute bottom-0 left-0 h-1 bg-[var(--primary-color)] transition-all duration-500 rounded-b-xl"
                 style={{ width: ip ? '100%' : '0%', opacity: 0.5 }}>
            </div>
        </div>
    );
}