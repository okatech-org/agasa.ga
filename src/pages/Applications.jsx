import { APPS, HERO_IMAGES } from "../data";
import { useInView } from "../components/Layout";
import { CheckCircle, Users, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function Applications() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                {/* Background Image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HERO_IMAGES.apps})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <p className="overline text-emerald-400">Écosystème numérique</p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
                        Nos{" "}
                        <span className="text-gradient">
                            Applications
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        4 applications interconnectées, un écosystème unifié. Chaque acteur de la
                        chaîne alimentaire dispose de son outil dédié, relié au hub central AGASA-Core.
                    </p>
                </div>
            </section>

            {/* Architecture overview */}
            <Section className="py-16 bg-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heading">
                            Architecture de l'Écosystème
                        </h2>
                        <p className="text-muted mt-3 max-w-2xl mx-auto">
                            AGASA-Core centralise toutes les données. Les 3 applications métier y accèdent
                            en temps réel pour garantir cohérence et traçabilité.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {APPS.map((app, i) => (
                            <a
                                href={`#app-${i}`}
                                key={i}
                                className={`neu-card p-5 rounded-xl text-center group hover:scale-[1.02] transition-transform ring-1 ring-transparent hover:ring-${app.color}-400/30`}
                            >
                                <div className={`icon-container icon-container-${app.color} mx-auto mb-3`}>
                                    <app.icon size={22} />
                                </div>
                                <h3 className="font-serif font-bold text-heading">{app.name}</h3>
                                <p className="text-xs text-muted mt-1">{app.users}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Detailed App Sections */}
            {APPS.map((app, i) => (
                <Section
                    key={i}
                    className={`py-20 ${i % 2 === 0 ? "bg-surface" : "bg-muted"}`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6" id={`app-${i}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Text */}
                            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                <div className={`badge badge-${app.color} mb-4`}>{app.badge}</div>
                                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heading mb-2">
                                    {app.name}
                                </h2>
                                <p className={`text-lg font-medium text-${app.color}-500 mb-4`}>
                                    {app.subtitle}
                                </p>
                                <p className="text-muted leading-relaxed mb-8">
                                    {app.longDesc}
                                </p>
                                <div className="flex items-center gap-3 mb-6 text-sm text-muted">
                                    <Users size={16} />
                                    <span>Destiné aux : <strong className="text-heading">{app.users}</strong></span>
                                </div>
                            </div>

                            {/* Image and Features */}
                            <div className={`space-y-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl relative">
                                    <img src={app.image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt={app.name} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                </div>
                                <div className="neu-card p-8 rounded-2xl">
                                    <h3 className="font-semibold text-heading text-lg mb-6 flex items-center gap-2">
                                        <div className={`icon-container icon-container-${app.color}`}>
                                            <app.icon size={18} />
                                        </div>
                                        Fonctionnalités clés
                                    </h3>
                                    <ul className="space-y-4">
                                        {app.features.map((f, fi) => (
                                            <li key={fi} className="flex items-start gap-3">
                                                <CheckCircle size={18} className="text-emerald flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted leading-relaxed">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* CTA */}
            <section className="hero-gradient py-16 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">
                        Prêt à rejoindre l'écosystème ?
                    </h2>
                    <p className="text-white/60 mb-8">
                        Que vous soyez opérateur économique, inspecteur ou citoyen,
                        une application AGASA est faite pour vous.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/services" className="btn-primary">
                            Découvrir les services <ArrowRight size={16} />
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
