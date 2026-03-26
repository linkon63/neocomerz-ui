# NeoComerz UI — Development & Publishing Guide

## 📁 Project Structure

```
neocomerz-ui/
├── src/                  # Library source code
│   ├── ui/               # All UI components
│   ├── index.ts          # Main entry point (exports)
│   └── declarations.d.ts # Image type declarations
├── preview/              # Next.js preview app
│   └── app/page.tsx      # Component showcase page
├── dist/                 # Built output (auto-generated)
├── package.json
└── README.md
```

---

## 🚀 Development (Preview Components)

```bash
# 1. Install dependencies
pnpm install

# 2. Start preview server
pnpm dev

# 3. Open browser
# http://localhost:3000 (or 3001 if 3000 is busy)
```

এটা `preview/` ফোল্ডারের Next.js app চালায় যেখানে সব component দেখা যায়।

---

## 🔨 Build Library

```bash
pnpm run build
```

এটা `dist/` ফোল্ডারে CJS, ESM, এবং TypeScript declarations generate করে।

---

## 📦 NPM এ Publish করার ধাপ

### প্রথমবার (One-time Setup)

```bash
# 1. NPM account তৈরি করো (যদি না থাকে)
#    https://www.npmjs.com/signup

# 2. Terminal থেকে login করো
npm login

# 3. Username, password, email দাও
# 4. OTP verify করো (email এ আসবে)
```

### প্রতিবার Publish করতে

```bash
# 1. Version update করো
npm version patch     # 1.0.3 → 1.0.4 (bug fix)
# অথবা
npm version minor     # 1.0.3 → 1.1.0 (new feature)
# অথবা
npm version major     # 1.0.3 → 2.0.0 (breaking change)

# 2. Build করো
pnpm run build

# 3. Publish করো
npm publish

# 4. Git push করো
git push && git push --tags
```

### Publish Verify

```bash
# Published package দেখো
npm info neocomerz-storefront-ui
```

---

## 📥 অন্য Project এ Use করা

```bash
# Install
npm install neocomerz-storefront-ui

# Import
import { Hero, PrimaryButton } from 'neocomerz-storefront-ui';
```

---

## ⚠️ গুরুত্বপূর্ণ Note

- `dist/` ফোল্ডার git এ push হয় না (`.gitignore` এ আছে)
- Publish করার আগে অবশ্যই `pnpm run build` দিতে হবে
- `preview/` ফোল্ডার শুধু development এর জন্য, publish হয় না
- Package name: **neocomerz-storefront-ui**
