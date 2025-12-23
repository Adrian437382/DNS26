function Header() {
    return (
        <header className="py-8 px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
                <div className="icon-gamepad-2 text-5xl text-[var(--primary-color)]"></div>
                <h1 className="text-5xl md:text-6xl text-white tracking-wider mt-2">
                    Gaming <span className="text-[var(--primary-color)] text-glow">DNS</span>
                </h1>
            </div>
            <p className="text-[var(--text-muted)] text-base md:text-lg max-w-lg mx-auto font-light">
                ابزار تولید دی‌ان‌اس رندوم برای بهبود تجربه گیمینگ و کاهش پینگ
            </p>
        </header>
    );
}