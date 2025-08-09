# Legacy Token Files Backup

This directory contains legacy token files that were moved during the architecture cleanup in Phase 2.

## Files Moved:

- `tokens.json` (180KB) - Old complex token structure with semantic references
- `colors.json` (94KB) - Legacy color token definitions
- `m32.json` (32KB) - Material Design 3 token mappings
- `ios2.json` (38KB) - iOS-specific token definitions
- `core.json` (32KB) - Core design token definitions
- `backbasedoc.txt` (16KB) - Documentation file with token examples
- `extended-tokens.txt` (19KB) - Extended token definitions
- `exsiting-web-sdk-colors.txt` (1.1KB) - Legacy web SDK color definitions
- `win-tokens.json` (3.8KB) - Windows-specific token definitions
- `newEkaFont.swift` (7.1KB) - Swift font definitions

## Current Active File:

- `tokens/minimal-tokens.json` (4.9KB) - Simplified, working token structure

## Reason for Cleanup:

These files were causing build issues due to complex reference structures and were replaced with a simplified, working token system. The build now uses only `minimal-tokens.json` which provides all necessary design tokens for the current system.

## Recovery:

If any of these files are needed in the future, they can be restored from this backup directory.
