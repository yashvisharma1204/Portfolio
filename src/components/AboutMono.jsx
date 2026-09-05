import React from 'react';
import {
    Calendar,
    Mail,
    Github,
    Linkedin,
    Bot,
    Brain,
    Package,
    Cpu,
    GitFork,
    Heart,
    Microscope,
    TrendingUp,
    GitPullRequest,
    Tv,
    Rabbit,
    Puzzle,
    BookOpen,
    FileText,
} from 'lucide-react';
import ContributionHeatmap from './ContributionHeatmap';
import ThemeToggle from './ThemeToggle';
import { motion, useReducedMotion } from 'framer-motion';

// Pre-bind the motion element so it's referenced as a value (lint-friendly).
const MotionSection = motion.section;

// Shared class fragments for consistent light/dark rhythm.
const PILL =
    'inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-800 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700';
const CARD =
    'h-full rounded-xl border border-gray-200 p-4 transition-colors hover:border-gray-400 dark:border-neutral-700 dark:hover:border-neutral-500';
const BODY = 'text-[15px] leading-relaxed text-gray-700 dark:text-neutral-300';
const LINK =
    'text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-200';

// Fade-and-rise reveal when a section scrolls into view (respects reduced motion).
const Reveal = ({ children, className = '' }) => {
    const reduce = useReducedMotion();
    return (
        <MotionSection
            className={className}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </MotionSection>
    );
};

// Colored language/framework icon from the devicon set.
const DevIcon = ({ name, className = '' }) => (
    <i className={`devicon-${name} colored ${className}`} aria-hidden="true" />
);

// Section label — tracked-out uppercase, doubles as an anchor target.
const SectionLabel = ({ children, id }) => (
    <h2
        id={id}
        className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-neutral-400"
    >
        {children}
    </h2>
);

