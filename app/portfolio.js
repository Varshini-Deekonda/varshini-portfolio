import React, { useState, createContext, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Phone,
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Code2,
  Cloud,
  Workflow,
  Database,
  Github,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Varshini-Deekonda/gcp-finance-data-platform";

/* ------------------------------------------------------------------ */
/* Theme tokens                                                         */
/* ------------------------------------------------------------------ */

const darkTheme = {
  bg: "#0A0F1B",
  surface: "#111A2C",
  surface2: "#17223A",
  border: "#26334C",
  text: "#E7ECF4",
  textMuted: "#8C9CB6",
  bronze: "#CE8A52",
  silver: "#AFC0D6",
  gold: "#E6B96A",
  success: "#5FBF87",
  shadow: "0 20px 50px -20px rgba(0,0,0,0.6)",
};

const lightTheme = {
  bg: "#F1F3F8",
  surface: "#FFFFFF",
  surface2: "#E7EBF3",
  border: "#D6DEEA",
  text: "#141C2B",
  textMuted: "#5E6E88",
  bronze: "#B5703A",
  silver: "#5E7393",
  gold: "#B8862F",
  success: "#2C9A5C",
  shadow: "0 20px 50px -25px rgba(20,28,43,0.25)",
};

const ThemeContext = createContext({ t: darkTheme, dark: true });

const fontDisplay = { fontFamily: "'Space Grotesk', sans-serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };
const fontMono = { fontFamily: "'JetBrains Mono', monospace" };

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Engagements" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Programming & Querying",
    items: ["SQL", "PySpark", "Python"],
  },
  {
    icon: Cloud,
    title: "Cloud & Databases",
    items: ["Cloud Storage", "Dataproc", "BigQuery", "Cloud Composer"],
  },
  {
    icon: Workflow,
    title: "ETL & Data Integration",
    items: [
      "Talend Big Data",
      "Talend Admin Center (TAC)",
      "Talend Mgmt Console (TMC)",
      "Qlik Replicate",
      "Qlik Cloud Data Integration",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Diagonal Consulting LLP",
    role: "Data Engineer",
    period: "Nov 2022 — Present",
    blocks: [
      {
        client: "PFC (Power Finance Corporation)",
        points: [
          "Architected scalable ELT pipelines ingesting high-volume financial data into GCS and BigQuery for operational dashboards and analytical workloads.",
          "Implemented a Medallion architecture — raw data into Bronze, SCD Type 2 transformations in Silver, curated data marts in Gold.",
          "Built a metadata-driven ingestion framework supporting full and incremental loads with dynamic schema handling and reusable transformation logic.",
          "Orchestrated end-to-end execution with Cloud Composer, adding automated alerting and data quality checks that cut manual intervention.",
        ],
      },
      {
        client: "Muthoot Finance",
        points: [
          "Led migration of 5,000+ tables (4 TB) from Oracle and SQL Server to BigQuery using Talend ETL — on schedule, zero data loss.",
          "Designed the downstream BigQuery transformation layer: business logic, data modeling, partitioning and clustering for analytical performance.",
          "Optimized GCP spend through intelligent scheduling, replication monitoring and proactive task management.",
        ],
      },
      {
        client: "PSA Mumbai",
        points: [
          "Provided L2/L3 production support for cross-platform replication pipelines on Talend ETL, holding SLA compliance and high availability.",
          "Stabilized replication between IBM DB2 LUW sources and ODBC targets — resolved driver, endpoint and schema drift issues.",
          "Root-caused replication failures and built a post-incident runbook library to cut mean time to resolution.",
        ],
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst",
    period: "Feb 2022 — Nov 2022",
    blocks: [
      {
        client: null,
        points: [
          "Developed and optimized SQL queries and relational database structures across an MSSQL environment.",
          "Delivered structured, analysis-ready data for data warehousing and BI initiatives, working closely with cross-functional teams.",
        ],
      },
    ],
  },
];

const PROJECTS = [
  {
    title: "Medallion Lakehouse on GCP",
    description:
      "End-to-end Bronze → Silver → Gold pipeline for a financial enterprise — SCD Type 2 history, schema-evolving metadata-driven ingestion, and Cloud Composer orchestration with built-in data quality gates.",
    tags: ["BigQuery", "GCS", "Cloud Composer", "SCD Type 2"],
    repo: GITHUB_URL,
  },
  {
    title: "5,000-Table Cloud Migration",
    description:
      "Migrated 4 TB across 5,000+ Oracle and SQL Server tables to BigQuery with Talend, zero data loss, then rebuilt the transformation layer with partitioning and clustering for analytical speed.",
    tags: ["Talend ETL", "BigQuery", "Data Modeling", "Partitioning"],
  },
  {
    title: "Replication Reliability Program",
    description:
      "L2/L3 support for IBM DB2 LUW → ODBC replication. Resolved schema-drift and endpoint failures, and built a runbook library that cut mean time to resolution for the team.",
    tags: ["Talend ETL", "Qlik Replicate", "Incident Response"],
  },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                                */
/* ------------------------------------------------------------------ */

function PipelineNode({ taskId, label }) {
  const { t } = useContext(ThemeContext);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -70% 0px" });

  return (
    <div ref={ref} className="hidden md:flex absolute -left-16 top-1 flex-col items-start w-28">
      <div className="flex items-center gap-2">
        <motion.div
          animate={{
            scale: inView ? 1 : 0.85,
            backgroundColor: inView ? t.success : "transparent",
            borderColor: inView ? t.success : t.border,
          }}
          transition={{ duration: 0.4 }}
          className="w-3 h-3 rounded-full border-2 flex-shrink-0"
        />
        <span style={{ ...fontMono, color: t.textMuted, fontSize: "0.65rem" }} className="uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span style={{ ...fontMono, color: inView ? t.success : t.textMuted, fontSize: "0.65rem" }} className="ml-5 mt-0.5">
        {inView ? "success" : "queued"}
      </span>
      <span style={{ ...fontMono, color: t.textMuted, fontSize: "0.6rem" }} className="ml-5 opacity-70">
        {taskId}
      </span>
    </div>
  );
}

function Section({ id, taskId, label, children, className = "" }) {
  const { t } = useContext(ThemeContext);
  return (
    <section id={id} className={`relative md:ml-16 ${className}`}>
      <div
        className="hidden md:block absolute -left-16 top-0 bottom-0 w-px"
        style={{ background: t.border }}
      />
      <PipelineNode taskId={taskId} label={label} />
      {children}
    </section>
  );
}

function Eyebrow({ children }) {
  const { t } = useContext(ThemeContext);
  return (
    <div
      style={{ ...fontMono, color: t.bronze, fontSize: "0.75rem", letterSpacing: "0.15em" }}
      className="uppercase mb-4 flex items-center gap-2"
    >
      <span style={{ width: 24, height: 1, background: t.bronze, display: "inline-block" }} />
      {children}
    </div>
  );
}

function Tag({ children }) {
  const { t } = useContext(ThemeContext);
  return (
    <span
      style={{ ...fontMono, color: t.text, background: t.surface2, border: `1px solid ${t.border}`, fontSize: "0.7rem" }}
      className="px-2.5 py-1 rounded-md"
    >
      {children}
    </span>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                  */
/* ------------------------------------------------------------------ */

function Nav({ dark, setDark }) {
  const { t } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: dark ? "rgba(10,15,27,0.7)" : "rgba(241,243,248,0.7)", borderBottom: `1px solid ${t.border}` }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleClick("hero")} style={{ ...fontDisplay, color: t.text }} className="text-lg font-semibold tracking-tight">
          VD<span style={{ color: t.gold }}>.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              style={{ ...fontMono, color: t.textMuted, fontSize: "0.8rem" }}
              className="uppercase tracking-wider hover:opacity-100 transition-opacity"
              onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = t.textMuted)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle color theme"
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ border: `1px solid ${t.border}`, color: t.text }}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ border: `1px solid ${t.border}`, color: t.text }}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: `1px solid ${t.border}` }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              style={{ ...fontMono, color: t.textMuted, fontSize: "0.85rem" }}
              className="uppercase tracking-wider text-left pt-3"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  const { t } = useContext(ThemeContext);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* ambient geometric backdrop */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${t.gold}33, transparent 60%)` }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-40 -left-24 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle at 60% 60%, ${t.bronze}26, transparent 60%)` }}
        animate={{ scale: [1, 1.12, 1], rotate: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <FadeIn>
        <Eyebrow>Data Engineer · GCP · BigQuery · Talend</Eyebrow>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h1
          style={{ ...fontDisplay, color: t.text }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl"
        >
          I build pipelines that regulated finance can{" "}
          <span style={{ color: t.gold }}>audit, trust, and scale</span>.
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p style={{ ...fontBody, color: t.textMuted }} className="mt-6 text-base md:text-lg max-w-xl leading-relaxed">
          4+ years architecting ELT/ETL systems for banking and financial services —
          from Medallion lakehouses on BigQuery to zero-downtime migrations of
          5,000+ tables. Varshini Deekonda, based in Mumbai.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="mailto:deekondavarshini10@gmail.com"
            style={{ ...fontMono, background: t.gold, color: "#191305", fontSize: "0.85rem" }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-transform hover:-translate-y-0.5"
          >
            Email me <ArrowRight size={15} />
          </a>
          <a
            href="#"
            style={{ ...fontMono, color: t.text, border: `1px solid ${t.border}`, fontSize: "0.85rem" }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...fontMono, color: t.text, border: `1px solid ${t.border}`, fontSize: "0.85rem" }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
          >
            <Github size={15} /> GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

function About() {
  const { t } = useContext(ThemeContext);
  return (
    <Section id="about" taskId="extract_profile" label="Extract" className="px-6 md:px-8 max-w-5xl mx-auto pt-12 md:pt-20 pb-16">
      <FadeIn>
        <Eyebrow>About</Eyebrow>
        <h2 style={{ ...fontDisplay, color: t.text }} className="text-2xl md:text-4xl font-semibold tracking-tight max-w-2xl">
          Banks and lenders don't need more dashboards — they need data they
          can stand behind.
        </h2>
        <div style={{ ...fontBody, color: t.textMuted }} className="mt-6 space-y-4 max-w-2xl text-base leading-relaxed">
          <p>
            I work at the layer between messy source systems — Oracle, SQL Server,
            DB2, legacy replication feeds — and the BigQuery models that finance,
            risk and operations teams rely on every day. My focus is the
            unglamorous part that makes everything else possible: ingestion
            frameworks that survive schema drift, Medallion layers that keep a
            clean audit trail, and orchestration that fails loudly instead of
            silently.
          </p>
          <p>
            Most recently I've been building GCP-native pipelines for power
            and financial services clients — Bronze-to-Gold lakehouses with
            SCD Type 2 history, metadata-driven ingestion, and Cloud Composer
            DAGs with built-in data quality checks. Before that, I led the
            migration of a 4&nbsp;TB, 5,000-table estate into BigQuery without
            losing a single record.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                               */
/* ------------------------------------------------------------------ */

function Skills() {
  const { t } = useContext(ThemeContext);
  return (
    <Section id="skills" taskId="validate_stack" label="Validate" className="px-6 md:px-8 max-w-5xl mx-auto pb-16">
      <FadeIn>
        <Eyebrow>Stack</Eyebrow>
        <h2 style={{ ...fontDisplay, color: t.text }} className="text-2xl md:text-4xl font-semibold tracking-tight mb-10">
          The tools behind every pipeline.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SKILLS.map((group, i) => {
          const Icon = group.icon;
          return (
            <FadeIn key={group.title} delay={i * 0.08}>
              <div
                className="h-full p-6 rounded-2xl"
                style={{ background: t.surface, border: `1px solid ${t.border}`, boxShadow: t.shadow }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: t.surface2, color: t.gold }}
                >
                  <Icon size={18} />
                </div>
                <h3 style={{ ...fontDisplay, color: t.text }} className="text-base font-semibold mb-3">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Data Pipelines", "Data Migration (ETL)", "Data Quality"].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */

function Experience() {
  const { t } = useContext(ThemeContext);
  return (
    <Section id="experience" taskId="transform_history" label="Transform" className="px-6 md:px-8 max-w-5xl mx-auto pb-16">
      <FadeIn>
        <Eyebrow>Experience</Eyebrow>
        <h2 style={{ ...fontDisplay, color: t.text }} className="text-2xl md:text-4xl font-semibold tracking-tight mb-10">
          Where the pipelines were built.
        </h2>
      </FadeIn>

      <div className="space-y-10">
        {EXPERIENCE.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.08}>
            <div className="relative pl-6" style={{ borderLeft: `2px solid ${t.border}` }}>
              <div
                className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                style={{ background: t.bronze }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 style={{ ...fontDisplay, color: t.text }} className="text-lg md:text-xl font-semibold">
                  {job.role} · {job.company}
                </h3>
                <span style={{ ...fontMono, color: t.textMuted, fontSize: "0.75rem" }}>{job.period}</span>
              </div>

              <div className="mt-4 space-y-5">
                {job.blocks.map((block, bi) => (
                  <div key={bi}>
                    {block.client && (
                      <div style={{ ...fontMono, color: t.silver, fontSize: "0.75rem" }} className="uppercase tracking-wider mb-2">
                        {block.client}
                      </div>
                    )}
                    <ul className="space-y-2">
                      {block.points.map((point, pi) => (
                        <li
                          key={pi}
                          style={{ ...fontBody, color: t.textMuted }}
                          className="text-sm leading-relaxed flex gap-3"
                        >
                          <span style={{ color: t.gold }} className="mt-1.5 flex-shrink-0">
                            <Circle size={5} fill={t.gold} stroke="none" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                             */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, index }) {
  const { t } = useContext(ThemeContext);
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full p-6 rounded-2xl flex flex-col"
        style={{ background: t.surface, border: `1px solid ${t.border}`, boxShadow: t.shadow }}
      >
        <div
          className="w-full h-28 rounded-xl mb-5 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${t.bronze}22, ${t.gold}22)`,
            border: `1px solid ${t.border}`,
          }}
        >
          <Database size={28} style={{ color: t.gold }} />
        </div>

        <h3 style={{ ...fontDisplay, color: t.text }} className="text-lg font-semibold mb-2">
          {project.title}
        </h3>
        <p style={{ ...fontBody, color: t.textMuted }} className="text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto flex-wrap" style={{ borderTop: `1px solid ${t.border}`, paddingTop: "1rem" }}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...fontMono, color: t.gold, fontSize: "0.75rem" }}
              className="inline-flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Github size={13} /> Code
            </a>
          )}
          <a
            href="mailto:deekondavarshini10@gmail.com"
            style={{ ...fontMono, color: t.gold, fontSize: "0.75rem" }}
            className="inline-flex items-center gap-1.5 uppercase tracking-wider"
          >
            Discuss this <ArrowUpRight size={13} />
          </a>
          <a
            href="#"
            style={{ ...fontMono, color: t.textMuted, fontSize: "0.75rem" }}
            className="inline-flex items-center gap-1.5 uppercase tracking-wider"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.div>
    </FadeIn>
  );
}

function Projects() {
  const { t } = useContext(ThemeContext);
  return (
    <Section id="projects" taskId="load_engagements" label="Load" className="px-6 md:px-8 max-w-5xl mx-auto pb-16">
      <FadeIn>
        <Eyebrow>Engagements</Eyebrow>
        <h2 style={{ ...fontDisplay, color: t.text }} className="text-2xl md:text-4xl font-semibold tracking-tight mb-10">
          Selected pipelines &amp; migrations.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

function Contact() {
  const { t } = useContext(ThemeContext);
  return (
    <Section id="contact" taskId="serve_contact" label="Serve" className="px-6 md:px-8 max-w-5xl mx-auto pb-24 pt-4">
      <FadeIn>
        <div
          className="rounded-3xl p-8 md:p-14 text-center md:text-left"
          style={{ background: t.surface, border: `1px solid ${t.border}`, boxShadow: t.shadow }}
        >
          <Eyebrow>Connect</Eyebrow>
          <h2
            style={{ ...fontDisplay, color: t.text }}
            className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl mx-auto md:mx-0"
          >
            Have a pipeline that needs an owner?
          </h2>
          <p style={{ ...fontBody, color: t.textMuted }} className="mt-4 max-w-lg mx-auto md:mx-0 text-base leading-relaxed">
            Open to Senior Data Engineer roles across GCP, BigQuery and Talend —
            especially in banking, financial services and insurance.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row md:justify-start justify-center items-center gap-4">
            <a
              href="mailto:deekondavarshini10@gmail.com"
              style={{ ...fontMono, background: t.gold, color: "#191305", fontSize: "0.9rem" }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Mail size={16} /> deekondavarshini10@gmail.com
            </a>
            <a
              href="#"
              style={{ ...fontMono, color: t.text, border: `1px solid ${t.border}`, fontSize: "0.9rem" }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...fontMono, color: t.text, border: `1px solid ${t.border}`, fontSize: "0.9rem" }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="tel:+916303924569"
              style={{ ...fontMono, color: t.textMuted, fontSize: "0.9rem" }}
              className="inline-flex items-center gap-2 px-2 py-3.5 w-full sm:w-auto justify-center"
            >
              <Phone size={16} /> +91 6303924569
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  const { t } = useContext(ThemeContext);
  return (
    <footer className="px-6 md:px-8 max-w-5xl mx-auto pb-10">
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
        style={{ borderTop: `1px solid ${t.border}` }}
      >
        <span style={{ ...fontMono, color: t.textMuted, fontSize: "0.75rem" }}>
          © {new Date().getFullYear()} Varshini Deekonda
        </span>
        <span style={{ ...fontMono, color: t.textMuted, fontSize: "0.75rem" }} className="uppercase tracking-wider">
          pipeline status: all tasks success
        </span>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export function Portfolio() {
  const [dark, setDark] = useState(true);
  const t = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ t, dark }}>
      <div style={{ background: t.bg, color: t.text, minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
          * { scrollbar-width: thin; }
          html { scroll-behavior: smooth; }
          a, button { transition: color 0.2s ease, transform 0.2s ease; }
          a:focus-visible, button:focus-visible {
            outline: 2px solid ${t.gold};
            outline-offset: 2px;
          }
          @media (prefers-reduced-motion: reduce) {
            * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          }
        `}</style>

        <Nav dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
