# Documentation Standards

This guide outlines our documentation standards for the Brightway website codebase. Following these standards ensures that all developers can easily understand, use, and maintain our code.

## Documentation Hierarchy

Our documentation follows a hierarchy to address different levels of information:

1. **Project Level** - Root README.md with overall project information
2. **Directory Level** - README.md files in key directories explaining purpose and organization
3. **Component/Module Level** - JSDoc comments for components and modules
4. **Function/Method Level** - JSDoc comments for individual functions and methods
5. **Specialized Guides** - Detailed markdown files for complex topics

## File and Directory Structure Documentation

### Root Directory README.md

Contains:

- Project overview and purpose
- Setup and installation instructions
- Key technologies used
- Links to important documentation
- Contribution guidelines

### Directory README.md

Each major directory should have a README.md containing:

- Purpose of the directory
- Structure overview
- Usage examples
- Best practices

## Code Documentation

### File Headers

All source files should begin with a header comment:

```typescript
/**
 * [Component/Module Name]
 *
 * [Brief description of the purpose and functionality]
 *
 * @module [Optional module grouping]
 */
```

### Component Documentation

Components should be documented with JSDoc comments:

```typescript
/**
 * [Component Name]
 *
 * [Description of the component's purpose and behavior]
 *
 * @example
 * <ComponentName prop1="value" prop2={value}>
 *   Child content
 * </ComponentName>
 */
```

### Props/Interfaces Documentation

All component props should be documented:

```typescript
interface ButtonProps {
  /**
   * Button variant affects the visual style
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * Whether the button should display a loading spinner
   * @default false
   */
  loading?: boolean;

  // Other props...
}
```

### Function Documentation

Functions should be documented with JSDoc comments:

```typescript
/**
 * [Function name in present tense]
 *
 * [Description of what the function does]
 *
 * @param paramName - Description of the parameter
 * @returns Description of the return value
 *
 * @example
 * const result = formatDate('2023-01-01');
 * // Returns: "January 1, 2023"
 */
```

### Type and Enum Documentation

```typescript
/**
 * Represents the different placement positions for images on a page
 */
type ImagePlacement =
  | 'hero' // Top of page, highest priority
  | 'above-fold' // Visible without scrolling
  | 'mid-page' // Middle of the page
  | 'below-fold' // Requires scrolling to see
  | 'footer'; // Bottom of the page
```

## Markdown Documentation Guidelines

For more complex topics, create specialized Markdown files:

1. **Use Descriptive Titles and Headings** - Clear and concise
2. **Include a Table of Contents** - For longer documents
3. **Provide Examples** - Real-world usage examples
4. **Use Proper Markdown Formatting** - Code blocks, tables, etc.
5. **Include Visual Aids** - Screenshots or diagrams when helpful

### Structure for Component Usage Guides

```markdown
# [Component Name] Usage Guide

## Overview

Brief description of the component's purpose and key features.

## Installation/Import

How to import and use the component.

## Basic Usage

Simple example of the component in action.

## Advanced Usage

More complex examples and patterns.

## API Reference

Detailed props, methods, and options.

## Best Practices

Guidelines for effective use.
```

## Documentation Maintenance

- Update documentation when making code changes
- Review documentation during code reviews
- Deprecate outdated documentation with notes pointing to replacements
- Run periodic documentation audits

By following these guidelines, we ensure that our codebase remains well-documented, maintainable, and accessible to all developers on the team.
