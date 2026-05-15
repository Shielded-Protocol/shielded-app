# shielded-app

**Live:** [https://shielded-app-v353.vercel.app](https://shielded-app-v353.vercel.app)

> Next.js 14 frontend for Shielded Protocol.

Part of [Shielded Protocol](https://github.com/Shielded-Protocol) —
private, compliant DeFi on Stellar.

[![CI](https://github.com/Shielded-Protocol/shielded-app/actions/workflows/ci.yml/badge.svg)](https://github.com/Shielded-Protocol/shielded-app/actions/workflows/ci.yml)
[![Stellar Wave](https://img.shields.io/badge/Stellar-Wave-blue)](https://drips.network/wave/stellar)
[![Issues](https://img.shields.io/github/issues/Shielded-Protocol/shielded-app)](https://github.com/Shielded-Protocol/shielded-app/issues)

---

## Routes

| Route | Description | Status |
|---|---|---|
| `/` | Landing page — connect wallet, navigate to flows | ✅ |
| `/portfolio` | Private portfolio — shielded positions from local storage | ✅ |
| `/deposit` | Deposit flow — token selector, amount input, lifecycle | 🔧 In progress |
| `/withdraw` | Withdraw flow — ZK proof generation UI, step progress | ✅ |
| `/compliance` | Compliance dashboard — auditor view with viewing key | 🔧 In progress |

---

## Quickstart

```bash
# Prerequisites: Node 20+, pnpm

git clone https://github.com/Shielded-Protocol/shielded-app
cd shielded-app
pnpm install

# Development
pnpm dev
# → http://localhost:3000

# Build
pnpm build

# Type check
pnpm typecheck
```

---

## Key components

| Component | Purpose |
|---|---|
| `ProofProgress` | Step-by-step ZK proof generation status with animated indicators |
| `WalletConnect` | Freighter wallet connection (scaffold — see issue #15) |
| `ShieldedBalance` | Private balance display from local note storage |
| `NoteManager` | Encrypted local storage for shielded notes |

---

## Privacy model

Shielded positions are stored in browser `localStorage`.
No balance data is ever sent to a server or exposed on-chain.
The ZK proof is generated client-side — your secret never leaves your device.

**Current state:** localStorage is unencrypted in v0.1.0.
Encryption using AES-GCM + wallet-derived key is planned for v0.2.0.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

Browse [Wave-ready issues](https://github.com/Shielded-Protocol/shielded-app/issues?q=label%3Astatus%3Awave-ready+state%3Aopen).

---

## License

MIT
