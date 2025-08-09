# Versioning and Release

This document outlines our versioning strategy, release process, and changelog management.

## Semantic Versioning

We follow [Semantic Versioning 2.0.0](https://semver.org/) (SemVer) for all releases:

### Version Format: `MAJOR.MINOR.PATCH`

- **MAJOR** (x.0.0): Breaking changes to component APIs
- **MINOR** (0.x.0): New features, components, or tokens (backward compatible)
- **PATCH** (0.0.x): Bug fixes and documentation updates

### Version Rules

#### Major Version (Breaking Changes)
- Component prop changes (removal, renaming, type changes)
- Token removal or renaming
- CSS class name changes
- Build output format changes
- Minimum dependency version increases

#### Minor Version (New Features)
- New components
- New component variants
- New tokens
- New utility functions
- Enhanced accessibility features
- Performance improvements

#### Patch Version (Bug Fixes)
- Bug fixes in existing components
- Documentation updates
- Build process improvements
- Dependency updates (non-breaking)

## Release Workflow

### Pre-Release Checklist
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] Changelog is prepared
- [ ] Version is updated in `package.json`
- [ ] Build artifacts are generated
- [ ] Visual regression tests pass

### Release Process

#### 1. Prepare Release
```bash
# Update version
npm version [major|minor|patch]

# Build the package
npm run build

# Run tests
npm run test
npm run test:visual
```

#### 2. Create Release Notes
- Update `CHANGELOG.md`
- Include breaking changes prominently
- List new features and improvements
- Note any migration steps

#### 3. Publish
```bash
# Publish to npm
npm publish

# Create GitHub release
gh release create v1.2.3 --notes-file CHANGELOG.md
```

#### 4. Communicate Changes
- Notify consumers of breaking changes
- Update internal documentation
- Share release notes in team channels

## Prereleases

### Beta Releases
For testing new features before stable release:
```bash
npm version prerelease --preid=beta
npm publish --tag beta
```

### Alpha Releases
For early development testing:
```bash
npm version prerelease --preid=alpha
npm publish --tag alpha
```

### Release Candidate
For final testing before stable release:
```bash
npm version prerelease --preid=rc
npm publish --tag rc
```

## Changelog Rules

### Changelog Format
We follow the [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.2.0] - 2024-01-15

### Added
- New `LoginCard` component
- Support for dark theme variants
- Additional color tokens

### Changed
- Updated `Button` component API for better accessibility
- Improved focus management in modal components

### Deprecated
- `OldComponent` - use `NewComponent` instead

### Removed
- Removed deprecated `LegacyComponent`

### Fixed
- Fixed keyboard navigation in `Select` component
- Resolved color contrast issues in dark theme

### Security
- Updated dependencies to address security vulnerabilities
```

### Changelog Guidelines

#### Entry Categories
- **Added**: New features, components, or tokens
- **Changed**: Changes to existing functionality
- **Deprecated**: Features that will be removed in future versions
- **Removed**: Features that have been removed
- **Fixed**: Bug fixes
- **Security**: Security-related changes

#### Entry Format
- Use present tense ("Add" not "Added")
- Start with a capital letter
- End without a period
- Be specific and descriptive
- Reference issue numbers when applicable

#### Examples
```markdown
### Added
- New `LoginCard` component with social login support
- Support for custom theme tokens via CSS variables
- Accessibility improvements for screen readers

### Changed
- Updated `Button` component to use new token system
- Improved error handling in form components
- Enhanced TypeScript types for better developer experience

### Fixed
- Fixed focus trap in modal components
- Resolved color contrast issues in dark theme
- Fixed keyboard navigation in dropdown components
```

## Breaking Changes

### Definition
A breaking change is any change that:
- Removes or renames public APIs
- Changes the behavior of existing APIs
- Requires consumers to update their code
- Changes build output format

### Breaking Change Process

#### 1. Planning
- Identify the breaking change
- Assess impact on consumers
- Plan migration strategy
- Set timeline for deprecation

#### 2. Deprecation
- Add deprecation warnings
- Update documentation
- Provide migration guide
- Communicate to consumers

#### 3. Release
- Increment major version
- Update changelog with breaking changes
- Provide migration guide
- Support previous version for reasonable time

### Migration Guide Template
```markdown
## Migration Guide v2.0.0

### Breaking Changes

#### Component API Changes

**Before:**
```jsx
<Button variant="default" size="medium">
  Click me
</Button>
```

**After:**
```jsx
<Button variant="primary" size="md">
  Click me
</Button>
```

#### Token Changes

**Before:**
```css
color: var(--color-blue-500);
```

**After:**
```css
color: var(--color-primary-500);
```

### Migration Steps
1. Update component prop names
2. Replace deprecated tokens
3. Update import statements
4. Test thoroughly
5. Update documentation
```

## Release Schedule

### Regular Releases
- **Patch releases**: As needed for bug fixes
- **Minor releases**: Monthly for new features
- **Major releases**: Quarterly or as needed for breaking changes

### Release Calendar
- Week 1: Feature freeze and testing
- Week 2: Documentation and changelog
- Week 3: Release and communication
- Week 4: Monitoring and feedback

## Quality Gates

### Automated Checks
- [ ] All unit tests pass
- [ ] Visual regression tests pass
- [ ] Accessibility tests pass
- [ ] Build succeeds without warnings
- [ ] Bundle size within limits
- [ ] No security vulnerabilities

### Manual Checks
- [ ] Documentation is complete and accurate
- [ ] Changelog follows guidelines
- [ ] Breaking changes are documented
- [ ] Migration guide is provided
- [ ] Release notes are clear

## Rollback Plan

### Emergency Rollback
If a release causes issues:
1. Immediately unpublish the problematic version
2. Revert to previous stable version
3. Communicate the issue and rollback
4. Investigate and fix the problem
5. Release a new patch version

### Rollback Process
```bash
# Unpublish problematic version
npm unpublish @design-system/ui@1.2.0

# Publish previous version as latest
npm publish @design-system/ui@1.1.0 --tag latest
```

## Version Management Tools

### Recommended Tools
- `npm version` for version management
- `conventional-changelog` for automated changelog generation
- `semantic-release` for automated releases
- `changesets` for monorepo version management

### Git Tags
- Tag all releases with version number
- Use annotated tags with release notes
- Tag format: `v1.2.3`

### Branch Strategy
- `main`: Latest stable release
- `develop`: Next minor version
- `feature/*`: New features
- `hotfix/*`: Emergency fixes
