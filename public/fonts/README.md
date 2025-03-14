# Fonts Directory

This directory is for any self-hosted font files. 

## Current Configuration

The website uses `@fontsource-variable/plus-jakarta-sans` which is loaded from `node_modules` via CSS imports in `app/layout.tsx`:

```js
import '@fontsource-variable/plus-jakarta-sans';
```

## Adding Custom Fonts

If you need to add custom fonts:

1. Place the font files (woff2 preferred) in this directory
2. Create a CSS file in this directory for the font-face declaration
3. Import the CSS file in `app/layout.tsx`
4. Update the Tailwind configuration in `tailwind.config.js`

## Performance Considerations

- Always use variable fonts when possible for better performance
- Include only the weights you need
- Use woff2 format for modern browsers
- Set appropriate `font-display` values 