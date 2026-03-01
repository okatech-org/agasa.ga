import {
  Shield, Search, FileCheck, AlertTriangle, Users, Building2,
  MapPin, Phone, Mail, Smartphone, Monitor, Scale, Eye,
  Zap, Lock, BookOpen, TrendingUp, Heart, Bug, FlaskConical,
  Truck, ScanLine, CheckCircle, Clock, Globe, Target, Award,
  Landmark, FileText, Gavel, ScrollText, Megaphone, Database,
  BarChart3, Wifi, WifiOff, Camera, MapPinned, ClipboardCheck,
  Star, ThumbsUp, ShieldCheck, Leaf, Microscope, Factory,
  CircleDot, ArrowUpRight, Calendar, Tag, User, Briefcase
} from "lucide-react";

import heroHomeImg from "./assets/images/hero_home.png";
import heroAppsImg from "./assets/images/hero_apps.png";
import heroServicesImg from "./assets/images/hero_services.png";
import heroActualitesImg from "./assets/images/hero_actualites.png";
import heroReglementationImg from "./assets/images/hero_reglementation.png";

import visionMissionImg from "./assets/images/vision_mission.png";
import vision2030Img from "./assets/images/vision_2030.png";
import visionExcellenceImg from "./assets/images/vision_excellence.png";

import appCoreImg from "./assets/images/app_core.png";
import appProImg from "./assets/images/app_pro.png";
import appInspectImg from "./assets/images/app_inspect.png";
import appCitoyenImg from "./assets/images/app_citoyen.png";

import serviceAgrementImg from "./assets/images/service_agrement.png";
import serviceImportationImg from "./assets/images/service_importation.png";
import serviceAnalysesImg from "./assets/images/service_analyses.png";
import servicePhytoImg from "./assets/images/service_phyto.png";
import serviceSmileyImg from "./assets/images/service_smiley.png";
import serviceAlertesImg from "./assets/images/service_alertes.png";
import serviceGuidesImg from "./assets/images/service_guides.png";
import serviceReglementationImg from "./assets/images/service_reglementation.png";

import newsLancementImg from "./assets/images/news_lancement.png";
import newsRappelLaitImg from "./assets/images/news_rappel_lait.png";
import newsBaremeImg from "./assets/images/news_bareme.png";
import newsFormationImg from "./assets/images/news_formation.png";
import newsFarineImg from "./assets/images/news_farine.png";
import newsDecretImg from "./assets/images/news_decret.png";

import regOrd5078Img from "./assets/images/reg_ord_50_78.png";
import regLoi040Img from "./assets/images/reg_loi_040.png";
import regDecret163Img from "./assets/images/reg_decret_163.png";
import regArrete426Img from "./assets/images/reg_arrete_426.png";
import regLoi016Img from "./assets/images/reg_loi_016.png";
import regDecret543Img from "./assets/images/reg_decret_543.png";
import regArrete312Img from "./assets/images/reg_arrete_312.png";
import regMalaboImg from "./assets/images/reg_malabo.png";

export const HERO_IMAGES = {
  home: heroHomeImg,
  apps: heroAppsImg,
  services: heroServicesImg,
  actualites: heroActualitesImg,
  reglementation: heroReglementationImg,
};

/* ══════════════════════════════════════
   STATS (Homepage hero)
   ══════════════════════════════════════ */
export const STATS = [
  { value: "9", label: "Provinces couvertes", icon: MapPin },
  { value: "7 Mds", label: "FCFA de revenus projetés", icon: TrendingUp },
  { value: "4", label: "Applications intégrées", icon: Smartphone },
  { value: "100%", label: "Traçabilité numérique", icon: Shield },
];

/* ══════════════════════════════════════
   APPS
   ══════════════════════════════════════ */
