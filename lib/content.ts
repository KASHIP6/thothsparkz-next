// Central content + config for the site. All pages/components import from here
// so copy and data live in one place. Icons are referenced by key and rendered
// via app/components/ui/Icon.tsx (keeps this a pure .ts data module).

export type IconKey =
  | "branding"
  | "webDesign"
  | "webDev"
  | "marketing"
  | "mobile"
  | "ecommerce"
  | "uiux"
  | "location"
  | "email"
  | "phone"
  | "clock";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  num: string;
  icon: IconKey;
  title: string;
  copy: string;
}

export type ProjectCategory = "Web Design" | "Mobile App" | "Branding";

export interface Project {
  title: string;
  category: ProjectCategory;
  desc: string;
  icon: IconKey;
}

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Expertise {
  label: string;
  pct: number;
}

export const siteConfig = {
  name: "Thoth Sparkz",
  tagline: "Digital Excellence Agency",
  description:
    "Thoth Sparkz crafts premium branding, web experiences, and digital products from Wayanad to the world.",
  origin: "Wayanad, Kerala, India",
  email: "info@thothsparkz.com",
  emailSecondary: "support@thothsparkz.com",
  phone: "+91 (000) 000-0000",
  hours: "Mon–Fri: 9AM – 6PM",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    num: "01",
    icon: "branding",
    title: "Digital Branding",
    copy: "We shape brand identities with clarity and intent — visual systems that stay recognizable across every touchpoint.",
  },
  {
    num: "02",
    icon: "webDesign",
    title: "Web Design",
    copy: "Responsive, considered interfaces that guide attention and turn first impressions into lasting engagement.",
  },
  {
    num: "03",
    icon: "webDev",
    title: "Web Development",
    copy: "Fast, accessible, and scalable builds using modern frameworks and the discipline of clean architecture.",
  },
  {
    num: "04",
    icon: "marketing",
    title: "Digital Marketing",
    copy: "Focused campaigns that grow visibility and bring the right audience to your product — measured, not guessed.",
  },
  {
    num: "05",
    icon: "mobile",
    title: "Mobile App Development",
    copy: "Native and cross-platform apps designed for real use — smooth, reliable, and a pleasure on every device.",
  },
  {
    num: "06",
    icon: "ecommerce",
    title: "E-Commerce Solutions",
    copy: "Secure, scalable storefronts built for conversion, with checkout flows that feel effortless.",
  },
  {
    num: "07",
    icon: "uiux",
    title: "UI/UX Design",
    copy: "Research-led interfaces that reduce friction and make complex products feel obvious to use.",
  },
];

export const projects: Project[] = [
  {
    title: "TechVision Dashboard",
    category: "Web Design",
    desc: "Analytics platform with a focused data-visualization layer.",
    icon: "webDesign",
  },
  {
    title: "FitTrack App",
    category: "Mobile App",
    desc: "Fitness tracking with progress charts and workout stats.",
    icon: "mobile",
  },
  {
    title: "Luxe Fashion Branding",
    category: "Branding",
    desc: "Minimalist luxury brand identity with premium packaging.",
    icon: "branding",
  },
  {
    title: "ElectroShop E-Commerce",
    category: "Web Design",
    desc: "Electronics store with a seamless shopping experience.",
    icon: "ecommerce",
  },
  {
    title: "QuickBite Delivery",
    category: "Mobile App",
    desc: "Food delivery app with real-time order tracking.",
    icon: "mobile",
  },
  {
    title: "NexTech Corporate Identity",
    category: "Branding",
    desc: "Full corporate branding for a growing tech startup.",
    icon: "branding",
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web Design",
  "Mobile App",
  "Branding",
];

export const testimonials: Testimonial[] = [
  {
    initials: "MR",
    name: "Michael Richardson",
    role: "CEO, TechNova",
    text: "Thoth Sparkz reshaped our online presence with a site that captures exactly who we are. Professional, responsive, and well beyond what we expected.",
  },
  {
    initials: "JC",
    name: "Jennifer Chen",
    role: "Marketing Director, StyleHouse",
    text: "Our e-commerce rebuild was a genuine turning point. Their attention to detail and user-first thinking lifted our online sales considerably.",
  },
  {
    initials: "DJ",
    name: "David Johnson",
    role: "Founder, FitLife",
    text: "The mobile app they built understood our vision from day one. It's intuitive, dependable, and our customers love it.",
  },
];

export const stats: Stat[] = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "", label: "Team Members" },
  { value: 5, suffix: "", label: "Years Experience" },
];

export const expertise: Expertise[] = [
  { label: "Web Design & Development", pct: 95 },
  { label: "Mobile App Development", pct: 85 },
  { label: "UI/UX Design", pct: 90 },
  { label: "Digital Marketing", pct: 80 },
];

export const process: Array<{ step: string; title: string; copy: string }> = [
  {
    step: "01",
    title: "Discover",
    copy: "We start by understanding your goals, audience, and market — the foundation every decision builds on.",
  },
  {
    step: "02",
    title: "Design",
    copy: "We translate strategy into clear, considered design — wireframes, systems, and polished interfaces.",
  },
  {
    step: "03",
    title: "Build",
    copy: "We develop with clean, scalable code, testing across devices so the result is fast and reliable.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    copy: "We ship, measure, and refine — supporting your product so it keeps performing after go-live.",
  },
];
