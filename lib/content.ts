export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  num: string;
  title: string;
  highlight?: boolean;
  services: string[];
}

export interface CaseStudy {
  client: string;
  tagline: string;
  tags: string[];
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SparkStep {
  num: string;
  title: string;
  desc: string;
}

export interface Client {
  name: string;
}

export const siteConfig = {
  name: "Thoth Sparkz",
  tagline: "Intelligence That Sparks Transformation",
  description:
    "We build brands, digital experiences and growth systems that move businesses forward.",
  origin: "Wayanad, Kerala, India",
  email: "info@thothsparkz.com",
  emailSecondary: "support@thothsparkz.com",
  phone: "+91 (000) 000-0000",
  hours: "Mon–Fri: 9AM – 6PM",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const capabilities: Capability[] = [
  {
    num: "01",
    title: "Brand",
    services: [
      "Strategy",
      "Positioning",
      "Identity",
      "Messaging",
      "Creative Direction",
    ],
  },
  {
    num: "02",
    title: "Digital",
    services: [
      "Websites",
      "UX/UI",
      "Digital Experience",
      "SEO",
      "Content",
      "Social",
    ],
  },
  {
    num: "03",
    title: "Growth",
    services: [
      "Performance Marketing",
      "Lead Generation",
      "CRO",
      "Paid Media",
      "Analytics",
      "CRM",
    ],
  },
  {
    num: "04",
    title: "Transformation",
    highlight: true,
    services: [
      "Business Strategy",
      "Go-to-Market",
      "Technology",
      "Automation",
      "Integrated Campaigns",
      "Growth Systems",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: "Sastha Earth Movers",
    tagline: "Building a stronger tomorrow.",
    tags: ["Brand Strategy", "Identity", "Campaign", "Digital"],
    image: "/work/sastha.svg",
  },
  {
    client: "Master Fix",
    tagline: "Fixing things. Every day.",
    tags: ["Brand", "Digital", "Social", "Growth"],
    image: "/work/masterfix.svg",
  },
  {
    client: "Eduworld International",
    tagline: "Global learning. Brighter futures.",
    tags: ["Content", "YouTube", "Brand", "Communication"],
    image: "/work/eduworld.svg",
  },
  {
    client: "FocuzFive",
    tagline: "Focused brands. Greater momentum.",
    tags: ["Brand", "Performance", "CRO", "Digital"],
    image: "/work/focuzfive.svg",
  },
];

export const stats: Stat[] = [
  { value: "150+", label: "Projects" },
  { value: "10+", label: "Industries" },
  { value: "10+", label: "Team Members" },
  { value: "5+", label: "International Markets" },
  { value: "35%+", label: "Campaign Performance Improvement" },
  { value: "2.5×", label: "Conversion Growth" },
  { value: "113K+", label: "Single-Video Views" },
];

export const sparkSteps: SparkStep[] = [
  { num: "01", title: "Discover", desc: "Research & intelligence" },
  { num: "02", title: "Define", desc: "Positioning & strategy" },
  { num: "03", title: "Design", desc: "Identity & experience" },
  { num: "04", title: "Deploy", desc: "Campaign & execution" },
  { num: "05", title: "Drive", desc: "Growth & performance" },
  { num: "06", title: "Evolve", desc: "Analytics & optimization" },
];

export const clients: Client[] = [
  { name: "Sastha" },
  { name: "Master Fix" },
  { name: "Eduworld" },
  { name: "FocuzFive" },
  { name: "Pogo Shawaya" },
  { name: "Adaar" },
];