export const APPS = [
  {
    name: "AGASA-Core",
    subtitle: "Plateforme Interne Unifiée",
    desc: "ERP, LIMS, BI et Alertes — le hub central de données de l'écosystème AGASA pour les agents du siège et des 9 provinces.",
    longDesc: "AGASA-Core est le système nerveux de l'écosystème numérique de l'AGASA. Il centralise toutes les données et processus : gestion des agréments, suivi des inspections, résultats de laboratoire (LIMS), intelligence d'affaires (BI) et système d'alertes sanitaires. Accessible depuis n'importe quelle province, il garantit une coordination en temps réel.",
    icon: Monitor,
    image: appCoreImg,
    color: "blue",
    users: "Agents AGASA",
    badge: "Hub Central",
    features: [
      "Tableau de bord BI temps réel avec indicateurs clés",
      "Gestion complète du cycle d'agrément sanitaire",
      "LIMS intégré pour le suivi des analyses de laboratoire",
      "Système d'alertes sanitaires multi-canal",
      "Gestion des inspections et affectation des équipes",
      "Reporting et export de données pour le CTRI",
    ],
  },
  {
    name: "AGASA-Pro",
    subtitle: "Portail des Opérateurs Économiques",
    desc: "Agrément sanitaire, guichet unique d'importation, police phytosanitaire, analyses — tout en un portail sécurisé.",
    longDesc: "AGASA-Pro est le guichet unique numérique pour tous les opérateurs économiques du Gabon. Importateurs, restaurateurs, transformateurs et distributeurs peuvent gérer l'intégralité de leurs démarches administratives en ligne : demande d'agrément, déclaration d'importation, suivi d'analyses et paiement des redevances.",
    icon: Building2,
    image: appProImg,
    color: "emerald",
    users: "Opérateurs économiques",
    badge: "Générateur de revenus",
    features: [
      "Demande d'agrément sanitaire 100% en ligne",
      "Guichet unique d'importation connecté à SYDONIA",
      "Paiement des redevances par mobile money",
      "Suivi en temps réel de chaque demande",
      "Notifications par SMS et email",
      "Historique complet des certifications",
    ],
  },
  {
    name: "AGASA-Inspect",
    subtitle: "Application Mobile Terrain",
    desc: "Checklists normalisées, PV électroniques, géolocalisation GPS, capture photo et mode hors-ligne pour les inspecteurs.",
    longDesc: "AGASA-Inspect équipe chaque inspecteur terrain d'un outil mobile puissant. Grilles de contrôle normalisées (HACCP, hygiène), procès-verbaux électroniques, capture photo géolocalisée et surtout un mode hors-ligne complet pour les zones sans couverture réseau. Les données se synchronisent automatiquement dès la connexion retrouvée.",
    icon: Search,
    image: appInspectImg,
    color: "amber",
    users: "Inspecteurs DICSP",
    badge: "Mode hors-ligne",
    features: [
      "4 grilles de contrôle normalisées (restaurants, marchés, usines, importation)",
      "PV électroniques avec signature numérique",
      "Capture photo avec géolocalisation GPS",
      "Mode hors-ligne complet avec synchronisation automatique",
      "Calcul automatique du score Smiley",
      "Historique des inspections par établissement",
    ],
  },
  {
    name: "AGASA-Citoyen",
    subtitle: "Application Grand Public",
    desc: "Scannez le QR Smiley, signalez un problème, consultez la carte des établissements agréés et recevez les alertes.",
    longDesc: "AGASA-Citoyen place le pouvoir entre les mains des Gabonais. En scannant le QR code Smiley affiché dans chaque établissement, les citoyens accèdent instantanément à la note de conformité sanitaire. Ils peuvent signaler un problème en 3 taps, consulter la carte des établissements agréés et recevoir les alertes de rappels produits.",
    icon: Heart,
    image: appCitoyenImg,
    color: "rose",
    users: "Citoyens gabonais",
    badge: "Gratuit & léger",
    features: [
      "Scanner QR Smiley en un tap",
      "Signalement citoyen en 3 interactions maximum",
      "Carte interactive des établissements agréés",
      "Alertes de rappels produits en temps réel",
      "Consultation de l'historique sanitaire",
      "Application légère < 20 Mo",
    ],
  },
];

/* ══════════════════════════════════════
   SERVICES
   ══════════════════════════════════════ */
