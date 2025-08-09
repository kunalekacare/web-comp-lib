# Web Component Library

A monorepo containing a comprehensive design system with Style Dictionary tokens and React components.

## Repository Structure

```
web-comp-lib/
├── MyStyleD/                    # @design-system/tokens
│   ├── tokens/                  # Design token definitions
│   ├── src/                     # Style Dictionary custom code
│   ├── build.js                 # Build script
│   └── config.js                # Style Dictionary configuration
├── design-system/               # @design-system/ui
│   ├── src/                     # React components
│   ├── docs/                    # Documentation
│   └── package.json             # UI package configuration
├── webapp/                      # Web application
│   ├── src/                     # Application source code
│   └── docs/                    # Application documentation
└── package.json                 # Workspace configuration
```

## Packages

### @design-system/tokens
Design tokens and build pipeline using Style Dictionary.

**Features:**
- Multi-brand support (patient/doctor)
- Multi-theme support (light/dark)
- Platform-specific outputs (CSS, iOS, Android)
- CSS custom properties generation

**Development:**
```bash
cd MyStyleD
npm install
npm run build
```

### @design-system/ui
React component library built with shadcn/ui and design tokens.

**Features:**
- Accessible React components
- TypeScript support
- Theme management utilities
- Design token integration

**Development:**
```bash
cd design-system
npm install
npm run build
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 8+

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd web-comp-lib

# Install dependencies for all packages
npm install

# Build tokens
npm run build:tokens

# Build UI components
npm run build:ui

# Build everything
npm run build:all
```

### Development Workflow

1. **Working on Tokens:**
   ```bash
   cd MyStyleD
   git checkout feature/design-system-integration
   # Make changes to tokens
   npm run build
   ```

2. **Working on UI Components:**
   ```bash
   cd design-system
   git checkout feature/ui-component-library
   # Make changes to components
   npm run build
   ```

3. **Working on Web App:**
   ```bash
   cd webapp
   # Make changes to application
   npm run dev
   ```

## Branch Strategy

- **main**: Production-ready code
- **feature/design-system-integration**: Style Dictionary and token development
- **feature/ui-component-library**: React component development
- **feature/workspace-setup**: Workspace configuration and tooling

## Build Process

### Token Pipeline
1. Style Dictionary processes JSON token files
2. Generates CSS custom properties
3. Creates platform-specific outputs
4. Outputs to `dist/tokens.css`

### Component Pipeline
1. TypeScript compilation
2. CSS module processing
3. Component bundling
4. Type definition generation

## Contributing

### For Token Changes
1. Work on `feature/design-system-integration` branch
2. Update token definitions in `MyStyleD/tokens/`
3. Test build process
4. Update documentation

### For Component Changes
1. Work on `feature/ui-component-library` branch
2. Follow component development guidelines
3. Add tests and documentation
4. Update component API if needed

### For Web App Changes
1. Work on appropriate feature branch
2. Integrate with design system packages
3. Test integration
4. Update documentation

## Scripts

### Workspace Scripts
- `npm run build:tokens` - Build design tokens
- `npm run build:ui` - Build UI components
- `npm run build:all` - Build everything
- `npm run dev:webapp` - Start web app development server

### Package Scripts
- `npm run build` - Build package
- `npm run test` - Run tests
- `npm run dev` - Start development server

## Documentation

- [Design System Documentation](design-system/docs/)
- [Token Documentation](MyStyleD/README.md)
- [Web App Documentation](webapp/docs/)

## License

MIT
