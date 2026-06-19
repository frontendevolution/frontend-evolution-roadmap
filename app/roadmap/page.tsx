import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Roadmap — 2026",
  description: "Your complete frontend developer roadmap.",
};

const roadmap = [
  {
    title: "🧱 Layer 1 — The Non-Negotiables",
    subtitle: "You can't call yourself a frontend developer without these.",
    sections: [
      {
        heading: "HTML",
        items: [
          "Semantic Structure",
          "Forms & Validation",
          "Accessibility (ARIA)",
          "SEO Meta Tags",
          "Canvas",
          "SVG",
          "Web Components",
        ],
      },
      {
        heading: "CSS",
        items: [
          "Box Model",
          "Flexbox",
          "Grid",
          "Positioning",
          "Responsive Design",
          "Media Queries",
          "CSS Variables",
          "Animations",
          "Transitions",
          "Pseudo Classes",
          "Pseudo Elements",
          "BEM",
          "Specificity",
        ],
      },
      {
        heading: "JavaScript",
        items: [
          "Variables",
          "Data Types",
          "Functions",
          "Scope",
          "Closures",
          "Hoisting",
          "Prototype Chain",
          "`this` Keyword",
          "Classes",
          "DOM Manipulation",
          "Events",
          "Event Bubbling",
          "Event Delegation",
          "Execution Context",
          "Call Stack",
          "Memory Management",
          "Promises",
          "Async / Await",
          "Fetch API",
          "Error Handling",
          "ES Modules",
          "ES6+",
          "Local Storage",
          "Session Storage",
          "Cookies",
          "Debouncing",
          "Throttling",
          "Design Patterns",
        ],
      },
    ],
  },
  {
    title: "⚙️ Layer 2 — Modern Stack",
    subtitle: "Every serious frontend role expects these.",
    sections: [
      {
        heading: "TypeScript",
        items: [
          "Types",
          "Interfaces",
          "Generics",
          "Utility Types",
          "Type Narrowing",
        ],
      },
      {
        heading: "React",
        items: [
          "JSX",
          "Components",
          "Props",
          "State",
          "Hooks",
          "Context API",
          "React Router",
          "Error Boundaries",
          "Performance Optimization",
          "Patterns",
        ],
      },
      {
        heading: "Next.js",
        items: [
          "App Router",
          "Server Components",
          "Client Components",
          "Layouts",
          "Dynamic Routes",
          "API Routes",
          "Middleware",
          "ISR",
          "Streaming",
          "Image Optimization",
          "Deployment",
        ],
      },
      {
        heading: "Tailwind CSS",
        items: [
          "Utility Classes",
          "Responsive Design",
          "Dark Mode",
          "Custom Themes",
          "Component Patterns",
        ],
      },
      {
        heading: "State Management",
        items: ["Redux Toolkit", "RTK Query", "Zustand"],
      },
    ],
  },
  {
    title: "🌐 Layer 3 — Web Platform",
    subtitle: "Knowledge that separates engineers from coders.",
    sections: [
      {
        heading: "Browser Internals",
        items: [
          "Event Loop",
          "Rendering Pipeline",
          "Critical Rendering Path",
          "Reflow",
          "Repaint",
        ],
      },
      {
        heading: "Rendering",
        items: [
          "CSR",
          "SSR",
          "SSG",
          "ISR",
          "Hydration",
          "Streaming SSR",
          "Edge Rendering",
        ],
      },
      {
        heading: "Performance",
        items: [
          "Core Web Vitals",
          "Lazy Loading",
          "Bundle Splitting",
          "Code Splitting",
          "Tree Shaking",
          "Lighthouse",
        ],
      },
      {
        heading: "Security",
        items: ["XSS", "CSRF", "CORS", "JWT", "OAuth", "HTTPS", "CSP"],
      },
    ],
  },
  {
    title: "🛠️ Layer 4 — Engineering Workflow",
    subtitle: "Daily tools used in production.",
    sections: [
      {
        heading: "Git",
        items: [
          "Branching",
          "Rebase",
          "Cherry Pick",
          "Stash",
          "Merge Conflicts",
          "Conventional Commits",
        ],
      },
      {
        heading: "GitHub",
        items: ["Pull Requests", "Code Reviews", "GitHub Actions", "CI/CD"],
      },
      {
        heading: "Tooling",
        items: [
          "npm",
          "pnpm",
          "Yarn",
          "Vite",
          "Webpack",
          "Environment Variables",
        ],
      },
      {
        heading: "Monorepos",
        items: ["Turborepo", "Nx"],
      },
    ],
  },
  {
    title: "🧪 Layer 5 — Testing",
    subtitle: "Essential for production-ready applications.",
    sections: [
      {
        heading: "Testing",
        items: [
          "Jest",
          "React Testing Library",
          "Integration Testing",
          "Playwright",
          "Cypress",
          "Mocking",
          "Async Testing",
          "Coverage",
        ],
      },
    ],
  },
  {
    title: "🤖 Layer 6 — AI Integration",
    subtitle: "Frontend skills that matter in the AI era.",
    sections: [
      {
        heading: "AI APIs",
        items: [
          "OpenAI",
          "Anthropic",
          "Gemini",
          "Streaming Responses",
          "Readable Streams",
          "Conversation Context",
          "Abort Controller",
          "Prompt Engineering",
          "Markdown Rendering",
          "Function Calling",
          "RAG Basics",
          "AI UX",
        ],
      },
      {
        heading: "AI Developer Tools",
        items: ["GitHub Copilot", "Cursor", "Claude"],
      },
    ],
  },
  {
    title: "🏗️ Layer 7 — System Design",
    subtitle: "Think beyond components.",
    sections: [
      {
        heading: "Architecture",
        items: [
          "Caching",
          "CDN",
          "REST",
          "GraphQL",
          "Authentication",
          "Authorization",
          "RBAC",
          "Micro Frontends",
          "Scalability",
          "Figma to Code",
          "Monorepo Architecture",
        ],
      },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Frontend Developer Roadmap
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Frontend Roadmap
            <span className="text-indigo-600"> 2026</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Master the fundamentals first, then build modern production-ready
            skills that companies actually hire for.
          </p>
        </div>

        <div className="space-y-12">
          {roadmap.map((layer) => (
            <section
              key={layer.title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-3xl font-bold">{layer.title}</h2>

              <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                {layer.subtitle}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {layer.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-800/50"
                  >
                    <h3 className="mb-4 font-semibold text-lg">
                      {section.heading}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