export const SERVICES = [
  {
    icon: FileCheck,
    image: serviceAgrementImg,
    title: "Agrément Sanitaire",
    desc: "Demande et renouvellement 100% en ligne avec suivi en temps réel",
    color: "blue",
    longDesc: "L'agrément sanitaire est obligatoire pour tout établissement manipulant des denrées alimentaires au Gabon. Notre plateforme numérique permet de soumettre votre demande, télécharger les documents requis, suivre l'avancement et recevoir votre certificat électronique — le tout sans déplacement.",
    steps: ["Créer un compte AGASA-Pro", "Remplir le formulaire de demande", "Joindre les documents requis", "Payer la redevance en ligne", "Recevoir la visite d'inspection", "Obtenir l'agrément électronique"],
  },
  {
    icon: Truck,
    image: serviceImportationImg,
    title: "Importation Alimentaire",
    desc: "Guichet unique numérique interopérable avec SYDONIA Douanes",
    color: "emerald",
    longDesc: "Tout importateur de denrées alimentaires doit obtenir une autorisation sanitaire préalable. Notre guichet unique numérique est interconnecté avec le système SYDONIA des Douanes gabonaises, permettant un traitement fluide et traçable de chaque déclaration d'importation.",
    steps: ["Déposer la déclaration d'importation", "Joindre les certificats d'origine", "Validation automatique SYDONIA", "Inspection à l'arrivée", "Libération de la marchandise", "Archivage numérique"],
  },
  {
    icon: FlaskConical,
    image: serviceAnalysesImg,
    title: "Analyses de Laboratoire",
    desc: "Commande en ligne et résultats certifiés du LAA",
    color: "violet",
    longDesc: "Le Laboratoire d'Analyses Alimentaires (LAA) de l'AGASA réalise des analyses microbiologiques, physico-chimiques et de recherche de contaminants. Commandez vos analyses en ligne, suivez l'avancement et téléchargez vos résultats certifiés directement depuis AGASA-Pro.",
    steps: ["Commander l'analyse en ligne", "Déposer l'échantillon au LAA", "Suivi en temps réel de l'analyse", "Notification des résultats", "Téléchargement du rapport certifié", "Archivage dans votre espace"],
  },
  {
    icon: Bug,
    image: servicePhytoImg,
    title: "Police Phytosanitaire",
    desc: "Homologation et contrôle des intrants agricoles",
    color: "amber",
    longDesc: "La police phytosanitaire de l'AGASA contrôle l'importation, la fabrication et la mise en marché des intrants agricoles (pesticides, engrais, semences). Le processus d'homologation est désormais dématérialisé pour garantir transparence et rapidité.",
    steps: ["Soumettre la demande d'homologation", "Fournir les données toxicologiques", "Analyse par le comité technique", "Essais terrain si requis", "Décision d'homologation", "Publication au registre officiel"],
  },
  {
    icon: ScanLine,
    image: serviceSmileyImg,
    title: "Vérification Smiley",
    desc: "Scannez le QR code de tout établissement pour vérifier sa conformité",
    color: "cyan",
    longDesc: "Chaque établissement inspecté par l'AGASA reçoit un QR code Smiley reflétant son niveau de conformité sanitaire. Les citoyens peuvent scanner ce code avec l'application AGASA-Citoyen ou directement depuis notre site pour consulter la note et l'historique de l'établissement.",
    steps: ["Scanner le QR code affiché", "Consulter la note Smiley", "Voir l'historique des inspections", "Signaler un problème si nécessaire"],
  },
  {
    icon: AlertTriangle,
    image: serviceAlertesImg,
    title: "Alertes Sanitaires",
    desc: "Notifications de rappels produits et alertes en temps réel",
    color: "rose",
    longDesc: "Le système d'alertes sanitaires de l'AGASA diffuse en temps réel les rappels de produits, les alertes de contamination et les avis de non-conformité. Les notifications sont envoyées par SMS, email et push notification via AGASA-Citoyen.",
    steps: ["Détection de l'anomalie", "Analyse de risque par l'AGASA", "Émission de l'alerte sanitaire", "Diffusion multi-canal", "Suivi des rappels", "Clôture de l'alerte"],
  },
  {
    icon: BookOpen,
    image: serviceGuidesImg,
    title: "Guides & Formations",
    desc: "Bonnes pratiques HACCP, manioc, poissonnerie, alimentation de rue",
    color: "teal",
    longDesc: "L'AGASA met à disposition des guides pratiques et des formations en ligne pour accompagner les opérateurs dans l'amélioration de leurs pratiques d'hygiène. Contenus spécialement adaptés aux réalités du terrain gabonais : transformation du manioc, restauration de rue, poissonnerie.",
    steps: ["Consulter le catalogue de formations", "S'inscrire en ligne", "Suivre le module à votre rythme", "Passer l'évaluation", "Obtenir votre attestation", "Appliquer les bonnes pratiques"],
  },
  {
    icon: Scale,
    image: serviceReglementationImg,
    title: "Réglementation",
    desc: "Textes officiels : Ordonnance 50/78, Loi 040/2018, Arrêté 426",
    color: "slate",
    longDesc: "Accédez à l'intégralité du cadre juridique gabonais en matière de sécurité alimentaire. Ordonnances, lois, décrets et arrêtés sont consultables en ligne, classés par thématique et par date, avec les mises à jour en temps réel.",
    steps: ["Consulter la base de données", "Filtrer par type de texte", "Rechercher par mot-clé", "Télécharger le texte officiel"],
  },
];

