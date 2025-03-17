import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { 
  getPostBySlug, 
  formatDate, 
  resolveAuthor, 
  categories, 
  tags,
  posts
} from '@/app/@lib/data/blog';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import { ButtonLink } from '@/app/@components/ui/buttons';
import routes from '../../routes';
import { createSlug } from '@/app/@lib/utils/slugs';

// Generate static params for all posts
export function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) return notFound();
  
  // Use custom SEO title/description if provided, otherwise use defaults
  const title = post.seo?.title || `${post.title} | Brightway Cleaning Blog`;
  const description = post.seo?.description || post.excerpt;
  
  return generatePageMetadata({
    pageType: 'custom',
    title,
    description,
    slug: `blog/${post.slug}`,
    // Add images through metadata object if needed
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) return notFound();
  
  const author = resolveAuthor(post.author);
  
  // Find related posts (from same categories)
  const relatedPosts = posts
    .filter(p => 
      p.id !== post.id && 
      p.categories.some(cat => 
        post.categories.includes(typeof cat === 'string' ? cat : cat.id)
      )
    )
    .slice(0, 3);

  return (
    <PageTemplate
      title={post.title}
      description={post.excerpt}
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Blog Post Header */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="md">
        <Link 
          href={routes.blog.root}
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition mb-6"
        >
          <ChevronLeft size={16} className="mr-1" /> Back to all posts
        </Link>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {typeof post.categories[0] === 'string' 
            ? post.categories.map(catId => {
                const category = categories.find(c => c.id === catId);
                return category ? (
                  <Link 
                    href={routes.blog.category(category.slug)} 
                    key={category.id}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                  >
                    {category.name}
                  </Link>
                ) : null;
              })
            : (post.categories as any).map((category: any) => (
                <Link 
                  href={routes.blog.category(category.slug)} 
                  key={category.id}
                  className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                >
                  {category.name}
                </Link>
              ))
          }
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-600">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime} min read</span>
            </div>
          )}
        </div>
        
        {post.featuredImage && (
          <div className="relative aspect-video w-full max-h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {author && (
          <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-8">
            {author.avatar && (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image 
                  src={author.avatar} 
                  alt={author.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium">{author.name}</div>
              {author.role && <div className="text-sm text-gray-600">{author.role}</div>}
            </div>
          </div>
        )}
      </PageSection>
      
      {/* Blog Post Content */}
      <PageSection contentWidth="container" maxWidth="lg" bgColor="white" spacingY="lg">
        <div className="prose prose-lg max-w-none">
          {/* Use a component for Markdown content in production */}
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-700">Tags:</span>
              {typeof post.tags[0] === 'string' 
                ? post.tags.map(tagId => {
                    const tag = tags.find(t => t.id === tagId);
                    return tag ? (
                      <Link 
                        href={routes.blog.tag(tag.slug)} 
                        key={tag.id}
                        className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                      >
                        {tag.name}
                      </Link>
                    ) : null;
                  })
                : (post.tags as any).map((tag: any) => (
                    <Link 
                      href={routes.blog.tag(tag.slug)} 
                      key={tag.id}
                      className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                    >
                      {tag.name}
                    </Link>
                  ))
              }
            </div>
          </div>
        )}
        
        {/* Social Sharing */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-medium text-gray-700">Share:</span>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwaycleaning.com'}/blog/${post.slug}`
              )}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <Facebook size={16} />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwaycleaning.com'}/blog/${post.slug}`
              )}&text=${encodeURIComponent(post.title)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <Twitter size={16} />
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwaycleaning.com'}/blog/${post.slug}`
              )}&title=${encodeURIComponent(post.title)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </PageSection>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="lg">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  {relatedPost.featuredImage ? (
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={routes.blog.post(relatedPost.slug)} className="hover:text-primary transition">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="mt-auto">
                    <Link 
                      href={routes.blog.post(relatedPost.slug)}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition"
                    >
                      Read More <ChevronLeft size={16} className="ml-1 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <ButtonLink href={routes.blog.root} variant="outline" size="lg">
              View All Blog Posts
            </ButtonLink>
          </div>
        </PageSection>
      )}
    </PageTemplate>
  );
}

// For demonstration - in production, use a proper markdown parser
function markdownToHtml(markdown: string): string {
  // This is a very basic implementation
  // In a real app, use a library like marked, remark, or react-markdown
  
  let html = markdown
    // Convert headers
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    // Convert paragraphs
    .replace(/^\s*(\n)?(.+)/gm, function(m) {
      return /^<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
    })
    // Convert lists
    .replace(/^[\*\-] (.*)$/gm, '<li>$1</li>')
    // Clean up extra paragraph tags around elements
    .replace(/<\/h([1-6])>\s*<p>/g, '</h$1>')
    .replace(/<\/p>\s*<h([1-6])>/g, '<h$1>')
    .replace(/<\/li>\s*<p>/g, '</li>')
    .replace(/<\/p>\s*<li>/g, '<li>')
    .replace(/<p><\/p>/g, '');
  
  // Wrap lists
  const listItems = html.match(/<li>[\s\S]*?<\/li>/g);
  if (listItems) {
    listItems.forEach(item => {
      if (!item.startsWith('<ul>')) {
        html = html.replace(item, '<ul>' + item + '</ul>');
      }
    });
  }
  
  return html;
} 