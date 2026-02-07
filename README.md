# Chef Mind 🍳

Chef Mind is a recipe-sharing platform where users can explore, create, and share recipes.
The project is built as a **monorepo** using **Turborepo**, with a web app and a mobile app
sharing common code.

---

## Tech Stack

- **Web**: Next.js (React)
- **Mobile**: Expo (React Native)
- **Monorepo**: Turborepo + pnpm workspaces
- **Language**: TypeScript
- **Shared Code**: API client, types, UI components

---

## Repository Structure

```
chef-mind/
├── apps/
│   ├── web/        # Next.js web application
│   └── mobile/     # Expo mobile application
│
├── packages/
│   ├── api/        # Shared API client (used by web & mobile)
│   ├── types/      # Shared TypeScript types
│   └── ui/         # Shared UI components
│
├── turbo.json
├── tsconfig.base.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Install dependencies for all apps and packages
pnpm install
```

---

## Commands

```bash
# Run all apps in development mode
pnpm dev

# Build all apps
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint
```

### Web App

```bash
cd apps/web
pnpm dev
```

### Mobile App

```bash
cd apps/mobile
pnpm expo start
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License.
