function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PillLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[0.85rem] text-site-muted border border-site-border px-3.5 py-1.5 rounded-full no-underline hover:border-accent hover:text-accent hover:bg-accent-light transition-all"
    >
      {children}
    </a>
  )
}

function ProjectCard({ href, name, badge, description, tags }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-site-border rounded-[10px] p-6 no-underline text-inherit flex flex-col gap-2.5 hover:border-accent hover:shadow-[0_4px_16px_rgba(90,122,110,0.12)] hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-site-text">{name}</span>
        <span className="text-site-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline-block">
          ↗
        </span>
      </div>
      <span className="text-[0.75rem] text-accent bg-accent-light px-2.5 py-0.5 rounded-full w-fit font-medium">
        {badge}
      </span>
      <p className="text-[0.875rem] text-site-muted leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-[0.72rem] bg-[#f0f0ec] text-site-muted px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

function PostCard({ title, date, excerpt, pdfHref }) {
  return (
    <a
      href={pdfHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-site-border rounded-[10px] p-6 no-underline flex flex-col gap-2 hover:border-accent hover:shadow-[0_2px_12px_rgba(90,122,110,0.1)] transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-base font-semibold text-site-text leading-snug group-hover:text-accent transition-colors">
          {title}
        </div>
        <span className="text-site-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all inline-block flex-shrink-0 mt-0.5">
          ↗
        </span>
      </div>
      <div className="text-[0.82rem] text-accent font-medium">{date}</div>
      {excerpt && (
        <p className="text-[0.88rem] text-site-muted leading-relaxed">{excerpt}</p>
      )}
      <span className="text-[0.78rem] text-accent font-medium mt-1">Read PDF →</span>
    </a>
  )
}

function SectionHeading({ children }) {
  return (
    <div className="mb-8">
      <h2 className="text-[1.4rem] font-bold font-serif tracking-tight text-site-text">
        {children}
      </h2>
      <span className="block w-8 h-0.5 bg-accent mt-2 rounded-full" />
    </div>
  )
}

function PaperCard({ title, date, description, pdfHref }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 items-start bg-white border border-site-border rounded-[10px] p-6 hover:border-accent hover:shadow-[0_2px_12px_rgba(90,122,110,0.1)] transition-all">
      <div>
        <div className="text-base font-semibold text-site-text mb-1 leading-snug">{title}</div>
        <div className="text-[0.82rem] text-accent font-medium mb-2.5">{date}</div>
        <p className="text-[0.88rem] text-site-muted leading-relaxed">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.78rem] bg-accent-light text-accent border border-accent/25 px-3 py-1.5 rounded-md font-medium no-underline hover:bg-accent hover:text-white transition-all block text-center"
        >
          PDF
        </a>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-site-bg">

      {/* ── Navigation ── */}
      <nav className="sticky top-0 bg-site-bg/90 backdrop-blur-sm border-b border-site-border z-50 px-8">
        <div className="max-w-[800px] mx-auto flex items-center justify-between h-14">
          <a href="#about" className="text-sm font-semibold text-site-text no-underline">
            Lamees A.
          </a>
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <a href="#projects" className="text-sm text-site-muted no-underline hover:text-accent transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#research" className="text-sm text-site-muted no-underline hover:text-accent transition-colors">
                Research
              </a>
            </li>
            <li>
              <a href="#writing" className="text-sm text-site-muted no-underline hover:text-accent transition-colors">
                Writing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-site-muted no-underline hover:text-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-[800px] mx-auto px-8">

        {/* ── About ── */}
        <section id="about" className="fade-in-up grid grid-cols-[1fr_auto] gap-12 items-start pt-20 pb-16 border-b border-site-border">
          <div>
            <h1 className="text-[2.6rem] font-bold font-serif tracking-[-0.03em] leading-tight mb-2 text-site-text">
              Lamees A.
            </h1>
            <p className="text-[1rem] text-accent italic font-serif mb-6">
              Computer Engineering @ Columbia University
            </p>
            <p className="text-[0.975rem] text-site-text leading-[1.8] max-w-[520px]">
              I&apos;m a computer engineering student focused on SoC design and digital VLSI,
              with a strong interest in machine learning, computer vision, and the intersection
              of AI and society. My work spans hardware and embedded projects, evaluating large
              language models, and building full-stack web applications.
            </p>
            <div className="flex gap-4 mt-6 flex-wrap">
              <PillLink href="https://github.com/lamwasil2203">
                <GitHubIcon size={14} /> GitHub
              </PillLink>
              <PillLink href="https://www.linkedin.com/in/lamees-al222">
                <LinkedInIcon size={14} /> LinkedIn
              </PillLink>
            </div>
          </div>
          <div
            className="w-40 h-40 rounded-full flex-shrink-0 flex items-center justify-center text-[2.8rem] text-accent font-serif"
            style={{
              background: 'linear-gradient(135deg, #e8f0ed 0%, #cfe0d9 100%)',
              border: '2px solid rgba(90,122,110,0.2)',
              boxShadow: '0 0 0 8px rgba(90,122,110,0.07), 0 8px 24px rgba(90,122,110,0.14)',
            }}
          >
            L
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-16 border-b border-site-border">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-5">
            <ProjectCard
              href="https://github.com/lamwasil2203/2048"
              name="2048 AI Agent"
              badge="AI / Game"
              description="An AI-driven version of the 2048 puzzle game using expectimax search and alpha-beta pruning to simulate future moves and maximize score. Evaluates tile configurations using heuristic functions including smoothness, monotonicity, and empty tile count."
              tags={['AI', 'Search Algorithms', 'Heuristics']}
            />
            <ProjectCard
              href="https://the-humor-project.vercel.app/login"
              name="The Humor Project"
              badge="Web App"
              description="A full-stack platform for exploring and interacting with humor content. Features user-facing and admin interfaces with authentication."
              tags={['Full-Stack', 'Vercel']}
            />
            <ProjectCard
              href="https://lamees-hardware.vercel.app/"
              name="Hardware Projects"
              badge="Hardware / Embedded"
              description="A collection of hardware and embedded systems projects, including circuit designs, microcontroller programming, and physical computing experiments."
              tags={['Embedded Systems', 'Hardware']}
            />
            <ProjectCard
              href="https://mewing-close-db8.notion.site/WeMu-35b3158f0df7800eaff9e7ff26682535"
              name="WeMu"
              badge="Hardware / Sound"
              description="A performance instrument inspired by the Theremin that turns the space between two dancers into music. UWB tags worn on each dancer's arms stream distances via ESP32 into a Python sonification engine, mapping movement and proximity to pitch, loudness, and timbre in real time."
              tags={['UWB', 'ESP32', 'Python', 'Sonification']}
            />
            <ProjectCard
              href="https://www.notion.so/Pachinko-Board-34e3158f0df78063895be1bc467a22eb"
              name="Pachinko Board"
              badge="Hardware / Interactive"
              description="A Milky Way–themed Pachinko board where the ball drifts like a shooting star past constellation-shaped pins. Spinning stepper-motor &quot;suns&quot; dynamically redirect its path based on live channel-tracking data broadcast over ESP-NOW."
              tags={['ESP32', 'ESP-NOW', 'Stepper Motors', 'Embedded Systems']}
            />
          </div>
        </section>

        {/* ── Research ── */}
        <section id="research" className="py-16 border-b border-site-border">
          <SectionHeading>Research</SectionHeading>
          <div className="flex flex-col gap-7">
            <PaperCard
              title="Evaluating Political Bias in LLMs"
              date="Oct 2025 – Dec 2025"
              description="Co-authored a study replicating Röttger et al.'s Political Compass methodology on GPT-4 and GPT-5, leading the paraphrase robustness analysis to test response consistency across prompt variations."
              pdfHref="/NLPproj_final.pdf"
            />
            <PaperCard
              title="Fruit Classification Using ML & Computer Vision"
              date="Oct 2025 – Dec 2025"
              description="Compared traditional feature extraction methods (HOG, HSV histograms, GLCM) against a fine-tuned ResNet for fruit image classification, evaluating tradeoffs in accuracy and computational efficiency."
              pdfHref="/FruitClassification.pdf"
            />
          </div>
        </section>

        {/* ── Writing ── */}
        <section id="writing" className="py-16 border-b border-site-border">
          <SectionHeading>Writing</SectionHeading>
          <div className="flex flex-col gap-5">
            <PostCard
              title="Teaching LLMs to Understand Arab Culture"
              date="December 2025"
              excerpt="Article examining PALM, a first-of-its-kind Arabic instruction dataset covering all 22 Arab countries, and what its findings reveal about how poorly current LLMs handle Arab cultural nuance and regional dialects."
              pdfHref="/LLMs&ArabCulture.pdf"
            />
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-16">
          <SectionHeading>Contact</SectionHeading>
          <p className="text-[0.95rem] text-site-muted max-w-[480px] leading-[1.7] mb-6">
            I&apos;m always open to chatting about research, collaborations, or anything
            CS-related. Feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/lamwasil2203"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.9rem] font-medium text-site-text border border-site-border px-4 py-2 rounded-lg no-underline hover:border-accent hover:text-accent hover:bg-accent-light transition-all"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lamees-al222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.9rem] font-medium text-site-text border border-site-border px-4 py-2 rounded-lg no-underline hover:border-accent hover:text-accent hover:bg-accent-light transition-all"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-[800px] mx-auto px-8 py-8 text-center text-[0.8rem] text-site-muted">
        Lamees A. · Columbia University · 2026
      </footer>

    </div>
  )
}
