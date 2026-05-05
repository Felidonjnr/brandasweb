/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectStatus = 'Live Preview' | 'Demo Build' | 'Prototype' | 'Selected Work' | 'In Progress' | 'Live Test' | 'Protected Preview';

export interface Project {
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  challenge: string;
  brandasResponse: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
  accessType: 'public' | 'protected' | 'coming-soon';
  visualType: string;
  image?: string;
}

export interface DigitalMoment {
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  challenge: string;
  brandasResponse: string;
  features: string[];
  stack: string[];
  liveUrl?: string;
  accessType: 'public' | 'protected' | 'coming-soon';
  visualType: string;
  image?: string;
}

export interface Service {
  toolName: string;
  title: string;
  description: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    title: "EMutex Nig Website Funnel",
    category: "Websites",
    status: "Live Preview",
    shortDescription: "A premium wellness product website and funnel built around product discovery, WhatsApp conversion, product presentation, and lead capture direction.",
    challenge: "EMutex Nig needed a product-focused digital presence that could make the brand look trusted, organize products clearly, and guide customers toward WhatsApp-based ordering.",
    brandasResponse: "BrandAs Media shaped the website strategy, UI/UX direction, product catalogue structure, product detail flow, admin portal direction, WhatsApp CTA flow, and lead capture approach.",
    features: [
      "Premium wellness product homepage",
      "Product catalogue and product detail flow",
      "Bundle/product sales direction",
      "WhatsApp-first conversion flow",
      "Lead capture direction",
      "Admin/product management direction"
    ],
    stack: ["React", "TypeScript", "Tailwind", "Firebase", "Security Architecture"],
    liveUrl: "https://e-mutex.vercel.app/",
    accessType: "public",
    visualType: "website"
  },
  {
    title: "Light Assembly Media Portal",
    category: "AI Systems",
    status: "Live Preview",
    shortDescription: "A media workflow portal designed to organize content operations, team access, knowledge resources, and digital coordination.",
    challenge: "The media team needed a structured system for organizing media work, managing generated content, saving knowledge, and improving digital coordination.",
    brandasResponse: "BrandAs Media planned and built the app structure, team workflow, Firebase direction, content queue system, knowledge resources, and AI-supported media operations.",
    features: [
      "Media workflow dashboard",
      "Content queue direction",
      "Knowledge resource area",
      "Team access direction",
      "Follow-up/task structure",
      "AI provider support direction"
    ],
    stack: ["React", "Firebase", "Firestore", "Firebase Auth", "Claude API", "DeepSeek API", "Vercel"],
    liveUrl: "https://light-assembly-media-portal.vercel.app/",
    accessType: "public",
    visualType: "digital-system"
  },
  {
    title: "Keo Bakes n’ Fries Website",
    category: "Websites",
    status: "Live Preview",
    shortDescription: "A food brand website designed to make the business look more credible, clear, and easy to explore.",
    challenge: "The brand needed a stronger digital presence that could present its food business clearly and build trust online.",
    brandasResponse: "BrandAs Media handled the website structure, visual direction, mobile-friendly layout, deployment support, and online presentation.",
    features: [
      "Food brand landing page",
      "Mobile-friendly website structure",
      "Product/service presentation",
      "Clean business information layout",
      "Social preview direction"
    ],
    stack: ["React", "Vercel", "Cloudinary"],
    liveUrl: "https://keo-bakes-n-fries-website.vercel.app/",
    accessType: "public",
    visualType: "website"
  },
  {
    title: "GroupMind — WhatsApp Intelligence Dashboard",
    category: "AI Systems",
    status: "Live Preview",
    shortDescription: "A WhatsApp intelligence dashboard that generates tailored messages for different groups and supports group-specific content planning.",
    challenge: "Managing content for different WhatsApp groups can become repetitive, especially when each group needs a different tone, purpose, and daily message.",
    brandasResponse: "BrandAs Media built a dashboard concept for group profiles, knowledge dumps, message generation, editing, history tracking, and copy-to-WhatsApp workflow.",
    features: [
      "AI-generated group messages",
      "Separate group profiles",
      "Special instructions per group",
      "Message review and edit flow",
      "Copy-to-WhatsApp workflow",
      "Message history direction"
    ],
    stack: ["React", "Firebase", "Firestore", "Claude AI", "Deployment"],
    liveUrl: "https://group-mind-alpha.vercel.app/",
    accessType: "public",
    visualType: "ai-automation"
  },
  {
    title: "Telegram AI Agent",
    category: "AI Systems",
    status: "Protected Preview",
    shortDescription: "A Telegram command center concept designed for group monitoring, message relay, broadcasts, AI summaries, media handling, and daily digest workflows.",
    challenge: "Managing several Telegram groups manually can become stressful, repetitive, and difficult to track without automation.",
    brandasResponse: "BrandAs Media structured a cloud-based Telegram AI agent with command controls, monitoring, relay, broadcast, Claude-powered extraction, media handling, and dashboard direction.",
    features: [
      "Telegram group monitoring",
      "Message relay direction",
      "Broadcast workflow",
      "AI-powered group summaries",
      "Media handling direction",
      "Daily digest concept",
      "Pause/resume controls"
    ],
    stack: ["Python", "Telethon", "FastAPI", "Supabase", "React", "Railway", "Vercel", "Claude Haiku"],
    liveUrl: "https://telegramai.vercel.app/",
    accessType: "protected",
    visualType: "ai-automation"
  },
  {
    title: "MINOS — Ministry Intelligence & Operational System",
    category: "AI Systems",
    status: "Live Preview",
    shortDescription: "An AI-powered ministry content and knowledge system for sermons, devotionals, study, WhatsApp content, and ministry resource organization.",
    challenge: "Church content creation and ministry study needed a faster, more organized system for generating, saving, reading, and reusing ministry materials.",
    brandasResponse: "BrandAs Media created a dual-dashboard AI system direction with content generation, library saving, read-aloud tools, prompt updating, and resource organization.",
    features: [
      "AI ministry content dashboard",
      "Sermon and devotional support",
      "WhatsApp content generation",
      "Study and prayer guide tools",
      "Saved resource library",
      "Read aloud/copy/share actions",
      "Prompt updating direction"
    ],
    stack: ["HTML", "Firebase", "Claude API", "DeepSeek API", "Deployment"],
    liveUrl: "https://felidonjnr.github.io/MINOS/",
    accessType: "public",
    visualType: "ai-automation"
  },
  {
    title: "Godshand Tutorials JAMB/WAEC Prep",
    category: "Education Tech / Quiz System",
    status: "Live Preview",
    shortDescription: "A mobile-friendly exam practice system with JAMB/WAEC separation, quiz timers, question bank management, progress review, mistake bank, and theory feedback direction.",
    challenge: "Students need a focused exam practice experience that separates exam types, tracks weak areas, and supports both objective and theory-style practice.",
    brandasResponse: "BrandAs Media shaped an interactive quiz system with exam-mode selection, topic-based practice, timers, admin question management, progress tracking, and self-review support.",
    features: [
      "JAMB and WAEC mode separation",
      "Topic-based quiz setup",
      "Live practice and CBT modes",
      "Question bank manager",
      "Progress review",
      "Mistake bank",
      "Scientific calculator",
      "Theory answer self-review"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Local Storage", "Deployment"],
    liveUrl: "https://felidonjnr.github.io/Godshandjambprep/",
    accessType: "public",
    visualType: "education-tech"
  },
  {
    title: "NYSC FAQ Assistant",
    category: "AI Assistant / FAQ Bot",
    status: "Live Test",
    shortDescription: "An AI-powered FAQ assistant concept created to help users get faster answers to NYSC-related questions through a simple web interface.",
    challenge: "NYSC information is often scattered, and users need a simpler way to ask questions and receive focused answers quickly.",
    brandasResponse: "BrandAs Media planned and deployed a web-based FAQ assistant concept using structured NYSC knowledge and a chatbot-style experience.",
    features: [
      "FAQ assistant interface",
      "NYSC question-and-answer support",
      "Knowledge-base driven response direction",
      "Live web deployment",
      "Simple user-facing test link"
    ],
    stack: ["Web App", "AI Knowledge Base", "Vercel"],
    liveUrl: "https://nysc-faq-bot.vercel.app/",
    accessType: "public",
    visualType: "ai-assistant"
  },
  {
    title: "AI-900 Study App",
    category: "Education Tech / AI Learning",
    status: "Live Preview",
    shortDescription: "A focused AI-900 study and practice experience designed to support exam preparation through structured digital learning.",
    challenge: "Learners preparing for AI-900 need a simple, focused study environment that makes revision easier and more accessible.",
    brandasResponse: "BrandAs Media built a study-focused web experience to support AI-900 learning, practice, and exam preparation.",
    features: [
      "AI-900 focused learning interface",
      "Exam preparation direction",
      "Mobile-friendly study access",
      "Simple digital learning experience"
    ],
    stack: ["Web App", "Vercel"],
    liveUrl: "https://ai-900.vercel.app/",
    accessType: "public",
    visualType: "education-tech"
  }
];

