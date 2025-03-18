# Accessibility Guidelines

This document outlines the accessibility standards and best practices for the Brightway website. Following these guidelines ensures that our website is usable by people with various disabilities and meets WCAG 2.1 standards.

## Standards We Follow

- **WCAG 2.1 Level AA** - Our baseline standard for accessibility
- **ADA Compliance** - Ensuring our site is accessible to people with disabilities
- **Section 508** - Compliance with federal accessibility requirements

## Key Accessibility Features

### 1. Touch Target Size

All interactive elements (buttons, links, form controls) must have a minimum touch target size of 44x44 pixels to ensure they are easily tappable on touch devices, especially for users with motor impairments.

```tsx
// Example of properly sized button
<button className="w-12 h-12 flex items-center justify-center">
  <span className="w-4 h-4">Icon</span>
</button>
```

### 2. Color Contrast

Text and interactive elements must have sufficient color contrast against their backgrounds:

- Regular text (under 18pt): Minimum contrast ratio of 4.5:1
- Large text (18pt or 14pt bold and above): Minimum contrast ratio of 3:1
- UI components and graphical objects: Minimum contrast ratio of 3:1

Our primary color has been adjusted to ensure proper contrast. Use the `text-primary` class only on backgrounds that provide sufficient contrast.

### 3. Keyboard Navigation

All interactive elements must be accessible via keyboard:

- Ensure all interactive elements can receive focus
- Maintain a logical tab order
- Provide visible focus indicators
- Implement keyboard shortcuts for complex interactions

Use the `handleKeyboardInteraction` utility for custom keyboard interactions:

```tsx
import { handleKeyboardInteraction } from '@/app/@lib/utils/accessibility';

// Example usage
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => handleKeyboardInteraction(e, onClick)}
  onClick={onClick}
>
  Click me
</div>
```

### 4. Screen Reader Support

Ensure content is accessible to screen readers:

- Use semantic HTML elements (`<button>`, `<a>`, `<h1>`, etc.)
- Provide alternative text for images
- Use ARIA attributes when necessary
- Implement proper heading hierarchy

For content that should be visible only to screen readers, use the `VisuallyHidden` component:

```tsx
import { VisuallyHidden } from '@/app/@components/ui';

// Example usage
<button>
  <SomeIcon />
  <VisuallyHidden>Close dialog</VisuallyHidden>
</button>
```

### 5. ARIA Attributes

Use ARIA attributes to enhance accessibility when HTML semantics are not sufficient:

```tsx
// Example of a carousel with proper ARIA attributes
<div
  role="region"
  aria-roledescription="carousel"
  aria-label="Featured products"
>
  {/* Carousel content */}
</div>
```

Use the accessibility utilities for common components:

```tsx
import { getCarouselAriaAttributes, getDialogAriaAttributes } from '@/app/@lib/utils/accessibility';

// Example usage
<div {...getCarouselAriaAttributes(totalSlides, currentSlide)}>
  {/* Carousel content */}
</div>
```

## Accessibility Utilities

The project includes several accessibility utilities to help implement accessible components:

### Constants

- `MIN_TOUCH_TARGET_SIZE`: Minimum size for interactive elements (44px)
- `CONTRAST_RATIOS`: Minimum contrast ratios for different types of content
- `srOnlyClass`: CSS class for screen-reader-only content

### Components

- `VisuallyHidden`: Component for screen-reader-only content

### Functions

- `handleKeyboardInteraction`: Helper for keyboard event handling
- `focusFirstElement`: Focus the first focusable element in a container
- `getCarouselAriaAttributes`: Get ARIA attributes for carousels
- `getDialogAriaAttributes`: Get ARIA attributes for dialogs

## Testing Accessibility

### Automated Testing

Run automated accessibility tests using:

```bash
npm run test:a11y
```

### Manual Testing

1. **Keyboard Navigation**: Test the site using only the keyboard
2. **Screen Readers**: Test with VoiceOver (macOS), NVDA or JAWS (Windows)
3. **Zoom**: Test the site at 200% zoom
4. **Color Contrast**: Use the WebAIM Contrast Checker

## Common Accessibility Issues and Solutions

### 1. Missing Alternative Text

```tsx
// Incorrect
<Image src="/image.jpg" width={200} height={200} />

// Correct
<Image src="/image.jpg" width={200} height={200} alt="Description of image" />

// For decorative images
<Image src="/decorative.jpg" width={200} height={200} alt="" />
```

### 2. Non-semantic HTML

```tsx
// Incorrect
<div onClick={handleClick}>Click me</div>

// Correct
<button onClick={handleClick}>Click me</button>
```

### 3. Missing Focus Indicators

```tsx
// Incorrect
button:focus {
  outline: none;
}

// Correct
button:focus {
  outline: 2px solid #0055b8;
  outline-offset: 2px;
}
```

### 4. Inaccessible Forms

```tsx
// Incorrect
<input type="text" placeholder="Enter your name" />

// Correct
<div>
  <label htmlFor="name">Name</label>
  <input id="name" type="text" aria-describedby="name-hint" />
  <div id="name-hint">Enter your full name</div>
</div>
```

## Resources

- [WebAIM](https://webaim.org/) - Web accessibility resources
- [A11Y Project](https://www.a11yproject.com/) - Accessibility checklist
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
