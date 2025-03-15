# Image Component Usage Guide

## Overview

This document provides guidance on how to use the image components in our codebase. We are consolidating our image components to use primarily `SafeImage` instead of the deprecated alternatives.

## Recommended Component: SafeImage

`SafeImage` is our most comprehensive image component with features for:
- Intelligent loading strategies based on image placement
- Quality optimization
- Error handling
- Loading states with skeletons
- Mobile optimization

## Usage Patterns

### Hero/Banner Images

For large hero or banner images at the top of the page:

```tsx
import { SafeImage } from '@/app/@components/ui';

<SafeImage
  src="/images/hero.jpg"
  alt="Hero banner"
  width={1920}
  height={1080}
  priority={true}
  placement="hero"
  className="w-full h-[600px] object-cover"
  sizes="100vw"
/>
```

### Content Images (Mid-Page)

For images in the main content area:

```tsx
import { SafeImage } from '@/app/@components/ui';

<SafeImage
  src="/images/content.jpg"
  alt="Content image"
  width={800}
  height={600}
  placement="mid-page"
  className="w-full rounded-lg"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Service/Card Thumbnails (Below Fold)

For smaller images used in cards or service listings:

```tsx
import { SafeImage } from '@/app/@components/ui';

<div className="relative overflow-hidden rounded-lg">
  <SafeImage
    src="/images/service-thumbnail.jpg"
    alt="Service thumbnail"
    width={400}
    height={300}
    placement="below-fold"
    className="object-cover w-full h-full"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={75}
  />
</div>
```

## Deprecated Components

The following components are deprecated and will be removed in future updates:

- `OptimizedImage`: Use `SafeImage` directly with appropriate parameters
- `ServiceImage`: Use `SafeImage` with placement="below-fold"

## Props Reference

### SafeImage Props

| Prop | Type | Description |
|------|------|-------------|
| src | string | Image source URL |
| alt | string | Alternative text for accessibility |
| width | number | Image width in pixels |
| height | number | Image height in pixels |
| placement | 'hero' \| 'above-fold' \| 'mid-page' \| 'below-fold' \| 'footer' | Position on the page (affects loading strategy) |
| priority | boolean | Whether to prioritize loading |
| quality | number | Image quality (1-100) |
| className | string | CSS classes |
| sizes | string | Responsive sizes attribute |
| fallbackText | string | Text to display if image fails to load |
| loading | 'eager' \| 'lazy' | Explicit loading strategy |
| onLoad | function | Callback when image loads | 