export const DIGITAL_MOMENTS: DigitalMoment[] = [
  {
    title: "Valentine BrandAs Experience",
    category: "Personalized Digital Experience",
    status: "Live Preview",
    shortDescription: "A personalized Valentine’s Day web experience designed to turn a simple message into an emotional digital moment.",
    challenge: "Instead of sending a normal message, the goal was to create a personal digital moment that felt intentional, warm, and memorable.",
    brandasResponse: "BrandAs Media created a simple interactive letter experience with name entry, emotional scroll flow, reveal cards, and a soft closing CTA.",
    features: [
      "Personalized name input",
      "Emotional letter-style experience",
      "Tap-to-reveal cards",
      "Scroll-based storytelling",
      "Mobile-friendly experience"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Deployment"],
    liveUrl: "https://felidonjnr.github.io/Valentine-brandas/",
    accessType: "public",
    visualType: "personalized-experience"
  },
  {
    title: "Birthday Digital Letter — Sr. Maryanne",
    category: "Personalized Digital Experience",
    status: "Live Preview",
    shortDescription: "A faith-inspired birthday web letter with chapter-style storytelling, prayers, and emotional scroll experience.",
    challenge: "The goal was to turn a birthday message into a more meaningful, memorable digital experience.",
    brandasResponse: "BrandAs Media designed a scroll-based birthday letter with spiritual tone, story sections, prayer content, and elegant personal presentation.",
    features: [
      "Personalized birthday landing page",
      "Chapter-style storytelling",
      "Spiritual birthday prayer",
      "Scroll-to-receive interaction",
      "Emotional closing message"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Deployment"],
    liveUrl: "https://felidonjnr.github.io/Birthday-RS/",
    accessType: "public",
    visualType: "personalized-experience"
  },
  {
    title: "Birthday Digital Letter — Bernadette",
    category: "Personalized Digital Experience",
    status: "Live Preview",
    shortDescription: "A late-but-genuine birthday experience built like a digital letter with chapters, reveal cards, and emotional writing.",
    challenge: "The aim was to make a belated birthday message feel personal, thoughtful, and more valuable than a regular text.",
    brandasResponse: "BrandAs Media created a chapter-based digital letter experience with personal storytelling, reveal cards, and a warm emotional ending.",
    features: [
      "Tap-to-open interaction",
      "Chapter-based digital letter",
      "Reveal cards",
      "Personalized emotional copy",
      "Mobile-friendly experience"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Deployment"],
    liveUrl: "https://felidonjnr.github.io/Birthday-B/",
    accessType: "public",
    visualType: "personalized-experience"
  }
];

export const SERVICES: Service[] = [
  {
    toolName: 'Websites',
    title: 'Website Design',
    description: 'Modern websites, landing pages, product pages, and portfolio experiences that help your business look credible and easier to trust.',
    icon: 'Globe'
  },
  {
    toolName: 'Design',
    title: 'Brand & Social Media Design',
    description: 'Clean, premium visuals for flyers, social media, campaigns, and brand identity — designed to make your business look intentional and professional.',
    icon: 'Palette'
  },
  {
    toolName: 'Automation',
    title: 'AI Automation',
    description: 'Smart systems for content planning, lead capture, customer follow-up, WhatsApp sales support, and smoother business workflows.',
    icon: 'Cpu'
  },
  {
    toolName: 'Growth',
    title: 'Digital Growth Systems',
    description: 'Practical digital structure for campaigns, funnels, customer journeys, and online positioning.',
    icon: 'Zap'
  }
];
