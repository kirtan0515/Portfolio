"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-6 sm:py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <span className="text-xs sm:text-sm text-white/20">
          © {new Date().getFullYear()} Kirtan Patel
        </span>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/kirtan0515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-white/60 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kirtanpatel0515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-white/60 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kirtan.patel0515@gmail.com"
            className="text-xs text-white/20 hover:text-white/60 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
