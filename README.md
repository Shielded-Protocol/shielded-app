# shielded-app

**Live demo → [https://shielded-app-v353.vercel.app](https://shielded-app-v353.vercel.app)**

[![CI](https://github.com/Shielded-Protocol/shielded-app/actions/workflows/ci.yml/badge.svg)](https://github.com/Shielded-Protocol/shielded-app/actions/workflows/ci.yml)
[![Stellar Wave](https://img.shields.io/badge/Stellar-Wave-blue)](https://drips.network/wave/stellar)
[![Issues](https://img.shields.io/github/issues/Shielded-Protocol/shielded-app)](https://github.com/Shielded-Protocol/shielded-app/issues)

The web frontend for [Shielded Protocol](https://github.com/Shielded-Protocol) — private, compliant DeFi on Stellar. Lets users deposit tokens into a shielded pool, generate zero-knowledge withdrawal proofs entirely in the browser, and manage compliance with encrypted viewing keys.

---

## What this repo is

This is the user-facing application. It is a **Next.js 16** app (App Router, React 19, Tailwind CSS 4) deployed on Vercel.

Everything privacy-sensitive happens **client-side only**:
- ZK proofs are generated in the browser via WebAssembly (snarkjs)
- Shielded notes (your private balances) are stored in `localStorage`
- No balance data or secrets are ever sent to a server

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS 4 |
| Language | TypeScript 5 |
| Wallet | Freighter (Stellar browser extension) |
| ZK proving | snarkjs (WebAssembly, runs in-browser) |
| Package manager | pnpm |

---

## Pages

| Route | Description | Status |
|---|---|---|
| `/` | Landing page — project overview, connect wallet | ✅ Done |
| `/portfolio` | Private portfolio — shielded balances from local notes | ✅ Done |
| `/deposit` | Deposit flow — pick a token, enter amount, submit to pool | 🔧 In progress |
| `/withdraw` | Withdraw flow — step-by-step ZK proof generation + submission | ✅ Done |
| `/compliance` | Compliance dashboard — auditor view using a viewing key | 🔧 In progress |

---

## Running locally

**Prerequisites:** Node.js 20+, pnpm

```bash
git clone https://github.com/Shielded-Protocol/shielded-app
cd shielded-app
pnpm install

# Start the dev server
pnpm dev
# → http://localhost:3000

# Type check
pnpm typecheck

# Production build (same as Vercel runs)
pnpm build
```

> **Wallet:** Install the [Freighter browser extension](https://freighter.app) and switch it to Stellar Testnet before using the app.

---

## Key components

| Component | File | What it does |
|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Sticky navigation with mobile menu |
| `WalletConnect` | `components/WalletConnect.tsx` | Freighter wallet connect button |
| `ProofProgress` | `components/ProofProgress.tsx` | Animated step indicator for ZK proof generation |
| `ShieldedBalance` | `components/ShieldedBalance.tsx` | Reads private balance from local note storage |

---

## Privacy model

Shielded notes (your private balances) are stored in browser `localStorage` under the key `shielded:notes`.

```
Your device only
├── note.secret    ← random 31-byte scalar, never leaves the browser
├── note.amount    ← how much you deposited
├── note.nullifier ← used to spend the note; derived from secret
└── note.commitment← the on-chain fingerprint (safe to be public)
```

**What goes on-chain:** commitment hash, nullifier hash, Merkle root — nothing that reveals your balance or identity.

**v0.1.0 status:** `localStorage` is stored unencrypted. AES-GCM encryption derived from your Freighter wallet key is planned for v0.2.0.

---

## Deploying to Vercel

This app is pre-configured for Vercel. Connect the GitHub repo in the Vercel dashboard and it will deploy automatically on every push to `main`.

Manual deploy via CLI:

```bash
pnpm install -g vercel
vercel
```

No environment variables are required for the landing page. The `/deposit` and `/withdraw` flows will need the deployed contract address once the testnet launch is complete.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the contributor guide and PR checklist.

Browse [Wave-ready issues →](https://github.com/Shielded-Protocol/shielded-app/issues?q=label%3Astatus%3Awave-ready+state%3Aopen)

---

## Related repos

| Repo | Description |
|---|---|
| [shielded-sdk](https://github.com/Shielded-Protocol/shielded-sdk) | TypeScript SDK (`@shielded/core`, `@shielded/react`, `@shielded/compliance`) |
| [shielded-contracts](https://github.com/Shielded-Protocol/shielded-contracts) | Rust/Soroban smart contracts |
| [shielded-circuits](https://github.com/Shielded-Protocol/shielded-circuits) | Circom ZK circuits |
| [shielded-docs](https://github.com/Shielded-Protocol/shielded-docs) | Documentation site |

---

## License

MIT
