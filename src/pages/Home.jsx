import {
    ArrowRight, ScanLine, ExternalLink, ChevronRight, CheckCircle,
    Shield, Users, Zap, Lock, Eye, TrendingUp, Target, Award,
    ClipboardCheck, Database, Globe, Wifi,
} from "lucide-react";
import { useInView } from "../components/Layout";
import {
    STATS, APPS, SERVICES, BENEFITS, NEWS,
    VISION_POINTS, DIGITALIZATION_STEPS, KEY_FIGURES, HERO_IMAGES
} from "../data";
import { Link } from "react-router-dom";

/* ── Section wrapper with observer ── */
function Section({ children, className = "", id }) {
    const [ref, visible] = useInView();
    return (
        <section
            ref={ref}
            id={id}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
        >
            {children}
        </section>
    );
}

/* ── Badge colors ── */
const TAG_COLORS = {
    Institutionnel: "badge-blue",
    Alerte: "badge-rose",
    Réglementation: "badge-amber",
};

export default function Home() {
    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section className="relative overflow-hidden">
                {/* Background Image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HERO_IMAGES.home})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Transformation Numérique 2026
                    </div>

                    {/* H1 */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl mb-6">
                        La Sécurité Alimentaire{" "}
                        <span className="text-gradient">
                            du Gabon
                        </span>
                        , Réinventée.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-10">
                        L'AGASA protège la santé des Gabonais de la fourche à la fourchette.
                        Découvrez nos services numériques, vérifiez un établissement ou
                        signalez un problème.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <Link to="/applications" className="btn-primary">
                            Découvrir l'Écosystème <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn-outline-dark">
                            <ScanLine size={18} /> Vérifier un Smiley
                        </Link>
                    </div>

                    {/* Stats band */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
                        {STATS.map((s, i) => (
                            <div key={i} className="flex items-center gap-3 p-5 hover:bg-white/5 transition-colors">
                                <div className="icon-container icon-container-emerald">
                                    <s.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-xl font-serif font-bold text-white">{s.value}</p>
                                    <p className="text-xs text-white/50">{s.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ VISION & MISSION ══════════ */}
            <Section className="py-20 bg-surface" id="vision">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="overline text-emerald">Notre engagement</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mt-2">
                            Protéger, Contrôler,{" "}
                            <span className="text-emerald">Innover</span>
                        </h2>
                        <p className="text-muted mt-4 max-w-2xl mx-auto">
                            L'AGASA est le garant de la sécurité sanitaire des aliments au Gabon.
                            Notre mission s'articule autour de trois piliers fondamentaux.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {VISION_POINTS.map((v, i) => (
                            <div key={i} className="neu-card p-0 rounded-2xl text-center flex flex-col group hover:scale-[1.02] transition-transform overflow-hidden">
                                <div className="w-full h-48 overflow-hidden relative">
                                    <img src={v.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={v.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                </div>
                                <div className="p-8 pt-0 flex flex-col items-center">
                                    <div className={`icon-container icon-container-emerald mb-5 -mt-6 relative z-10 bg-surface shadow-lg ring-4 ring-surface`}>
                                        <v.icon size={22} />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-heading mb-3">{v.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ══════════ APPS PREVIEW ══════════ */}
            <Section className="py-20 bg-muted" id="apps-preview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="overline text-amber-500">Écosystème numérique</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mt-2">
                            4 Applications,{" "}
                            <span className="text-emerald">1 Écosystème</span>
                        </h2>
                        <p className="text-muted mt-4 max-w-2xl mx-auto">
                            Chaque catégorie d'utilisateur dispose d'un point d'entrée unique vers le
                            système AGASA. Toutes les données transitent par AGASA-Admin.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {APPS.map((app, i) => (
                            <a
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={i}
                                className="neu-card p-0 rounded-2xl flex flex-col group hover:scale-[1.02] transition-transform overflow-hidden"
                            >
                                <div className="w-full h-40 flex-shrink-0 overflow-hidden relative">
                                    <img src={app.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={app.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className={`badge badge-${app.color} shadow-lg backdrop-blur-md bg-white/10 border-white/20 text-white`}>{app.badge}</div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 flex flex-col flex-1">
                                    <div className={`icon-container icon-container-${app.color} mb-4 -mt-6 relative z-10 bg-surface shadow-lg ring-4 ring-surface`}>
                                        <app.icon size={22} />
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-heading">{app.name}</h3>
                                    <p className={`text-sm font-medium text-${app.color}-500 mt-1`}>{app.subtitle}</p>
                                    <p className="text-sm text-muted mt-3 leading-relaxed flex-1">{app.desc}</p>
                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                                        <span className="text-xs text-muted flex items-center gap-1.5">
                                            <Users size={13} /> {app.users}
                                        </span>
                                        <span className={`text-sm font-medium text-${app.color}-500 flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                            Ouvrir <ExternalLink size={14} />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ══════════ DIGITALISATION TIMELINE ══════════ */}
            <Section className="py-20 bg-surface" id="digitalisation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="overline text-blue-400">Transformation digitale</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mt-2">
                            La Digitalisation de{" "}
                            <span className="text-emerald">l'AGASA</span>
                        </h2>
                        <p className="text-muted mt-4 max-w-2xl mx-auto">
                            Un programme ambitieux de modernisation sur 4 ans pour digitaliser
                            l'ensemble des processus de contrôle et de certification.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {DIGITALIZATION_STEPS.map((step, i) => (
                            <div
                                key={i}
                                className={`neu-card p-6 rounded-2xl relative ${step.status === "current"
                                    ? "ring-2 ring-emerald-400/50"
                                    : ""
                                    }`}
                            >
                                {step.status === "current" && (
                                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-emerald-400 text-white text-xs font-bold">
                                        En cours
                                    </div>
                                )}
                                <div className="text-2xl font-serif font-bold text-emerald mb-3">{step.year}</div>
                                <div className={`icon-container ${step.status === "future" ? "icon-container-slate" : "icon-container-emerald"} mb-4`}>
                                    <step.icon size={20} />
                                </div>
                                <h3 className="font-semibold text-heading mb-2">{step.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                                {step.status === "complete" && (
                                    <div className="flex items-center gap-1.5 mt-4 text-emerald text-xs font-semibold">
                                        <CheckCircle size={14} /> Terminé
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ══════════ KEY FIGURES ══════════ */}
            <Section className="py-16 hero-gradient" id="chiffres">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <p className="overline text-emerald-400">L'AGASA en chiffres</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
                            Des ambitions à la mesure du{" "}
                            <span className="text-emerald-400">Gabon</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {KEY_FIGURES.map((kf, i) => (
                            <div key={i} className="text-center group">
                                <div className="icon-container icon-container-emerald mx-auto mb-3 group-hover:scale-110 transition-transform">
                                    <kf.icon size={20} />
                                </div>
                                <p className="text-2xl font-serif font-bold text-white">{kf.value}</p>
                                <p className="text-xs text-white/50 mt-1">{kf.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ══════════ SERVICES PREVIEW ══════════ */}
            <Section className="py-20 bg-muted" id="services-preview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="overline text-violet-400">Nos services</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mt-2">
                            Services de l'
                            <span className="text-emerald">AGASA</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SERVICES.slice(0, 8).map((s, i) => (
                            <Link
                                to="/services"
                                key={i}
                                className="neu-card p-5 rounded-xl flex items-start gap-4 group hover:scale-[1.02] transition-transform"
                            >
                                <div className={`icon-container icon-container-${s.color} flex-shrink-0`}>
                                    <s.icon size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-heading text-sm flex items-center gap-2">
                                        {s.title}
                                        <ChevronRight size={14} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-xs text-muted mt-1 leading-relaxed">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/services" className="btn-primary text-sm">
                            Voir tous les services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* ══════════ BENEFITS ══════════ */}
            <Section className="py-16 bg-surface border-t border-b border-border" id="benefits">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="icon-container icon-container-emerald flex-shrink-0">
                                    <b.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-heading">{b.title}</h3>
                                    <p className="text-sm text-muted mt-1 leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ══════════ NEWS ══════════ */}
            <Section className="py-20 bg-surface" id="news">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-14">
                        <p className="overline text-amber-500">Dernières nouvelles</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mt-2">
                            Actualités & Alertes
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {NEWS.slice(0, 3).map((n, i) => (
                            <Link
                                to="/actualites"
                                key={i}
                                className="neu-card p-0 rounded-2xl flex flex-col group hover:scale-[1.02] transition-transform overflow-hidden"
                            >
                                <div className="w-full h-48 flex-shrink-0 overflow-hidden relative">
                                    <img src={n.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={n.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                    <div className="absolute top-4 right-4">
                                        <span className={`${TAG_COLORS[n.tag] || "badge-blue"} text-xs px-2.5 py-1 rounded-full font-semibold shadow-lg backdrop-blur-md bg-white/10 border border-white/20 text-white`}>
                                            {n.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <span className="text-xs text-muted mb-3">{n.date}</span>
                                    <h3 className="font-semibold text-heading leading-snug mb-3">{n.title}</h3>
                                    <p className="text-sm text-muted leading-relaxed flex-1">{n.excerpt}</p>
                                    <span className="text-sm text-emerald font-medium mt-4 flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                        Lire la suite <ChevronRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/actualites" className="btn-primary text-sm">
                            Voir toutes les actualités <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </Section>

            {/* ══════════ CTA ══════════ */}
            <section className="hero-gradient py-20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                        Vous êtes opérateur économique ?
                    </h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto">
                        Accédez dès maintenant au portail AGASA-Pro pour gérer votre agrément
                        sanitaire, vos importations et vos analyses en ligne.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/applications" className="btn-primary">
                            Accéder à AGASA-Pro <ExternalLink size={16} />
                        </Link>
                        <Link to="/applications" className="btn-outline-dark">
                            Télécharger AGASA-Citoyen
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
