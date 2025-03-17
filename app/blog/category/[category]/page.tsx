import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { 
  categories, 
  getCategoryBySlug, 
  getPostsByCategory, 
  formatDate, 
  resolveAuthor 
} from '@/app/@lib/data/blog';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import routes from '../../../routes';

// Generate static params for all categories
export function generateStaticParams() {
  return categories.map(category => ({
    category: category.slug
  }));
}

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  
  if (!category) return notFound();
  
  return generatePageMetadata({
    pageType: 'custom',
    title: `${category.name} | Brightway Cleaning Blog`,
    description: category.description || `Read our blog posts about ${category.name.toLowerCase()} topics related to commercial cleaning services.`,
    slug: `blog/category/${category.slug}`,
  });
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  
  if (!category) return notFound();
  
  // Get posts for this category
  const categoryPosts = getPostsByCategory(category.id);
  
  // Sort posts by date (newest first)
  const sortedPosts = [...categoryPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <PageTemplate
      title={`${category.name} Articles`}
      description={category.description || `Browse our collection of articles about ${category.name.toLowerCase()} in commercial cleaning.`}
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Category Header */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="md">
        <Link 
          href={routes.blog.root}
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary transition mb-6"
        >
          Back to all posts
        </Link>
        
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {category.name}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{category.name} Articles</h1>
          {category.description && (
            <p className="text-lg text-gray-600">{category.description}</p>
          )}
        </div>
      </PageSection>
      
      {/* Blog Categories */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="md">
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <Link
            href={routes.blog.root}
            className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-100 transition"
          >
            All Posts
          </Link>
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={routes.blog.category(cat.slug)}
              className={`inline-block px-4 py-2 rounded-full font-medium text-sm transition ${
                cat.id === category.id 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </PageSection>
      
      {/* Category Posts */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map(post => {
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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-gray-600 mb-6">
              There are currently no articles in this category. Please check back later!
            </p>
            <Link 
              href={routes.blog.root}
              className="inline-block px-5 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
            >
              View All Blog Posts
            </Link>
          </div>
        )}
      </PageSection>
    </PageTemplate>
  );
} 