# Page Modularization Recommendations

After reviewing the Brightway website codebase, I've identified several opportunities to enhance page modularization and component reuse. These recommendations aim to improve code maintainability, ensure consistent page layouts, and make future updates more efficient.

## Current Architecture Analysis

The website already has a strong foundation with:

1. **Component Organization**:
   - UI components in `@components/ui`
   - Section components in `@components/sections`
   - Layout components in `@components/ui/layout`
   - Shared components in `@components/shared`

2. **Utility Components**:
   - `MainLayout` for consistent page structure
   - `SectionLayout` for consistent section structure
   - `PageHeader` for consistent page headers
   - Various form and UI components

3. **Page Structure**:
   - Pages are organized in the Next.js App Router pattern
   - Most pages follow a similar structure with `MainLayout`

## Opportunities for Improvement

### 1. Standardize Page Structure

Currently, some pages inconsistently implement their own hero/header sections instead of using shared components. Creating standardized page templates would ensure consistency:

```tsx
// Example of a standardized page template
export function StandardPage({
  title,
  description,
  eyebrow,
  heroImage,
  children,
  hasBreadcrumbs = true,
  withHero = true,
}: StandardPageProps) {
  return (
    <MainLayout>
      {withHero && (
        <PageHero 
          title={title}
          description={description}
          eyebrow={eyebrow}
          heroImage={heroImage}
        />
      )}
      
      {hasBreadcrumbs && <Breadcrumbs />}
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        {children}
      </div>
    </MainLayout>
  );
}
```

### 2. Create a Reusable `PageHero` Component

Most pages currently have their own custom hero section. A standardized `PageHero` component would ensure consistency:

```tsx
export function PageHero({
  title,
  description,
  eyebrow,
  heroImage,
  withGradient = true,
  className = '',
}: PageHeroProps) {
  return (
    <div className={`bg-${withGradient ? 'gradient-to-r from-primary to-primary-dark' : 'gray-50'} ${className}`}>
      <Container className="py-16 lg:py-24">
        <Grid columns={{ default: 1, md: heroImage ? 2 : 1 }} gap={12} className="items-center">
          <Column className={heroImage ? 'text-white' : ''}>
            {eyebrow && (
              <div className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
                {eyebrow}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-xl opacity-90 mb-8">
                {description}
              </p>
            )}
          </Column>
          
          {heroImage && (
            <Column className="hidden md:block">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <SafeImage
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  containerHeight={true}
                />
              </div>
            </Column>
          )}
        </Grid>
      </Container>
    </div>
  );
}
```

### 3. Implement Page Templates

Create specialized page templates for common page types:

1. **ContentPage** - For general content pages (About, Services)
2. **ListingPage** - For pages with lists of items (Service Areas, Blog)
3. **DetailPage** - For detailed item pages (Service Detail, Blog Post)
4. **FormPage** - For pages with forms (Contact, Quote)

### 4. Standardize Error Pages

Create a shared `ErrorPageLayout` for consistent error page styling:

```tsx
export function ErrorPageLayout({
  title,
  subtitle,
  description,
  actionButton,
  icon,
  status,
}: ErrorPageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
      {/* Prevent search engines from indexing error pages */}
      <NoIndex noFollow={true} />
      
      {status && <h1 className="text-5xl font-bold mb-4">{status}</h1>}
      
      {icon && (
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      
      {subtitle && <p className="text-xl font-medium mb-4">{subtitle}</p>}
      
      {description && (
        <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
          {description}
        </p>
      )}
      
      {actionButton}
    </div>
  );
}
```

### 5. Page-Specific Section Templates

Create reusable section templates to standardize commonly used section layouts:

1. **ContentWithImageSection** - Text and image side by side
2. **ListGridSection** - Grid of items with filtering options
3. **TestimonialsSection** - Standardized testimonials display
4. **CTASection** - Call-to-action section with consistent styling
5. **FAQSection** - Standard FAQ accordion section

## Implementation Plan

1. **Phase 1: Create Basic Components**
   - Create the `PageHero` component
   - Create the `ErrorPageLayout` component
   - Refine existing `SectionLayout` and `PageHeader` components

2. **Phase 2: Implement Page Templates**
   - Create the page template components
   - Document usage patterns with examples

3. **Phase 3: Refactor Existing Pages**
   - Update the Service Areas page to use the new components
   - Update About page to use new components
   - Update Contact page to use new components
   - Update Services page to use new components

4. **Phase 4: Standardize Error Pages**
   - Update 404 page to use `ErrorPageLayout`
   - Update error pages to use `ErrorPageLayout`

## Benefits

1. **Improved Consistency** - Standardized page and section layouts
2. **Reduced Code Duplication** - Reuse components instead of recreating similar layouts
3. **Faster Development** - Use templates for new pages instead of starting from scratch
4. **Easier Maintenance** - Changes to shared components affect all pages consistently
5. **Better User Experience** - Consistent page patterns make the site more intuitive

## Conclusion

The Brightway website already has a strong component foundation, but implementing these modularization recommendations will significantly improve code maintainability, development speed, and consistency across the site. By standardizing page structures and creating reusable templates, we can ensure a cohesive experience for users and an efficient development process. 