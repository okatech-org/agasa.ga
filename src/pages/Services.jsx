import { SERVICES, BENEFITS, HERO_IMAGES } from "../data";
import { useInView } from "../components/Layout";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Section({ children, className = "" }) {
    const [ref, visible] = useInView();
    return (
        <section
            ref={ref}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
        >
            {children}
        </section>
    );
}

export default function Services() {
    const [expandedIdx, setExpandedIdx] = useState(null);

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                {/* Background Image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HERO_IMAGES.services})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <p className="overline text-violet-400">Ce que nous faisons</p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
                        Nos{" "}
                        <span className="text-gradient">
                            Services
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        De l'agrément sanitaire à la vérification Smiley, l'AGASA met à disposition
                        un ensemble complet de services numériques pour garantir la sécurité alimentaire.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <Section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="space-y-6">
                        {SERVICES.map((s, i) => {
                            const isExpanded = expandedIdx === i;
                            return (
                                <div
                                    key={i}
                                    className={`neu-card rounded-2xl overflow-hidden transition-all ${isExpanded ? "ring-2 ring-emerald-400/30" : ""
                                        }`}
                                >
                                    {/* Header (always visible) */}
                                    <button
                                        onClick={() => setExpandedIdx(isExpanded ? null : i)}
                                        className="w-full flex items-center gap-5 p-6 sm:p-8 text-left hover:bg-white/3 transition-colors"
                                    >
                                        <div className={`icon-container icon-container-${s.color} flex-shrink-0`}>
                                            <s.icon size={22} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif text-xl font-bold text-heading">{s.title}</h3>
                                            <p className="text-sm text-muted mt-1">{s.desc}</p>
                                        </div>
                                        <ChevronRight
                                            size={20}
                                            className={`text-muted flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Expandable detail */}
                                    {isExpanded && (
                                        <div className="animate-fadeInUp border-t border-white/10">
                                            <div className="w-full h-48 sm:h-64 overflow-hidden relative">
                                                <img src={s.image} className="w-full h-full object-cover" alt={s.title} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                            </div>
                                            <div className="px-6 sm:px-8 pb-8 pt-6">
                                                <p className="text-muted leading-relaxed mb-6">{s.longDesc}</p>

                                                {s.steps && s.steps.length > 0 && (
                                                    <div>
                                                        <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-4">
                                                            Étapes du processus
                                                        </h4>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                            {s.steps.map((step, si) => (
                                                                <div
                                                                    key={si}
                                                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                                                                >
                                                                    <div className="w-7 h-7 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                                                                        <span className="text-xs font-bold text-emerald">{si + 1}</span>
                                                                    </div>
                                                                    <span className="text-sm text-muted leading-relaxed">{step}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Benefits */}
            <Section className="py-16 bg-muted border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heading">
                            Nos garanties
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="neu-card p-6 rounded-xl flex items-start gap-4">
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

            {/* CTA */}
            <section className="hero-gradient py-16 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">
                        Besoin d'un service ?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Connectez-vous à AGASA-Pro pour accéder à l'ensemble de nos services
                        numériques ou contactez-nous directement.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/applications" className="btn-primary">
                            Accéder à AGASA-Pro <ArrowRight size={16} />
                        </Link>
                        <Link to="/" className="btn-outline-dark">
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