const StatusTag = ({ tone, children }) => {
    const tones = {
        active: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
        sold: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
        archived: 'bg-gray-100 text-gray-500 dark:bg-neutral-800 dark:text-neutral-400',
    };
    return (
        <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${tones[tone] || tones.archived}`}>
            {children}
        </span>
    );
};

const ProjectCard = ({ icon: Icon, title, status, tone, href, children }) => {
    const inner = (
        <div className={CARD}>
            <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-gray-800 dark:text-neutral-200" strokeWidth={1.75} />
                <h3 className="text-base font-semibold text-gray-900 dark:text-neutral-100">{title}</h3>
                {status ? <StatusTag tone={tone}>{status}</StatusTag> : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-neutral-400">{children}</p>
        </div>
    );
    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
        >
            {inner}
        </a>
    ) : (
        inner
    );
};

const openSourceContributions = [
    {
        org: 'Checkstyle',
        devicon: 'java-plain',
        avatar: 'https://github.com/checkstyle.png',
        items: [
            {
                id: '#18931',
                kind: 'Issue',
                state: 'open',
                title: 'Example of validation for Large Constant Collection',
                href: 'https://github.com/checkstyle/checkstyle/issues/18931',
            },
            {
                id: '#21478',
                kind: 'Issue',
                state: 'open',
                title:
                    'SuppressWarningsCheck: StringIndexOutOfBoundsException on string concatenation or cast inside a ternary in @SuppressWarnings',
                href: 'https://github.com/checkstyle/checkstyle/issues/21478',
            },
        ],
    },
    {
        org: 'Skore (:probabl.)',
        devicon: 'scikitlearn-original',
        avatar: 'https://github.com/probabl-ai.png',
        items: [
            {
                id: '#3229',
                kind: 'PR',
                state: 'merged',
                title: 'test(checks): Increase coverage for CheckNotApplicable cases',
                href: 'https://github.com/probabl-ai/skore/pull/3229',
            },
            {
                id: '#2948',
                kind: 'PR',
                state: 'merged',
                title:
                    'fix(skore/checks): Prevent memory bottleneck in CheckCorrelatedFeatures for high-dimensional data',
                href: 'https://github.com/probabl-ai/skore/pull/2948',
            },
        ],
    },
    {
        org: 'pgmpy',
        devicon: 'python-plain',
        avatar: 'https://github.com/pgmpy.png',
        items: [
            {
                id: '#3552',
                kind: 'Issue',
                state: 'open',
                title: '[ENH] Add Likelihood Weighting (Importance Sampling) to ApproxInference',
                href: 'https://github.com/pgmpy/pgmpy/issues/3552',
            },
        ],
    },
];

const techStack = [
    { devicon: 'react-original', label: 'React' },
    { devicon: 'python-plain', label: 'Python' },
    { devicon: 'java-plain', label: 'Java' },
    { devicon: 'spring-plain', label: 'Spring Boot' },
    { lucide: Bot, label: 'Agentic AI' },
    { devicon: 'pytorch-original', label: 'PyTorch' },
    { devicon: 'scikitlearn-original', label: 'scikit-learn' },
    { devicon: 'amazonwebservices-original', label: 'AWS' },
    { devicon: 'tailwindcss-original', label: 'Tailwind' },
];

const interests = [
    { icon: Brain, label: 'deep learning' },
    { icon: Microscope, label: 'interpretability' },
    { icon: TrendingUp, label: 'optimization' },
    { icon: GitPullRequest, label: 'open source' },
];

const outsideTech = [
    { icon: Tv, label: 'binge watching' },
    { icon: Rabbit, label: 'research rabbit holes' },
    { icon: Puzzle, label: 'strategy games' },
];

const BLOG_URL = 'https://yashvisharma1204.github.io/neural.y/';

const writing = [
    { tag: 'Paper Breakdown', title: 'Attention Is All You Need' },
    { tag: 'Agentic AI', title: 'Research Agent' },
    { tag: 'Model Compression', title: 'Shrinking DistilBERT' },
];

const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/yashvisharma1204' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yashvisharma1204' },
];

// Reusable pill for icon + label lists.
const IconPill = ({ children }) => <span className={PILL}>{children}</span>;

const About = () => {
    return (
        <div className="min-h-screen w-full bg-white font-mono text-gray-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gray-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
            >
                Skip to content
            </a>

            {/* Top bar */}
            <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-8">
                <span className="text-lg font-bold tracking-tight">
                    <span className="text-gray-400 dark:text-neutral-500">//</span> YS
                </span>
                <div className="flex items-center gap-2">
                    <a
                        href={BLOG_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                        <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                        neural.y
                    </a>
                    <ThemeToggle />
                </div>
            </header>

            <main id="main" className="mx-auto max-w-4xl px-6 pb-24">
                {/* Hero */}
                <section aria-labelledby="hero-name">
                    <img
                        src="idk.jpg"
                        alt="Portrait of Yashvi Sharma"
                        className="h-16 w-16 rounded-full object-cover"
                    />

                    <h1 id="hero-name" className="mt-6 text-2xl font-bold">
                        Hey, I&rsquo;m{' '}
                        <a
                            href="https://linkedin.com/in/yashvisharma1204"
                            className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-neutral-200 dark:decoration-neutral-600"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Yashvi Sharma
                        </a>
                        !
                    </h1>

                    <div className={`mt-4 space-y-1.5 ${BODY}`}>
                        <p>Third year B.Tech CSE (AI &amp; Data Engineering) student at LPU 🇮🇳</p>
                        <p>
                            SDE Intern <span className="text-gray-900 dark:text-neutral-100">@ Nielsen</span> ·
                            Ex-Data Science Intern{' '}
                            <span className="text-gray-900 dark:text-neutral-100">@ Futurense Technologies</span>
                        </p>
                        <p>
                            Currently exploring{' '}
                            <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-1.5 py-0.5 align-middle dark:bg-neutral-800">
                                <DevIcon name="pytorch-original" className="text-[13px]" />
                                Machine Learning
                            </span>
                            , NLP, backend systems &amp; scalable design, and{' '}
                            <span className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-1.5 py-0.5 align-middle dark:bg-neutral-800">
                                <Bot className="h-3.5 w-3.5 text-gray-600 dark:text-neutral-300" strokeWidth={1.75} />
                                Agentic AI
                            </span>
                            .
                        </p>
                        <p>
                            Looking for research fellowships &amp; mentorships where I can contribute to
                            meaningful ML work and grow as a researcher.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="mailto:yashvi.sharma1204@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
                        >
                            <Mail className="h-4 w-4" strokeWidth={1.75} />
                            Send an email
                        </a>
                        <a
                            href="https://linkedin.com/in/yashvisharma1204"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                        >
                            <Calendar className="h-4 w-4" strokeWidth={1.75} />
                            Connect on LinkedIn
                        </a>
                    </div>

                    <p className="mt-5 flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                        Open to research fellowships &amp; ML collaboration.
                    </p>

                    {/* Interests + Outside tech pills */}
                    <div className="mt-8 space-y-4">
                        <div>
                            <SectionLabel>Interests</SectionLabel>
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {interests.map((it) => (
                                    <li key={it.label}>
                                        <IconPill>
                                            <it.icon
                                                className="h-3.5 w-3.5 text-gray-500 dark:text-neutral-400"
                                                strokeWidth={1.75}
                                                aria-hidden="true"
                                            />
                                            {it.label}
                                        </IconPill>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <SectionLabel>Outside Tech</SectionLabel>
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {outsideTech.map((it) => (
                                    <li key={it.label}>
                                        <IconPill>
                                            <it.icon
                                                className="h-3.5 w-3.5 text-gray-500 dark:text-neutral-400"
                                                strokeWidth={1.75}
                                                aria-hidden="true"
                                            />
                                            {it.label}
                                        </IconPill>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Tech Stack */}
                <Reveal className="mt-16">
                    <SectionLabel>Tech Stack</SectionLabel>
                    <p className={`mt-3 ${BODY}`}>The tools I reach for across research and side projects:</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {techStack.map((t) => (
                            <li key={t.label}>
                                <IconPill>
                                    {t.devicon ? (
                                        <DevIcon name={t.devicon} className="text-[15px]" />
                                    ) : (
                                        <t.lucide
                                            className="h-3.5 w-3.5 text-gray-600 dark:text-neutral-300"
                                            strokeWidth={1.75}
                                            aria-hidden="true"
                                        />
                                    )}
                                    {t.label}
                                </IconPill>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Projects */}
                <Reveal className="mt-16">
                    <SectionLabel>Projects</SectionLabel>
                    <p className={`mt-3 ${BODY}`}>A selection of things I&rsquo;ve built, both past and ongoing:</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <ProjectCard icon={Bot} title="Research Agent" status="Active" tone="active" href="https://github.com/yashvisharma1204/research-agent">
                            A self-evolving research agent — a knowledge graph that reads and learns while you sleep.
                        </ProjectCard>
                        <ProjectCard icon={Brain} title="neural.y" status="Active" tone="active" href="https://github.com/yashvisharma1204/neural.y">
                            Neural networks research — building and studying architectures from scratch.
                        </ProjectCard>
                        <ProjectCard icon={Cpu} title="JobSyncPro" status="Shipped" tone="sold" href="https://github.com/yashvisharma1204/JobSyncPro">
                            Hybrid job-matching engine (70% AI semantic + 30% keyword) with 90% alignment accuracy.
                        </ProjectCard>
                        <ProjectCard icon={Cpu} title="Fraud Detection" status="Shipped" tone="sold" href="https://github.com/yashvisharma1204/financial_fraud_detection">
                            Scalable fraud detection on Apache Spark + AWS EMR for distributed ML inference.
                        </ProjectCard>
                        <ProjectCard icon={Package} title="Pantry Insight" status="Shipped" tone="sold" href="https://github.com/yashvisharma1204/PantryInsight">
                            Smart inventory manager tracking stock, expiry dates &amp; shopping lists.
                        </ProjectCard>
                        <ProjectCard icon={Bot} title="Medical Assistant" status="Shipped" tone="sold" href="https://github.com/yashvisharma1204/Medical_assitance_system_OpenAIapi">
                            LangChain + OpenAI system predicting conditions and suggesting remedies from symptoms.
                        </ProjectCard>
                    </div>
                </Reveal>

                {/* Writing */}
                <Reveal className="mt-16">
                    <SectionLabel>Writing</SectionLabel>
                    <p className={`mt-3 ${BODY}`}>
                        I write about ML papers, experiments, and things I build on{' '}
                        <a href={BLOG_URL} target="_blank" rel="noreferrer" className={LINK}>
                            neural.y
                        </a>
                        :
                    </p>
                    <ol className={`mt-4 space-y-2 ${BODY}`}>
                        {writing.map((w, i) => (
                            <li key={w.title} className="flex gap-2">
                                <span className="text-gray-400 dark:text-neutral-500">{i + 1}.</span>
                                <span>
                                    <span className="font-semibold text-gray-900 dark:text-neutral-100">{w.title}</span>
                                    <span className="text-gray-500 dark:text-neutral-400"> — {w.tag}</span>
                                </span>
                            </li>
                        ))}
                    </ol>
                    <a
                        href={BLOG_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-neutral-100 dark:hover:text-neutral-400"
                    >
                        Read all on neural.y &rarr;
                    </a>
                </Reveal>

                {/* Open Source */}
                <Reveal className="mt-16">
                    <SectionLabel>Open Source</SectionLabel>
                    <p className={`mt-3 ${BODY}`}>Issues &amp; PRs I&rsquo;ve raised for open-source organizations:</p>

                    <ContributionHeatmap />

                    <ul className="mt-6 flex flex-col gap-2">
                        {openSourceContributions.flatMap((org) =>
                            org.items.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-gray-200 p-3 transition-colors hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 dark:border-neutral-700 dark:hover:border-neutral-500"
                                    >
                                        {org.avatar ? (
                                            <img
                                                src={org.avatar}
                                                alt=""
                                                loading="lazy"
                                                className="h-5 w-5 shrink-0 rounded-full object-cover"
                                            />
                                        ) : (
                                            <DevIcon name={org.devicon} className="shrink-0 text-[15px]" />
                                        )}
                                        <span className="shrink-0 text-sm font-semibold text-gray-900 dark:text-neutral-100">
                                            {org.org}
                                        </span>
                                        <span className="shrink-0 text-sm font-semibold text-gray-500 dark:text-neutral-400">
                                            {item.id}
                                        </span>
                                        <span
                                            className={`shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-medium ${
                                                item.state === 'merged'
                                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                                                    : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                                            }`}
                                        >
                                            {item.kind} · {item.state === 'merged' ? 'Merged' : 'Open'}
                                        </span>
                                        <span className="w-full text-sm leading-snug text-gray-600 dark:text-neutral-400 sm:w-auto sm:flex-1">
                                            {item.title}
                                        </span>
                                    </a>
                                </li>
                            ))
                        )}
                    </ul>
                </Reveal>

                {/* Find me on */}
                <Reveal className="mt-16">
                    <SectionLabel>Find me on</SectionLabel>
                    <p className={`mt-3 ${BODY}`}>You can find me on the following platforms:</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a href={s.href} target="_blank" rel="noreferrer">
                                    <IconPill>
                                        <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                                        {s.label}
                                    </IconPill>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Get in touch */}
                <Reveal className="mt-16">
                    <SectionLabel>Get in touch</SectionLabel>
                    <address className={`mt-3 not-italic ${BODY}`}>
                        <p>
                            You can reach me anytime at{' '}
                            <a href="mailto:yashvi.sharma1204@gmail.com" className={LINK}>
                                yashvi.sharma1204@gmail.com
                            </a>
                        </p>
                        <p className="mt-1.5">
                            Or connect with me on{' '}
                            <a href="https://linkedin.com/in/yashvisharma1204" target="_blank" rel="noreferrer" className={LINK}>
                                LinkedIn
                            </a>
                        </p>
                    </address>
                </Reveal>
            </main>

            {/* Footer */}
            <footer className="mx-auto flex max-w-4xl flex-col gap-2 border-t border-gray-100 px-6 py-8 text-sm text-gray-500 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-1.5">
                    © 2025 Built with{' '}
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label="love" /> by Yashvi
                </span>
                <a
                    href="https://github.com/yashvisharma1204"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 underline decoration-gray-300 underline-offset-4 hover:text-gray-900 dark:decoration-neutral-600 dark:hover:text-neutral-200"
                >
                    This website is open-source <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
            </footer>
        </div>
    );
};

export default About;