/* ══════════════════════════════════════
   BENEFITS
   ══════════════════════════════════════ */
export const BENEFITS = [
  { icon: Lock, title: "Sécurité & Souveraineté", desc: "Hébergement souverain, chiffrement TLS 1.3, conformité Convention de Malabo" },
  { icon: Zap, title: "Disponibilité 99,5%", desc: "Infrastructure résiliente avec basculement automatique et backup quotidien" },
  { icon: Eye, title: "Transparence CTRI", desc: "Traçabilité intégrale anti-corruption, audit trail sur chaque action" },
];

/* ══════════════════════════════════════
   NEWS (expanded)
   ══════════════════════════════════════ */
export const NEWS = [
  {
    date: "15 Fév 2026",
    image: newsLancementImg,
    title: "Lancement du programme de digitalisation AGASA",
    tag: "Institutionnel",
    excerpt: "Le Président de la Transition a officiellement lancé le programme de modernisation numérique de l'Agence Gabonaise de Sécurité Alimentaire, doté d'un budget de 7 milliards de FCFA sur 3 ans.",
  },
  {
    date: "08 Fév 2026",
    image: newsRappelLaitImg,
    title: "Rappel : Lot DH-2026-0412 — Produits laitiers Dahi",
    tag: "Alerte",
    excerpt: "Suite à des analyses microbiologiques non conformes, l'AGASA procède au rappel du lot DH-2026-0412 de produits laitiers de la marque Dahi. Les consommateurs sont invités à ne pas consommer ces produits.",
  },
  {
    date: "01 Fév 2026",
    image: newsBaremeImg,
    title: "Nouveau barème des redevances d'agrément sanitaire",
    tag: "Réglementation",
    excerpt: "L'arrêté n°426/MAEDR fixe les nouveaux tarifs des redevances d'agrément sanitaire applicables à compter du 1er mars 2026. Consultez le barème complet en ligne.",
  },
  {
    date: "25 Jan 2026",
    image: newsFormationImg,
    title: "Formation HACCP pour les restaurateurs de Libreville",
    tag: "Institutionnel",
    excerpt: "L'AGASA organise une session gratuite de formation aux bonnes pratiques HACCP destinée aux restaurateurs de la commune de Libreville. 200 places disponibles, inscription sur AGASA-Pro.",
  },
  {
    date: "18 Jan 2026",
    image: newsFarineImg,
    title: "Alerte : Farine de blé contaminée aux aflatoxines",
    tag: "Alerte",
    excerpt: "Un lot de farine de blé importée a été intercepté au port d'Owendo avec des taux d'aflatoxines supérieurs aux normes. Le lot a été saisi et détruit. Aucun produit n'a atteint le marché.",
  },
  {
    date: "10 Jan 2026",
    image: newsDecretImg,
    title: "Décret portant organisation de la police phytosanitaire",
    tag: "Réglementation",
    excerpt: "Le nouveau décret précise les modalités d'exercice de la police phytosanitaire par les agents assermentés de l'AGASA sur l'ensemble du territoire national.",
  },
];

/* ══════════════════════════════════════
   REGLEMENTATION
   ══════════════════════════════════════ */
