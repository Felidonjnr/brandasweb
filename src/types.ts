/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectStatus = 'Live Preview' | 'Demo Build' | 'Prototype' | 'Selected Work' | 'In Progress' | 'Live Test';

export interface Project {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  challenge: string;
  brandasResponse: string;
  features: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image: string;
  screenshotNote?: string;
}

export interface DigitalMoment {
  id: string;
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  challenge: string;
  brandasResponse: string;
  features: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image: string;
  screenshotNote?: string;
}

export interface Service {
  toolName: string;
  title: string;
  description: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "EMutex Nig Website Funnel",
    category: "Website / Sales Funnel",
    status: "Live Preview",
    shortDescription: "A premium wellness product website and funnel built around product discovery, WhatsApp conversion, admin product control, and lead capture direction.",
    challenge: "EMutex Nig needed a product-focused digital presence that could make the brand look trusted, organize products clearly, and guide customers toward WhatsApp-based ordering.",
    brandasResponse: "BrandAs Media shaped the website strategy, UI/UX direction, product catalogue structure, product detail flow, admin portal direction, WhatsApp CTA flow, and lead capture approach.",
    features: [
      "Premium wellness product homepage",
      "Product catalogue and product detail structure",
      "Bundle/product sales direction",
      "WhatsApp-first conversion flow",
      "Admin portal setup direction",
      "Firebase authentication/admin environment direction",
      "Google AI Studio/Vite-based development workflow"
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Firebase", "Framer Motion", "Vercel", "Google AI Studio"],
    githubUrl: "https://github.com/Felidonjnr/EMutex",
    liveUrl: "https://e-mutex.vercel.app/",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use a screenshot of the homepage hero, product catalogue, and admin/product page if available."
  },
  {
    id: '2',
    title: "Light Assembly Media Portal",
    category: "Digital System / Media Workflow",
    status: "Live Preview",
    shortDescription: "A church media workflow portal designed to organize media operations, content generation, team access, and digital coordination.",
    challenge: "The media team needed a structured system for organizing church media work, managing generated content, saving knowledge, and improving digital coordination.",
    brandasResponse: "BrandAs Media planned and built the app structure, Firebase workflow, Google sign-in/admin access, Firestore collections, content queue direction, knowledge resources, and AI provider switching support.",
    features: [
      "Google sign-in and admin access",
      "Firestore-powered team data structure",
      "Church knowledge base",
      "Generated content queue",
      "Weekly calendar items",
      "Follow-up tasks",
      "Knowledge dump resources",
      "Claude and DeepSeek provider switching"
    ],
    stack: ["React", "Firebase", "Firestore", "Firebase Auth", "Claude API", "DeepSeek API", "Vercel"],
    githubUrl: "https://github.com/Felidonjnr/light-assembly-media-portal",
    liveUrl: "https://light-assembly-media-portal.vercel.app/",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshots of the login/admin area, dashboard, content queue, and knowledge base if accessible."
  },
  {
    id: '3',
    title: "MINOS — Ministry Intelligence & Operational System",
    category: "AI System / Ministry Workflow",
    status: "Live Preview",
    shortDescription: "An AI-powered ministry content and knowledge system with separate Claude and DeepSeek dashboards for sermons, devotionals, study, WhatsApp content, and pastoral resources.",
    challenge: "Church content creation and ministry study needed a faster, more organized system for generating, saving, reading, and reusing ministry materials.",
    brandasResponse: "BrandAs Media created a dual-dashboard AI system with Claude for pastoral content and DeepSeek for deeper study, supported by Firebase library sync, read-aloud tools, prompt updating, and saved resource categories.",
    features: [
      "Claude-powered ministry content dashboard",
      "DeepSeek-powered deep study dashboard",
      "Morning brief, Sunday message, sermon notes, devotionals, WhatsApp content, prayer guide, and study tools",
      "Firebase-connected shared library",
      "Save-to-library workflow",
      "Read aloud, copy, and share actions",
      "AI prompt updater",
      "Separate libraries for different AI dashboards"
    ],
    stack: ["HTML", "Firebase", "Claude API", "DeepSeek API", "Google Cloud Text-to-Speech direction"],
    githubUrl: "https://github.com/Felidonjnr/MINOS",
    liveUrl: "",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshots of the MINOS home screen, Claude dashboard, DeepSeek dashboard, and library area."
  },
  {
    id: '4',
    title: "Telegram AI Agent",
    category: "AI Automation / Messaging System",
    status: "Prototype / Demo Build",
    shortDescription: "A phone-controlled Telegram command center designed for group monitoring, message relay, broadcasts, AI summaries, media scraping, and daily digests.",
    challenge: "Managing several Telegram groups manually can become stressful, repetitive, and difficult to track without automation.",
    brandasResponse: "BrandAs Media structured a cloud-based Telegram AI agent with command controls, monitoring, relay, broadcast, scraping, Claude-powered extraction, media saving, and a dashboard deployment flow.",
    features: [
      "View and monitor Telegram groups",
      "Auto-relay messages with keyword filters",
      "Broadcast DMs to group members",
      "Extract key info from groups using Claude AI",
      "Scrape and auto-save media",
      "Daily digest of monitored groups",
      "Pause/resume controls",
      "AI self-updater concept"
    ],
    stack: ["Python", "Telethon", "FastAPI", "Supabase", "React", "Railway", "Vercel", "Claude Haiku"],
    githubUrl: "https://github.com/Felidonjnr/verbose-meme-tele",
    liveUrl: "https://telegramai.vercel.app/",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshots of dashboard UI, command list, and system overview if available."
  },
  {
    id: '5',
    title: "GroupMind — WhatsApp Intelligence Dashboard",
    category: "AI Automation / Content System",
    status: "Live Preview",
    shortDescription: "A WhatsApp intelligence dashboard that generates fresh, tailored messages for multiple groups and saves message history with Firebase.",
    challenge: "Managing content for different WhatsApp groups can become repetitive, especially when each group needs a different tone, purpose, and daily message.",
    brandasResponse: "BrandAs Media built a dashboard concept that allows group profiles, knowledge dumps, message generation, editing, history tracking, and direct copy-to-WhatsApp workflow.",
    features: [
      "AI-generated group messages",
      "Separate group profiles",
      "Special instruction per group",
      "Message review and edit flow",
      "Copy-to-WhatsApp workflow",
      "Firebase message history",
      "Mistake-free group-specific content planning"
    ],
    stack: ["React", "Vite", "Firebase", "Firestore", "Anthropic Claude API", "Vercel"],
    githubUrl: "https://github.com/Felidonjnr/Group-Mind",
    liveUrl: "https://group-mind-alpha.vercel.app/",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use dashboard screenshot showing group list, message generation area, and history panel."
  },
  {
    id: '6',
    title: "Godshand Tutorials JAMB/WAEC Prep",
    category: "Education Tech / Quiz System",
    status: "Demo Build",
    shortDescription: "A mobile-friendly exam practice system with JAMB/WAEC separation, quiz timers, question bank management, progress review, mistake bank, and theory feedback.",
    challenge: "Students need a focused exam practice experience that separates exam types, tracks weak areas, and supports both objective and theory-style practice.",
    brandasResponse: "BrandAs Media shaped an interactive quiz system with exam-mode selection, topic-based practice, timers, admin question management, progress tracking, and self-review support.",
    features: [
      "JAMB and WAEC mode separation",
      "Topic-based quiz setup",
      "Live practice and CBT practice modes",
      "Admin PIN-protected question manager",
      "JSON import/export for question banks",
      "Progress review and recent attempts",
      "Mistake bank for wrong answers",
      "Scientific calculator",
      "Theory answer self-review and feedback"
    ],
    stack: ["HTML", "Local Storage", "Netlify-ready configuration", "Firebase sync direction"],
    githubUrl: "https://github.com/Felidonjnr/Godshandjambprep",
    liveUrl: "",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshots of exam mode selection, quiz setup, question bank manager, and mistake bank."
  },
  {
    id: '7',
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
    githubUrl: "",
    liveUrl: "https://nysc-faq-bot.vercel.app/",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshot of the live FAQ assistant homepage/interface."
  }
];

