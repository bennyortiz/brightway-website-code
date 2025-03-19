# Codebase Simplification Plan

This document outlines our plan to streamline the codebase and make it more maintainable without sacrificing essential functionality.

## Simplification Goals

- Reduce complexity
- Improve maintainability
- Make the codebase more approachable for new developers
- Optimize performance
- Maintain all necessary functionality

## Implementation Steps

### 1. Simplify Image Handling

**Issues:**
- `SafeImage` component (209 lines) contains excessive logic for handling various image scenarios
- Redundant checks and state management
- Overly complex conditional logic for loading and quality

**Simplification:**
- Remove the unused `useBestImageFormat` function
- Consolidate the multiple image quality and size calculations
- Simplify the conditional priority and loading strategy logic
- Consider using Next.js's native `sizes` property instead of complex logic

### 2. Consolidate SEO Utilities

**Issues:**
- Multiple overlapping SEO functions between `metadata.ts` and `seo.ts`
- Redundant logic for metadata generation

**Simplification:**
- Consolidate the JSON-LD schema generators into a single file with a unified API
- Reduce duplication between `generateMetaDescription` and parts of `generatePageMetadata`
- Generate SEO elements only when needed rather than for every page

### 3. Simplify TypeScript Interfaces

**Issues:**
- Overly complex TypeScript interfaces that make maintenance harder
- Redundant type definitions

**Simplification:**
- Simplify the `SEOOptions` interface to focus on commonly used properties
- Use more TypeScript utility types (e.g., `Partial<>`, `Pick<>`) to reduce duplication
- Consolidate related types

### 4. Reduce Component Property Options

**Issues:**
- Components like `PageSection` have too many configurable properties
- Complex mappings between props and CSS classes

**Simplification:**
- Reduce the number of options for properties like `spacingY`, `maxWidth`, etc.
- Use CSS variables or Tailwind's theme system for consistency
- Merge similar styling options to reduce API complexity

### 5. Optimize Import/Export Patterns

**Issues:**
- Extensive use of barrel exports affecting build performance
- Potential circular dependencies

**Simplification:**
- Be more selective with barrel files, especially in the components directory
- Import directly from component files where appropriate
- Use tree-shaking friendly import/export patterns

### 6. Flatten Directory Structure

**Issues:**
- Excessive directory nesting complicating imports and navigation

**Simplification:**
- Flatten the directory structure where appropriate
- Consolidate some UI component subdirectories
- Combine closely related utilities into single files

### 7. Improve Client-Side Code

**Issues:**
- Direct DOM access in components
- Potential hydration issues

**Simplification:**
- Use React's built-in hooks or utility functions for browser APIs
- Implement proper SSR-safe checks for browser environment
- Consider using useEffect for client-side-only code

### 8. Streamline Error Handling

**Issues:**
- Extensive error handling in components
- Redundant console logging

**Simplification:**
- Implement a more centralized error handling approach
- Reduce console logging in production components
- Use error boundaries more effectively

### 9. Simplify Layout System

**Issues:**
- Multiple layers of layout components with overlapping responsibilities

**Simplification:**
- Streamline the relationship between `MainLayout`, `PageTemplate`, and `PageSection`
- Reduce prop passing between these components
- Consider a more composition-based approach with fewer props

## Implementation Timeline

Each step should be implemented independently to ensure a smooth transition and allow for proper testing. We'll start with the most impactful changes (image handling and SEO utilities) before moving on to more structural changes. 