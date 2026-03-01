import { useEffect, useRef } from "react";
import {
    X, Mail, Phone, Clock, MapPin, Globe,
    ExternalLink, MessageSquare, Send,
} from "lucide-react";

export default function ContactModal({ open, onClose }) {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);

    /* Close on Escape */
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            ref={overlayRef}
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
            <div
                ref={modalRef}
                className="glass w-full max-w-2xl rounded-2xl shadow-2xl animate-fadeInUp"
                role="dialog"
                aria-modal="true"
                aria-label="Contact AGASA"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div>
                        <h2 className="font-serif text-2xl font-bold text-heading">
                            Contactez l'AGASA
                        </h2>
                        <p className="text-sm text-muted mt-1">
                            Nous sommes à votre écoute
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors text-muted"
                        aria-label="Fermer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-5 py-4 space-y-4">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <ContactCard
                            icon={Phone}
                            color="emerald"
                            label="Téléphone"
                            value="+241 01 76 XX XX"
                            sub="Lun–Ven, 07h30–16h00"
                        />
                        <ContactCard
                            icon={Mail}
                            color="blue"
                            label="Email"
                            value="contact@agasa.ga"
                            sub="Réponse sous 48h"
                        />
                        <ContactCard
                            icon={MapPin}
                            color="amber"
                            label="Adresse"
                            value="Quartier Glass, Libreville"
                            sub="Siège de l'AGASA"
                        />
                        <ContactCard
                            icon={Clock}
                            color="violet"
                            label="Horaires"
                            value="07h30 — 16h00"
                            sub="Du lundi au vendredi"
                        />
                    </div>

                    {/* Separator */}
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10"></div>
                        <span className="text-xs text-muted uppercase tracking-wider font-semibold">
                            Ou envoyez-nous un message
                        </span>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 block">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-heading placeholder:text-muted/50 text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 block">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="votre@email.com"
                                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-heading placeholder:text-muted/50 text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 block">
                                Objet
                            </label>
                            <select className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-heading text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all appearance-none">
                                <option value="" className="bg-surface">Sélectionner un objet</option>
                                <option value="agrement" className="bg-surface">Agrément sanitaire</option>
                                <option value="import" className="bg-surface">Importation alimentaire</option>
                                <option value="analyse" className="bg-surface">Analyses de laboratoire</option>
                                <option value="signalement" className="bg-surface">Signalement citoyen</option>
                                <option value="autre" className="bg-surface">Autre demande</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 block">
                                Message
                            </label>
                            <textarea
                                rows="2"
                                placeholder="Décrivez votre demande..."
                                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-heading placeholder:text-muted/50 text-sm focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full justify-center text-sm">
                            <Send size={16} /> Envoyer le message
                        </button>
                    </form>

                    {/* Social / extra links */}
                    <div className="flex items-center justify-center gap-6">
                        <a href="#" className="text-xs text-muted hover:text-emerald transition-colors flex items-center gap-1.5">
                            <Globe size={14} /> agasa.ga
                        </a>
                        <a href="#" className="text-xs text-muted hover:text-emerald transition-colors flex items-center gap-1.5">
                            <MessageSquare size={14} /> WhatsApp
                        </a>
                        <a href="#" className="text-xs text-muted hover:text-emerald transition-colors flex items-center gap-1.5">
                            <ExternalLink size={14} /> Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Small Contact Card ── */
function ContactCard({ icon: Icon, color, label, value, sub }) {
    return (
        <div className="neu-card p-3 rounded-xl flex items-start gap-3">
            <div className={`icon-container icon-container-${color}`}>
                <Icon size={18} />
            </div>
            <div className="min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider font-semibold">{label}</p>
                <p className="text-sm font-semibold text-heading mt-0.5">{value}</p>
                <p className="text-xs text-muted mt-0.5">{sub}</p>
            </div>
        </div>
    );
}