export const DIGITAL_MOMENTS: DigitalMoment[] = [
  {
    id: 'dm1',
    title: "Valentine BrandAs Experience",
    category: "Personalized Digital Experience",
    status: "Selected Work",
    shortDescription: "A personalized Valentine’s Day web experience designed to make someone feel seen through emotional digital storytelling.",
    challenge: "Instead of sending a normal message, the goal was to create a personal digital moment that felt intentional, warm, and memorable.",
    brandasResponse: "BrandAs Media created a simple interactive letter experience with name entry, emotional scroll flow, reveal cards, and a soft call-to-action.",
    features: [
      "Personalized name input",
      "Emotional letter-style experience",
      "Tap-to-reveal cards",
      "Scroll-based storytelling",
      "BrandAs Media closing CTA"
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Felidonjnr/Valentine-brandas",
    liveUrl: "",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1518199266791-739949406b2b?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use the valentine-preview.png from the repo or a screenshot of the opening screen."
  },
  {
    id: 'dm2',
    title: "Birthday Digital Letter — Sr. Maryanne",
    category: "Personalized Digital Experience",
    status: "Selected Work",
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
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Felidonjnr/Birthday-RS",
    liveUrl: "",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1530103862676-fa8c91bbe34b?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshot of the opening birthday screen and prayer section."
  },
  {
    id: 'dm3',
    title: "Birthday Digital Letter — Bernadette",
    category: "Personalized Digital Experience",
    status: "Selected Work",
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
    stack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Felidonjnr/Birthday-B",
    liveUrl: "",
    videoUrl: "",
    image: "https://images.unsplash.com/photo-1496395039792-349f96434444?q=80&w=1000&auto=format&fit=crop",
    screenshotNote: "Use screenshot of the opening screen and reveal-card section."
  }
];

export const SERVICES: Service[] = [
  {
    toolName: 'Tool 1',
    title: 'Digital Presence Builder',
    description: 'We build clean, modern websites that make your business easier to trust, easier to understand, and easier to take seriously.',
    icon: 'Globe'
  },
  {
    toolName: 'Tool 2',
    title: 'Visual Identity Engine',
    description: 'We design visuals that make your brand look intentional, professional, and ready for the kind of customers you want to attract.',
    icon: 'Palette'
  },
  {
    toolName: 'Tool 3',
    title: 'AI Workflow System',
    description: 'We help brands reduce manual stress by using AI to support content, sales, follow-up, and daily business workflows.',
    icon: 'Cpu'
  },
  {
    toolName: 'Tool 4',
    title: 'Growth Direction Map',
    description: 'We help brands stop posting randomly and start moving with clearer digital direction.',
    icon: 'TrendingUp'
  }
];
