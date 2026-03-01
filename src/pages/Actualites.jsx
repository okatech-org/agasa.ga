import { NEWS, HERO_IMAGES } from "../data";
import { useInView } from "../components/Layout";
import { useState } from "react";
import { ChevronRight, Calendar, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TAG_COLORS = {
    Institutionnel: "badge-blue",
    Alerte: "badge-rose",
    Réglementation: "badge-amber",
};

const FILTERS = ["Toutes", "Institutionnel", "Alerte", "Réglementation"];

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

export default function Actualites() {
    const [filter, setFilter] = useState("Toutes");

    const filtered = filter === "Toutes"
        ? NEWS
        : NEWS.filter((n) => n.tag === filter);

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                {/* Background Image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HERO_IMAGES.actualites})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <p className="overline text-amber-400">Restez informé</p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
                        Actualités &{" "}
                        <span className="text-gradient-warm">
                            Alertes
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        Suivez les dernières nouvelles de l'AGASA : rappels de produits, nouvelles
                        réglementations, programmes de formation et actions institutionnelles.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <Section className="py-6 bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${filter === f
                                    ? "bg-emerald-400/10 text-emerald border border-emerald-400/20"
                                    : "text-muted hover:text-heading hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                {f}
                                {f !== "Toutes" && (
                                    <span className="ml-1.5 text-xs opacity-60">
                                        ({NEWS.filter((n) => n.tag === f).length})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* News Grid */}
            <Section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-muted text-lg">Aucune actualité dans cette catégorie.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((n, i) => (
                                <article
                                    key={i}
                                    className="neu-card p-0 rounded-2xl flex flex-col group hover:scale-[1.02] transition-transform overflow-hidden"
                                >
                                    {/* Image Header */}
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
                                        {/* Date */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="flex items-center gap-1.5 text-xs text-muted">
                                                <Calendar size={12} /> {n.date}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif text-lg font-bold text-heading leading-snug mb-3">
                                            {n.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-muted leading-relaxed flex-1">
                                            {n.excerpt}
                                        </p>

                                        {/* Read more */}
                                        <span className="text-sm text-emerald font-medium mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer">
                                            Lire l'article complet <ChevronRight size={14} />
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </Section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-muted">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heading mb-3">
                        Restez informé
                    </h2>
                    <p className="text-muted mb-8">
                        Recevez les alertes sanitaires et les actualités de l'AGASA
                        directement dans votre boîte mail.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="votre@email.com"
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-heading placeholder:text-muted/50 text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                        />
                        <button type="submit" className="btn-primary text-sm px-6">
                            S'abonner
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
