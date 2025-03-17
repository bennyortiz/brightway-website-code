# Adding a New Blog Post

This guide explains how to add a new blog post to the Brightway Cleaning website.

## Step 1: Add the post to blog.ts

Open the file `app/@lib/data/blog.ts` and add a new entry to the `posts` array:

```typescript
{
  id: '5', // Use the next sequential ID
  title: 'Your Blog Post Title',
  slug: 'your-blog-post-slug', // URL-friendly version of the title
  excerpt: 'A brief summary of your blog post (1-2 sentences).',
  content: `
# Your Blog Post Title

Your blog post content goes here. You can use Markdown formatting.

## Subheading 1

Content for the first section...

## Subheading 2

Content for the second section...

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Conclusion

Concluding paragraph...
  `,
  featuredImage: '/images/blog/your-image.jpg', // Add image to public/images/blog/
  author: 'author-id', // Use ID of existing author or create a new one
  publishedAt: '2023-10-15T10:00:00Z', // Date in ISO format
  updatedAt: '2023-10-15T10:00:00Z', // Optional: Only add if updating an existing post
  categories: ['category-id'], // Add one or more category IDs
  tags: ['tag-1', 'tag-2'], // Add relevant tag IDs
  readTime: 5, // Estimated reading time in minutes
  isFeatured: false, // Set to true to feature on homepage/blog index
}
```

## Step 2: Add Images

If your blog post includes a featured image:

1. Add the image file to the `/public/images/blog/` directory
2. Reference it in the `featuredImage` field with the correct path
3. Make sure the image is optimized for web (compressed, appropriate dimensions)

## Step 3: SEO Optimization (Optional)

To optimize the blog post for search engines, you can add an `seo` object:

```typescript
seo: {
  title: 'Custom SEO Title | Brightway Cleaning', // Custom title for search engines
  description: 'A detailed meta description that will appear in search results.', // 150-160 characters
  keywords: ['commercial cleaning', 'office cleaning', 'your keyword'],
  ogImage: '/images/blog/custom-social-share-image.jpg', // Custom image for social sharing
}
```

## Step 4: Adding a New Author (If Needed)

If you need to add a new author, add an entry to the `authors` array:

```typescript
{
  id: 'author-name', // URL-friendly ID
  name: 'Author Name',
  avatar: '/images/authors/author-name.jpg', // Add photo to public/images/authors/
  bio: 'Brief biography of the author.',
  role: 'Job Title',
  social: {
    twitter: 'https://twitter.com/authorname',
    linkedin: 'https://linkedin.com/in/authorname',
    // Add other social profiles as needed
  }
}
```

## Step 5: Adding a New Category or Tag (If Needed)

To add a new category:

```typescript
// Add to categories array
{
  id: 'category-id',
  name: 'Category Name',
  slug: 'category-slug',
  description: 'Description of this category',
}
```

To add a new tag:

```typescript
// Add to tags array
{
  id: 'tag-id',
  name: 'Tag Name',
  slug: 'tag-slug',
}
```

## Step 6: Verify the New Blog Post

After adding the new blog post:

1. Rebuild the site:
   ```
   npm run build
   ```

2. Test the URL:
   - `/blog/your-blog-post-slug`

3. Check that the post appears:
   - On the main blog page
   - In appropriate category pages
   - In the sitemap

## Step 7: Promote the Blog Post

After publishing:

1. Share on social media
2. Include in newsletters
3. Consider cross-posting on other platforms
4. Update internal links from relevant pages to point to the new post

## Questions?

If you have any questions about adding new blog posts, contact the development team. 