export const REGLEMENTATIONS = [
  {
    type: "Ordonnance",
    ref: "Ordonnance n°50/78",
    image: regOrd5078Img,
    title: "Portant réglementation de l'inspection sanitaire et de salubrité des denrées alimentaires d'origine animale",
    date: "1978",
    status: "En vigueur",
    icon: Gavel,
    color: "blue",
  },
  {
    type: "Loi",
    ref: "Loi n°040/2018",
    image: regLoi040Img,
    title: "Portant code de la santé publique en République Gabonaise — Titre IV : Sécurité sanitaire des aliments",
    date: "2018",
    status: "En vigueur",
    icon: Landmark,
    color: "emerald",
  },
  {
    type: "Décret",
    ref: "Décret n°000163/PR/MEEDD",
    image: regDecret163Img,
    title: "Portant création, attributions et organisation de l'Agence Gabonaise de Sécurité Alimentaire",
    date: "2014",
    status: "En vigueur",
    icon: ScrollText,
    color: "violet",
  },
  {
    type: "Arrêté",
    ref: "Arrêté n°426/MAEDR",
    image: regArrete426Img,
    title: "Fixant les redevances applicables aux opérations de contrôle de la sécurité sanitaire des aliments",
    date: "2025",
    status: "En vigueur",
    icon: FileText,
    color: "amber",
  },
  {
    type: "Loi",
    ref: "Loi n°016/2001",
    image: regLoi016Img,
    title: "Portant code de l'environnement en République Gabonaise — dispositions relatives à la sécurité alimentaire",
    date: "2001",
    status: "En vigueur",
    icon: Landmark,
    color: "emerald",
  },
  {
    type: "Décret",
    ref: "Décret n°000543/PR",
    image: regDecret543Img,
    title: "Relatif aux conditions d'hygiène applicables aux établissements de restauration collective",
    date: "2019",
    status: "En vigueur",
    icon: ScrollText,
    color: "violet",
  },
  {
    type: "Arrêté",
    ref: "Arrêté n°312/MSP",
    image: regArrete312Img,
    title: "Portant définition des normes microbiologiques applicables aux denrées alimentaires",
    date: "2020",
    status: "En vigueur",
    icon: FileText,
    color: "amber",
  },
  {
    type: "Convention",
    ref: "Convention de Malabo",
    image: regMalaboImg,
    title: "Convention de l'Union Africaine sur la cyber-sécurité et la protection des données à caractère personnel",
    date: "2014",
    status: "Ratifiée",
    icon: Globe,
    color: "cyan",
  },
];

/* ══════════════════════════════════════
   VISION (homepage)
   ══════════════════════════════════════ */
export const VISION_POINTS = [
  {
    icon: Target,
    image: visionMissionImg,
    title: "Mission",
    desc: "Garantir la sécurité sanitaire des aliments sur l'ensemble du territoire gabonais, de la production à la consommation.",
  },
  {
    icon: Eye,
    image: vision2030Img,
    title: "Vision 2030",
    desc: "Faire du Gabon une référence en Afrique Centrale pour la sécurité alimentaire grâce à la transformation numérique.",
  },
  {
    icon: Award,
    image: visionExcellenceImg,
    title: "Excellence",
    desc: "Atteindre les standards internationaux de contrôle sanitaire et obtenir la reconnaissance de l'Organisation mondiale de la santé.",
  },
];

export const DIGITALIZATION_STEPS = [
  {
    year: "2024",
    title: "Diagnostic & Conception",
    desc: "Audit des processus existants, conception de l'architecture technique et du design system unifié.",
    icon: ClipboardCheck,
    status: "complete",
  },
  {
    year: "2025",
    title: "Développement & Pilote",
    desc: "Développement des 4 applications, phase pilote à Libreville et Port-Gentil avec 50 inspecteurs.",
    icon: Database,
    status: "complete",
  },
  {
    year: "2026",
    title: "Déploiement National",
    desc: "Déploiement progressif dans les 9 provinces, formation de 200+ agents, ouverture de AGASA-Citoyen.",
    icon: Globe,
    status: "current",
  },
  {
    year: "2027",
    title: "Interopérabilité",
    desc: "Interconnexion avec les systèmes des Douanes (SYDONIA), du Ministère de la Santé et de la CEMAC.",
    icon: Wifi,
    status: "future",
  },
];

export const KEY_FIGURES = [
  { value: "200+", label: "Agents formés", icon: Users },
  { value: "15 000", label: "Établissements suivis", icon: Building2 },
  { value: "50 000", label: "Inspections/an prévues", icon: ClipboardCheck },
  { value: "9", label: "Provinces couvertes", icon: MapPin },
  { value: "7 Mds", label: "FCFA de revenus projetés", icon: TrendingUp },
  { value: "< 48h", label: "Délai moyen de traitement", icon: Clock },
];
