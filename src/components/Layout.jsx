import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Shield, Menu, X, Moon, Sun, ExternalLink, ChevronRight,
    Phone, Mail, Clock, Globe, ArrowRight,
} from "lucide-react";
import ContactModal from "./ContactModal";

/* ── Intersection Observer hook ── */
export function useInView(opts = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) { setVisible(true); return; }
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVisible(true); io.disconnect(); }
        }, { threshold: 0.15, ...opts });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return [ref, visible];
}

/* ── Scroll to top on route change ── */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

/* ── NAV LINKS ── */
const NAV_LINKS = [
    { label: "Accueil", to: "/" },
    { label: "Applications", to: "/applications" },
    { label: "Services", to: "/services" },
    { label: "Actualités", to: "/actualites" },
    { label: "Réglementation", to: "/reglementation" },
];

/* ══════════════════════════════════════════════
   LAYOUT — Shared by all pages
   ══════════════════════════════════════════════ */
export default function Layout({ children }) {
    const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme:dark)").matches);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />

            {/* ── TOPBAR ── */}
            <div className="topbar text-xs py-2 px-4 hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6 text-muted">
                        <span className="flex items-center gap-1.5"><Mail size={13} /> contact@agasa.ga</span>
                        <span className="flex items-center gap-1.5"><Clock size={13} /> Lun — Ven : 07h30 — 16h00</span>
                        <span className="flex items-center gap-1.5"><Phone size={13} /> +241 01 76 XX XX</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted">
                        <span className="flex items-center gap-1.5"><Globe size={13} /> FR</span>
                        <button
                            onClick={() => setContactOpen(true)}
                            className="px-3 py-1 rounded-full border border-current text-xs hover:text-emerald transition-colors"
                        >
                            Nous contacter
                        </button>
                    </div>
                </div>
            </div>

            {/* ── HEADER ── */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "glass shadow-md py-2"
                        : "bg-surface/80 backdrop-blur-sm py-3"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg group-hover:shadow-emerald-400/30 transition-shadow">
                            <Shield size={22} className="text-white" strokeWidth={2.2} />
                        </div>
                        <div className="leading-tight">
                            <span className="text-lg font-bold tracking-tight text-heading">AGASA</span>
                            <span className="block text-[10px] tracking-[0.15em] uppercase text-muted font-semibold">
                                Sécurité Alimentaire
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${location.pathname === l.to
                                        ? "text-emerald bg-emerald-400/10"
                                        : "text-muted hover:text-heading hover:bg-white/5"
                                    }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setContactOpen(true)}
                            className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${contactOpen
                                    ? "text-emerald bg-emerald-400/10"
                                    : "text-muted hover:text-heading hover:bg-white/5"
                                }`}
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setDark(!dark)}
                            className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors text-muted"
                            aria-label="Basculer thème"
                        >
                            {dark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <Link to="/applications" className="btn-primary text-sm hidden sm:flex">
                            Accéder aux services <ExternalLink size={14} />
                        </Link>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors text-heading"
                            aria-label="Menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile nav */}
                {mobileOpen && (
                    <div className="md:hidden glass border-t border-white/10 px-4 py-4 space-y-1">
                        {NAV_LINKS.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === l.to
                                        ? "text-emerald bg-emerald-400/10"
                                        : "text-muted hover:text-heading hover:bg-white/5"
                                    }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => { setContactOpen(true); setMobileOpen(false); }}
                            className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-muted hover:text-heading hover:bg-white/5 transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                )}
            </header>

            {/* ── MAIN CONTENT ── */}
            <main className="flex-1">
                {children}
            </main>

            {/* ── FOOTER ── */}
            <footer className="hero-gradient text-white/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                                    <Shield size={20} className="text-white" />
                                </div>
                                <span className="text-lg font-bold text-white">AGASA</span>
                            </div>
                            <p className="text-sm leading-relaxed text-white/60">
                                Agence Gabonaise de Sécurité Alimentaire — Protéger la santé des
                                Gabonais de la fourche à la fourchette.
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                                Navigation
                            </h4>
                            <ul className="space-y-2">
                                {NAV_LINKS.map((l) => (
                                    <li key={l.to}>
                                        <Link to={l.to} className="text-sm text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                            <ChevronRight size={12} /> {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                                Contact
                            </h4>
                            <ul className="space-y-2 text-sm text-white/60">
                                <li className="flex items-center gap-2"><Mail size={14} /> contact@agasa.ga</li>
                                <li className="flex items-center gap-2"><Phone size={14} /> +241 01 76 XX XX</li>
                                <li className="flex items-center gap-2"><Clock size={14} /> Lun-Ven 07h30-16h00</li>
                            </ul>
                        </div>

                        {/* Applications */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">
                                Applications
                            </h4>
                            <ul className="space-y-2">
                                {["AGASA-Core", "AGASA-Pro", "AGASA-Inspect", "AGASA-Citoyen"].map((app) => (
                                    <li key={app}>
                                        <Link to="/applications" className="text-sm text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                                            <ChevronRight size={12} /> {app}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/40">
                            © {new Date().getFullYear()} AGASA — Agence Gabonaise de Sécurité Alimentaire. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-white/40">
                            <span>Mentions légales</span>
                            <span>Politique de confidentialité</span>
                            <span>Accessibilité</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ── CONTACT MODAL ── */}
            <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
        </div>
    );
}
