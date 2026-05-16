import Navbar from '@/components/Navbar';

/* ─── Inline SVG icon helpers ─────────────────────────────────────────── */

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeWidth="1.5" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function TreeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Section: Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start overflow-hidden pt-16 md:pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 hero-glow" />
      {/* Radial fade to keep edges dark */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-gray-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:py-12 lg:py-16 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
          Stellar Wave Program · Zero-Knowledge Privacy
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Private DeFi,{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">Public Chain.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 sm:mt-8 sm:text-xl">
          Shield your assets with zero-knowledge proofs on the Stellar blockchain —
          without sacrificing regulatory compliance. Your balance stays invisible.
          Your auditability stays intact.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href="/portfolio"
            className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 transition-all hover:shadow-emerald-400/30 hover:-translate-y-0.5"
          >
            Launch App
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
          >
            How it works
          </a>
        </div>

        {/* Trust chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:mt-14">
          {[
            'Groth16 · BN254',
            'Poseidon Hash',
            'Soroban Contracts',
            'Depth-20 Merkle Tree',
            'Open Source',
          ].map((tag) => (
            <span key={tag} className="text-xs font-medium text-gray-500 tracking-wide uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}

/* ─── Section: Stats bar ──────────────────────────────────────────────── */

function StatsBar() {
  const stats = [
    { value: '~26K', label: 'ZK circuit constraints', sub: 'withdraw proof' },
    { value: '2²⁰', label: 'Merkle tree depth', sub: '1M+ note capacity' },
    { value: '4', label: 'SDK packages', sub: 'TypeScript-first' },
    { value: '3', label: 'Soroban contracts', sub: 'commitment · verifier · compliance' },
  ];

  return (
    <section className="border-y border-white/5 bg-gray-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <dt className="text-4xl font-bold text-white tabular-nums">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium text-gray-300">{s.label}</dd>
              <dd className="text-xs text-gray-500 mt-0.5">{s.sub}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── Section: Features ───────────────────────────────────────────────── */

const features = [
  {
    icon: EyeOffIcon,
    title: 'Privacy by Default',
    description:
      'Every transaction is hidden behind a cryptographic commitment. Your balance, sender, and recipient are invisible to the public chain.',
  },
  {
    icon: ShieldIcon,
    title: 'Zero-Knowledge Proofs',
    description:
      'Client-side Groth16 proofs (BN254) generated in the browser. Your secrets never leave your device — only the proof goes on-chain.',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Regulatory Compliance',
    description:
      'Issue encrypted viewing keys to auditors for specific commitments. Meet KYC/AML requirements without exposing your full history.',
  },
  {
    icon: TreeIcon,
    title: 'Merkle Commitments',
    description:
      'A depth-20 Poseidon Merkle tree stores over one million commitments on-chain. Inclusion proofs reveal nothing about your position.',
  },
  {
    icon: LockIcon,
    title: 'Nullifier Protection',
    description:
      'Deterministic nullifiers prevent double-spending with zero linkability. Each note is spendable exactly once.',
  },
  {
    icon: ZapIcon,
    title: 'Stellar Native Speed',
    description:
      'Soroban smart contracts on Stellar deliver sub-5s finality at a fraction of the cost of Ethereum-based alternatives.',
  },
  {
    icon: KeyIcon,
    title: 'Viewing Key Grants',
    description:
      'Grant auditors access to specific transaction details. Revocable, per-commitment key grants keep you in control.',
  },
  {
    icon: CodeIcon,
    title: 'Open Source SDK',
    description:
      'Four TypeScript packages: @shielded/core, @shielded/react, @shielded/compliance. Build private DeFi on top of Shielded.',
  },
];

function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            Core Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything privacy needs.{' '}
            <span className="text-gray-400">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Shielded Protocol combines ZK cryptography, regulatory tooling, and
            Stellar&apos;s speed into a single composable stack.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-glass rounded-2xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                <f.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: How it works ───────────────────────────────────────────── */

const steps = [
  {
    number: '01',
    icon: LockIcon,
    title: 'Deposit',
    description:
      'Send tokens to the Shielded pool. A Poseidon commitment hash is computed from your secret and amount, then inserted into the on-chain Merkle tree.',
    detail: 'Commitment = Poseidon(secret, amount, tokenId)',
  },
  {
    number: '02',
    icon: EyeOffIcon,
    title: 'Shield',
    description:
      'Your private note is stored locally in your browser. No server ever sees your secret. Your shielded balance is invisible to block explorers.',
    detail: 'Zero server-side storage · Client-side only',
  },
  {
    number: '03',
    icon: ShieldIcon,
    title: 'Withdraw',
    description:
      'Generate a Groth16 proof off-chain that you know a valid note in the tree. Submit the proof on-chain — the verifier confirms it without learning which note.',
    detail: 'Public signals: root · nullifier · recipient',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three steps to financial privacy
          </h2>
          <p className="mt-4 text-gray-400">
            The lifecycle of a shielded transaction, from deposit to withdrawal,
            all without revealing your identity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[calc(33.3%+1rem)] right-[calc(33.3%+1rem)] h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-emerald-500/30" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Step number + icon */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-900 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                  <step.icon className="h-6 w-6 text-emerald-400" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-emerald-500 font-mono font-semibold tracking-widest">
                    STEP {step.number}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
              </div>

              {/* Content card */}
              <div className="card-glass rounded-2xl p-6 flex-1">
                <p className="text-sm leading-7 text-gray-400">{step.description}</p>
                <div className="mt-4 rounded-lg bg-gray-950/60 px-4 py-2.5 border border-white/5">
                  <code className="text-xs font-mono text-emerald-300/80">{step.detail}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Architecture ───────────────────────────────────────────── */

const layers = [
  {
    name: 'Frontend',
    badge: 'Next.js · React · Tailwind',
    items: ['Wallet connection (Freighter)', 'Proof progress UI', 'Private portfolio viewer', 'Compliance dashboard'],
    color: 'from-blue-500/10 to-blue-500/5',
    borderColor: 'border-blue-500/15',
    badgeColor: 'text-blue-400',
  },
  {
    name: 'TypeScript SDK',
    badge: '@shielded/core · react · compliance',
    items: ['createNote() · serializeNote()', 'useDeposit() · useWithdraw()', 'ShieldedProvider context', 'Viewing key management'],
    color: 'from-violet-500/10 to-violet-500/5',
    borderColor: 'border-violet-500/15',
    badgeColor: 'text-violet-400',
  },
  {
    name: 'ZK Circuits',
    badge: 'Circom 2 · Groth16 · BN254',
    items: ['withdraw.circom (~26K constraints)', 'deposit.circom (~200 constraints)', 'merkle_proof.circom (~24K)', 'nullifier_hash.circom (~100)'],
    color: 'from-emerald-500/10 to-emerald-500/5',
    borderColor: 'border-emerald-500/15',
    badgeColor: 'text-emerald-400',
  },
  {
    name: 'Smart Contracts',
    badge: 'Rust · Soroban · Stellar',
    items: ['commitment-pool (deposits/withdrawals)', 'groth16-verifier (on-chain proofs)', 'compliance-registry (viewing keys)', 'proxy-blend (Blend integration)'],
    color: 'from-orange-500/10 to-orange-500/5',
    borderColor: 'border-orange-500/15',
    badgeColor: 'text-orange-400',
  },
];

function Architecture() {
  return (
    <section id="architecture" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            Architecture
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Four specialized layers
          </h2>
          <p className="mt-4 text-gray-400">
            A monorepo of purpose-built packages — each independently auditable,
            each composable with your existing stack.
          </p>
        </div>

        {/* Layer cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className={`rounded-2xl border ${layer.borderColor} bg-gradient-to-b ${layer.color} p-6`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest ${layer.badgeColor} mb-1`}>
                {layer.badge}
              </p>
              <h3 className="text-base font-semibold text-white mb-4">{layer.name}</h3>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                    <code className="font-mono text-xs text-gray-400 leading-5">{item}</code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proving system callout */}
        <div className="mt-8 rounded-2xl border border-white/5 bg-gray-900/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
            <ShieldIcon className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">Proving System: Groth16 on BN254</p>
            <p className="text-sm text-gray-400 mt-0.5">
              Constant-size proofs (3 points on BN254) and O(1) on-chain verification via Stellar&apos;s
              native BN254 host functions. Trusted setup via Hermez ceremony.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            Read whitepaper
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Open Source CTA ────────────────────────────────────────── */

function OpenSourceCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl animate-glow-pulse" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-emerald-500/15 bg-gradient-to-b from-emerald-500/5 to-transparent p-12 lg:p-16">
          {/* Stellar Wave badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-400 mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-emerald-400">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8l4 4-4 4" />
            </svg>
            Stellar Wave Program · Community Open Source
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built in public.
            <br />
            <span className="gradient-text">Auditable by design.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400 leading-7">
            Every circuit, contract, and SDK package is open source. Audit the cryptography,
            contribute to the protocol, or build the next private DeFi primitive on top
            of Shielded.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/shielded-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-white/10 border border-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-all hover:-translate-y-0.5"
            >
              <GitHubIcon className="h-5 w-5" />
              View on GitHub
            </a>
            <a
              href="/portfolio"
              className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all hover:-translate-y-0.5"
            >
              Launch App
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Contributing tracks */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { label: 'ZK Circuit Track', color: 'text-emerald-400', desc: 'Circom circuits, constraint optimization, trusted setup' },
              { label: 'Contract Track', color: 'text-blue-400', desc: 'Rust / Soroban smart contract development' },
              { label: 'Frontend Track', color: 'text-violet-400', desc: 'Next.js UI, React hooks, wallet integrations' },
            ].map((track) => (
              <div key={track.label} className="rounded-xl border border-white/5 bg-white/3 p-4">
                <p className={`text-xs font-semibold uppercase tracking-widest ${track.color} mb-1`}>
                  {track.label}
                </p>
                <p className="text-xs text-gray-500 leading-5">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section: Footer ─────────────────────────────────────────────────── */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <ShieldIcon className="h-6 w-6 text-emerald-400" />
            <span className="text-sm font-semibold text-white">
              Shielded <span className="text-emerald-400">Protocol</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Architecture', href: '#architecture' },
              { label: 'GitHub', href: 'https://github.com/shielded-protocol', external: true },
              { label: 'Security', href: 'https://github.com/shielded-protocol', external: true },
            ].map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  {l.label}
                </a>
              ) : (
                <a key={l.label} href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                  {l.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {year} Shielded Protocol. Open source under MIT license.
          </p>
          <p className="text-xs text-gray-600">
            Built on Stellar &middot; Powered by Zero-Knowledge Proofs
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page root ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Architecture />
      <OpenSourceCTA />
      <Footer />
    </div>
  );
}
