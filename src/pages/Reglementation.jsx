import { REGLEMENTATIONS, HERO_IMAGES } from "../data";
import { useInView } from "../components/Layout";
import { useState } from "react";
import { ExternalLink, Download, Search, Filter, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TYPES = ["Tous", "Ordonnance", "Loi", "Décret", "Arrêté", "Convention"];

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

export default function Reglementation() {
    const [typeFilter, setTypeFilter] = useState("Tous");
    const [search, setSearch] = useState("");

    const filtered = REGLEMENTATIONS.filter((r) => {
        const matchType = typeFilter === "Tous" || r.type === typeFilter;
        const matchSearch =
            search === "" ||
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.ref.toLowerCase().includes(search.toLowerCase());
        return matchType && matchSearch;
    });

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                {/* Background Image & Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HERO_IMAGES.reglementation})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <p className="overline text-blue-400">Cadre juridique</p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
                        Réglementation{" "}
                        <span className="text-gradient">
                            Sanitaire
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        L'ensemble des textes juridiques encadrant la sécurité alimentaire
                        au Gabon : ordonnances, lois, décrets, arrêtés et conventions internationales.
                    </p>
                </div>
            </section>

            {/* Filters & Search */}
            <Section className="py-6 bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                            <input
                                type="text"
                                placeholder="Rechercher un texte..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-heading placeholder:text-muted/50 text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                            />
                        </div>

                        {/* Type filter */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1">
                            {TYPES.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTypeFilter(t)}
                                    className={`px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${typeFilter === t
                                        ? "bg-emerald-400/10 text-emerald border border-emerald-400/20"
                                        : "text-muted hover:text-heading hover:bg-white/5 border border-transparent"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Regulations Grid */}
            <Section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-muted text-lg">Aucun texte ne correspond à votre recherche.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            {filtered.map((r, i) => (
                                <div
                                    key={i}
                                    className="neu-card p-0 rounded-2xl flex flex-col group hover:scale-[1.02] transition-transform overflow-hidden"
                                >
                                    {/* Image Header */}
                                    <div className="w-full h-40 flex-shrink-0 overflow-hidden relative">
                                        <img src={r.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={r.title} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                                        <div className="absolute top-4 right-4">
                                            <span className={`badge badge-${r.color} shadow-lg backdrop-blur-md bg-white/10 border border-white/20 text-white`}>
                                                {r.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <span className="text-xs text-muted font-medium"><Calendar size={12} className="inline mr-1 -mt-0.5" />{r.date}</span>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald font-semibold">
                                                {r.status}
                                            </span>
                                        </div>
                                        <h3 className="font-serif font-bold text-heading text-lg mb-2 leading-tight">{r.ref}</h3>
                                        <p className="text-sm text-muted leading-relaxed flex-1">{r.title}</p>

                                        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/10">
                                            <button className="flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-emerald-400/10 hover:border-emerald-400/20 transition-colors text-muted hover:text-emerald text-sm font-medium">
                                                <Download size={14} /> Télécharger
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Section>

            {/* Note */}
            <section className="py-12 bg-muted">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <div className="neu-card p-8 rounded-2xl">
                        <h3 className="font-serif text-xl font-bold text-heading mb-3">
                            Note importante
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                            Les textes présentés ici ont une valeur informative. Seuls les textes publiés
                            au Journal Officiel de la République Gabonaise font foi. Pour toute question
                            d'interprétation, contactez le service juridique de l'AGASA.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
