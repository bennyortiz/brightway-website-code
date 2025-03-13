# Responsive Design Guide

This guide outlines the responsive design approach for the Brightway website, ensuring consistent behavior across all screen sizes and devices.

## Breakpoints

The site uses the following breakpoints, consistent with Tailwind CSS defaults:

| Breakpoint | Width    | CSS Prefix | Description           |
|------------|----------|-----------|-----------------------|
| Default    | 0px+     | (none)    | Mobile phones         |
| sm         | 640px+   | sm:       | Large phones, tablets |
| md         | 768px+   | md:       | Tablets, small laptops|
| lg         | 1024px+  | lg:       | Desktops, laptops     |
| xl         | 1280px+  | xl:       | Large desktops        |
| 2xl        | 1536px+  | 2xl:      | Extra large displays  |

## Responsive Components

### SectionContainer

Use the `SectionContainer` component for all page sections to ensure consistent responsive behavior:

```jsx
<SectionContainer id="section-id" outerClassName="bg-gray-50">
  {/* Section content */}
</SectionContainer>
```

Key features:
- Consistent padding across all breakpoints
- Container width management
- Proper section spacing

### ResponsiveGrid

Use the `ResponsiveGrid` component for grid layouts to ensure proper column behavior:

```jsx
<ResponsiveGrid 
  columns={{ default: 1, sm: 2, lg: 3 }}
  gap={{ default: 4, md: 6, lg: 8 }}
>
  {/* Grid items */}
</ResponsiveGrid>
```

### Typography Components

Use the typography components for consistent text sizes:

```jsx
<SectionHeading>Section Title</SectionHeading>
<SectionSubheading>Descriptive subtitle for the section</SectionSubheading>
<FeatureHeading>Feature Title</FeatureHeading>
<FeatureText>Detailed description of the feature</FeatureText>
```

## Common Patterns

### Responsive Spacing

Use responsive utility classes to adjust spacing at different breakpoints:

```jsx
<div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
  {/* Content with increasing top margin at larger screens */}
</div>
```

### Responsive Text

Use responsive utility classes to adjust text sizes:

```jsx
<p className="text-sm sm:text-base md:text-lg lg:text-xl">
  Text that scales up at larger screen sizes
</p>
```

### Responsive Images

Use the `SafeImage` component with proper sizes attribute:

```jsx
<SafeImage
  src="/images/example.jpg"
  alt="Description"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="aspect-video"
/>
```

### Responsive Layout Switching

Change layouts at different breakpoints:

```jsx
<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">
    {/* Left content */}
  </div>
  <div className="w-full md:w-1/2">
    {/* Right content */}
  </div>
</div>
```

## Best Practices

1. **Mobile First**: Always start with mobile design and add responsive utilities for larger screens

2. **Consistent Breakpoints**: Stick to the standard breakpoints to maintain coherence 

3. **Fluid Typography**: Use responsive text classes that scale properly across all devices

4. **Proper Testing**: Test designs at each breakpoint to ensure smooth transitions

5. **Use Aspect Ratios**: Maintain proper aspect ratios for images with `aspect-square`, `aspect-video`, etc.

6. **Avoid Fixed Heights**: Use min-height or relative heights instead of fixed px heights whenever possible

7. **Standardized Components**: Use the shared responsive components for all new sections

8. **Responsive Padding**: Use proper responsive padding for consistent spacing

## Component Update Procedure

When updating an existing section to be fully responsive:

1. Wrap the section in `<SectionContainer>` 
2. Replace text elements with Typography components
3. Replace grids with `<ResponsiveGrid>`
4. Add responsive utilities for spacing and sizing
5. Test at all breakpoints
6. Ensure mobile usability with proper touch targets

By following these guidelines, all sections will maintain consistent responsiveness across devices. 