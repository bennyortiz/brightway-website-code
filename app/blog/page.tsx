import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, Clock, ChevronRight } from 'lucide-react';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { posts, categories, formatDate, resolveAuthor } from '@/app/@lib/data/blog';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import routes from '../routes';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Blog | Cleaning Tips & Industry Insights | Brightway Cleaning',
  description: 'Expert insights, tips, and advice on commercial cleaning services, industry trends, and maintaining clean, healthy business environments.',
  slug: 'blog',
});

export default function BlogIndexPage() {
  // Sort posts by publish date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  // Get featured posts
  const featuredPosts = sortedPosts.filter(post => post.isFeatured).slice(0, 2);
  
  // Get remaining posts
  const remainingPosts = sortedPosts.filter(post => !featuredPosts.includes(post));

  return (
    <PageTemplate
      title="Commercial Cleaning Blog"
      description="Expert insights, tips, and advice on commercial cleaning best practices and industry trends."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map(post => {
              const author = resolveAuthor(post.author);
              return (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full flex flex-col">
                  <div className="relative h-64 w-full">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                        <p className="text-gray-500">No image available</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {typeof post.categories[0] === 'string' 
                        ? post.categories.map(catId => {
                            const category = categories.find(c => c.id === catId);
                            return category ? (
                              <Link 
                                href={routes.blog.category(category.slug)} 
                                key={category.id}
                                className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                              >
                                {category.name}
                              </Link>
                            ) : null;
                          })
                        : (post.categories as any).map((category: any) => (
                            <Link 
                              href={routes.blog.category(category.slug)} 
                              key={category.id}
                              className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                            >
                              {category.name}
                            </Link>
                          ))
                      }
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      <Link href={routes.blog.post(post.slug)} className="hover:text-primary transition">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        {post.readTime && (
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime} min read</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center">
                        {author?.avatar && (
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <Image 
                              src={author.avatar} 
                              alt={author.name}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium">{author?.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PageSection>
      )}

      {/* Blog Categories */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="md">
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Link
            href={routes.blog.root}
            className="inline-block px-4 py-2 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-dark transition"
          >
            All Posts
          </Link>
          {categories.map(category => (
            <Link
              key={category.id}
              href={routes.blog.category(category.slug)}
              className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-100 transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </PageSection>

      {/* All Posts Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map(post => {
            const author = resolveAuthor(post.author);
            return (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
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
                  <div className="mb-3 flex flex-wrap gap-2">
                    {typeof post.categories[0] === 'string' 
                      ? post.categories.map(catId => {
                          const category = categories.find(c => c.id === catId);
                          return category ? (
                            <Link 
                              href={routes.blog.category(category.slug)} 
                              key={category.id}
                              className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                            >
                              {category.name}
                            </Link>
                          ) : null;
                        })
                      : (post.categories as any).map((category: any) => (
                          <Link 
                            href={routes.blog.category(category.slug)} 
                            key={category.id}
                            className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                          >
                            {category.name}
                          </Link>
                        ))
                    }
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={routes.blog.post(post.slug)} className="hover:text-primary transition">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="mt-auto">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center mr-3">
                        <Calendar size={12} className="mr-1" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                      )}
                    </div>
                    <Link 
                      href={routes.blog.post(post.slug)}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition"
                    >
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>
    </PageTemplate>
  );
} 