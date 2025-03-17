import type { BlogAuthor, BlogCategory, BlogPost, BlogTag } from '../types/blog';

/**
 * Sample blog data
 * In a production environment, this would likely be fetched from a CMS
 * or database, but for now we'll use static data
 */

/**
 * Blog authors
 */
export const authors: BlogAuthor[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    avatar: '/images/authors/john-doe.jpg',
    bio: 'John is our commercial cleaning expert with over 10 years of experience in the industry.',
    role: 'Chief Operations Officer',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    avatar: '/images/authors/jane-smith.jpg',
    bio: 'Jane specializes in sustainable cleaning practices and green cleaning solutions.',
    role: 'Sustainability Director',
    social: {
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
  },
];

/**
 * Blog categories
 */
export const categories: BlogCategory[] = [
  {
    id: 'cleaning-tips',
    name: 'Cleaning Tips',
    slug: 'cleaning-tips',
    description: 'Professional advice and tips for maintaining clean commercial spaces',
  },
  {
    id: 'industry-news',
    name: 'Industry News',
    slug: 'industry-news',
    description: 'Latest updates and trends in the commercial cleaning industry',
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    slug: 'sustainability',
    description: 'Information about eco-friendly cleaning practices and sustainable solutions',
  },
  {
    id: 'health-safety',
    name: 'Health & Safety',
    slug: 'health-safety',
    description: 'Best practices for maintaining healthy and safe environments',
  },
];

/**
 * Blog tags
 */
export const tags: BlogTag[] = [
  { id: 'office-cleaning', name: 'Office Cleaning', slug: 'office-cleaning' },
  { id: 'covid-19', name: 'COVID-19', slug: 'covid-19' },
  { id: 'green-cleaning', name: 'Green Cleaning', slug: 'green-cleaning' },
  { id: 'commercial-spaces', name: 'Commercial Spaces', slug: 'commercial-spaces' },
  { id: 'industrial', name: 'Industrial', slug: 'industrial' },
  { id: 'disinfection', name: 'Disinfection', slug: 'disinfection' },
  { id: 'cleaning-equipment', name: 'Cleaning Equipment', slug: 'cleaning-equipment' },
];

/**
 * Blog posts
 */
export const posts: BlogPost[] = [
  {
    id: '1',
    title: '10 Office Cleaning Tips for a Healthier Workplace',
    slug: '10-office-cleaning-tips-for-a-healthier-workplace',
    excerpt: 'Discover practical office cleaning tips that can help create a healthier environment for your employees and visitors.',
    content: `
# 10 Office Cleaning Tips for a Healthier Workplace

Creating a clean and healthy workplace is essential for productivity, employee satisfaction, and making a good impression on clients. Here are ten professional office cleaning tips that can transform your workspace.

## 1. Develop a Comprehensive Cleaning Schedule

Consistency is key when it comes to maintaining a clean office. Develop a cleaning schedule that outlines daily, weekly, and monthly cleaning tasks. Daily tasks might include emptying trash bins and wiping down common surfaces, while weekly tasks could involve vacuuming and dusting. Monthly tasks might include deep cleaning carpets and upholstery.

## 2. Focus on High-Touch Surfaces

High-touch surfaces like doorknobs, light switches, elevator buttons, and shared equipment (printers, coffee machines, etc.) can harbor germs and should be cleaned and disinfected daily. Use appropriate disinfectants that are effective against pathogens but safe for office use.

## 3. Don't Forget About Air Quality

Good air quality is crucial for a healthy office. Regularly replace HVAC filters, consider using air purifiers in key areas, and ensure proper ventilation. Plants can also help improve air quality while adding a touch of nature to your workspace.

## 4. Proper Waste Management

Implement a proper waste management system with clearly labeled bins for recyclables, compostables, and general waste. Empty trash bins daily to prevent odors and pest infestations.

## 5. Clean and Sanitize Restrooms Frequently

Restrooms require special attention. They should be cleaned and disinfected at least once a day, with high-touch surfaces like faucets and door handles disinfected more frequently in busy offices.

## 6. Don't Neglect the Break Room

The break room is a common gathering place that can quickly become unsanitary. Establish clear guidelines for employees about cleaning up after themselves, and ensure that shared appliances like microwaves and refrigerators are cleaned regularly.

## 7. Desk Hygiene Matters

Encourage employees to maintain clean desks. Provide disinfecting wipes for employees to clean their personal workspaces, including keyboards, mice, and phones, which can harbor more bacteria than a toilet seat!

## 8. Floor Care

Different flooring types require different cleaning approaches. Carpets should be vacuumed regularly and deep-cleaned periodically, while hard floors should be swept and mopped with appropriate cleaners.

## 9. Window and Blind Cleaning

Clean windows and blinds improve natural lighting and the overall appearance of your office. Schedule regular cleaning of windows, blinds, and curtains to remove dust and allergens.

## 10. Hire Professional Cleaners

While daily maintenance can be handled in-house, hiring professional commercial cleaners for regular deep cleaning ensures that your office remains in top condition. Professionals have the expertise, equipment, and cleaning solutions to tackle tough cleaning challenges effectively.

By implementing these office cleaning tips, you can create a healthier, more productive workplace that employees enjoy working in and clients are impressed by.
    `,
    featuredImage: '/images/blog/office-cleaning-tips.jpg',
    author: 'john-doe',
    publishedAt: '2023-06-15T08:00:00Z',
    updatedAt: '2023-06-20T10:30:00Z',
    categories: ['cleaning-tips'],
    tags: ['office-cleaning', 'health-safety', 'commercial-spaces'],
    readTime: 6,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'The Rise of Green Cleaning in Commercial Spaces',
    slug: 'the-rise-of-green-cleaning-in-commercial-spaces',
    excerpt: 'Learn about the growing trend of eco-friendly cleaning solutions and how they\'re transforming the commercial cleaning industry.',
    content: `
# The Rise of Green Cleaning in Commercial Spaces

Eco-friendly cleaning practices are becoming increasingly popular in commercial spaces as businesses recognize the importance of sustainability and environmental responsibility. This shift towards green cleaning is not just a trend; it's a fundamental change in how we approach commercial cleaning.

## What is Green Cleaning?

Green cleaning refers to using cleaning methods and products with environmentally friendly ingredients designed to preserve human health and environmental quality. Green cleaning techniques avoid the use of products containing toxic agents, some of which can cause respiratory irritation, chemical burns, or other health issues.

## Benefits of Green Cleaning

### Environmental Benefits

Green cleaning products are biodegradable and have minimal impact on the environment. They reduce water and air pollution and require less packaging, which means less waste in landfills. Furthermore, many green cleaning products are made from renewable resources, like plant-based ingredients, rather than petroleum-based ones.

### Health Benefits

Traditional cleaning products can contain chemicals that may cause health problems, from minor irritations like skin rashes and headaches to more serious issues like respiratory problems. Green cleaning products, on the other hand, typically don't release harmful chemicals into the air, improving indoor air quality and creating a healthier environment for everyone in the building.

### Brand Image

Adopting green cleaning practices can enhance a company's brand image. As consumers become more environmentally conscious, they're more likely to support businesses that demonstrate a commitment to sustainability.

## Popular Green Cleaning Solutions

### Vinegar-Based Cleaners

White vinegar is a versatile, non-toxic cleaner that can be used on various surfaces. It's effective at cutting through grease, removing mildew, and disinfecting surfaces.

### Baking Soda

Baking soda is an excellent abrasive cleaner that can remove tough stains without scratching surfaces. It's also effective at neutralizing odors.

### Essential Oils

Essential oils like tea tree, lavender, and lemon not only provide a pleasant scent but also have antimicrobial properties, making them a natural choice for disinfection.

### Microfiber Cloths

Microfiber cloths can clean effectively with just water, reducing the need for chemical cleaners. They're also reusable, which reduces waste.

## Implementing Green Cleaning in Your Commercial Space

Transitioning to green cleaning doesn't have to be challenging. Here are some steps to get started:

1. **Assess Your Current Cleaning Practices**: Identify what products and methods you currently use and where changes can be made.

2. **Research Green Alternatives**: Look for certified green products or learn how to make your own using simple ingredients.

3. **Train Your Cleaning Staff**: Ensure that everyone understands the new products and methods.

4. **Communicate with Building Occupants**: Let everyone know about your green cleaning initiatives and why they're important.

5. **Monitor and Adjust**: Keep track of how well the new cleaning methods are working and make adjustments as necessary.

## The Future of Green Cleaning

As technology advances, we can expect to see even more innovative green cleaning solutions. From probiotics-based cleaners to advanced microfiber technology, the future of green cleaning looks promising.

By embracing green cleaning, commercial spaces can contribute to a healthier planet while creating a safer, more pleasant environment for everyone. It's a win-win situation that's driving the shift towards more sustainable cleaning practices in the commercial sector.
    `,
    featuredImage: '/images/blog/green-cleaning.jpg',
    author: 'jane-smith',
    publishedAt: '2023-07-10T09:15:00Z',
    categories: ['sustainability', 'industry-news'],
    tags: ['green-cleaning', 'commercial-spaces'],
    readTime: 7,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'How to Choose the Right Commercial Cleaning Service',
    slug: 'how-to-choose-the-right-commercial-cleaning-service',
    excerpt: 'Find out what factors to consider when selecting a commercial cleaning service for your business.',
    content: `
# How to Choose the Right Commercial Cleaning Service

Selecting the right commercial cleaning service for your business is a critical decision that can impact your facility's cleanliness, your employees' health, and your company's image. With numerous options available, how do you make the best choice? This guide will walk you through the important factors to consider.

## Understand Your Cleaning Needs

Before you start searching for a commercial cleaning service, it's essential to understand your specific needs:

- What type of facility do you have (office, retail, medical, industrial)?
- How large is your space?
- What cleaning frequency do you require (daily, weekly, monthly)?
- Are there any special cleaning requirements for your industry?
- Do you need specialized services like carpet cleaning or window washing?

Having a clear understanding of your needs will help you find a service provider that can meet them effectively.

## Look for Experience and Reputation

Experience matters when it comes to commercial cleaning. Look for companies that have:

- A proven track record in the industry
- Experience cleaning facilities similar to yours
- Positive reviews and testimonials from current or past clients
- References that you can contact

A reputable cleaning company will be transparent about their experience and happy to provide references.

## Check Credentials and Insurance

Ensure that any cleaning service you consider has:

- Proper licensing for your area
- Liability insurance (to cover any potential damage to your property)
- Workers' compensation insurance (to protect you if a cleaner is injured on your premises)
- Bonding (which provides protection against theft or loss)

Don't hesitate to ask for proof of these credentials. Legitimate companies will be happy to provide them.

## Evaluate Cleaning Protocols and Products

The cleaning procedures and products used can significantly impact the service quality:

- Do they use modern, efficient cleaning techniques?
- What types of cleaning products do they use? Are they effective and safe?
- If environmental concerns are important to you, do they offer green cleaning options?
- Do they have procedures to prevent cross-contamination?

A good cleaning service should be able to explain their approach and adapt to your preferences.

## Assess Staff Quality and Training

The people doing the actual cleaning are crucial to the service quality:

- How does the company screen and hire its employees?
- What training do the cleaners receive?
- Do they perform background checks?
- Is there a supervisor who oversees the work?

Well-trained, professional staff will deliver better, more consistent cleaning results.

## Review Contracts and Pricing

Before making a decision, carefully review what's included in the contract:

- What specific services are included in the price?
- Are there additional charges for special requests?
- What is the contract duration?
- Is there a satisfaction guarantee?
- How easy is it to modify or terminate the contract if needed?

Be wary of unusually low prices, as they often indicate cut corners or hidden fees.

## Evaluate Communication and Customer Service

Good communication is essential for a successful working relationship:

- How responsive is the company to inquiries?
- Do they offer regular inspections or quality control measures?
- What is their process for addressing problems or complaints?
- Will you have a dedicated contact person?

A company that values communication will likely provide better overall service.

## Make Your Decision

After considering all these factors, you should be well-equipped to choose the right commercial cleaning service for your business. Remember that the cheapest option isn't always the best value. Focus on finding a reliable, professional service that meets your specific needs and delivers consistent quality.

With the right commercial cleaning partner, you can maintain a clean, healthy environment that impresses clients and provides an optimal workplace for your employees.
    `,
    featuredImage: '/images/blog/choosing-cleaning-service.jpg',
    author: 'john-doe',
    publishedAt: '2023-08-05T14:20:00Z',
    categories: ['cleaning-tips'],
    tags: ['commercial-spaces', 'office-cleaning'],
    readTime: 8,
  },
  {
    id: '4',
    title: 'The Impact of COVID-19 on Commercial Cleaning Practices',
    slug: 'the-impact-of-covid-19-on-commercial-cleaning-practices',
    excerpt: 'Explore how the pandemic has transformed cleaning protocols and what changes are likely to remain permanent.',
    content: `
# The Impact of COVID-19 on Commercial Cleaning Practices

The COVID-19 pandemic has fundamentally changed many aspects of our lives, including how we approach cleaning and disinfection in commercial spaces. As businesses reopened and adapted to the new normal, commercial cleaning underwent a significant transformation. Let's explore these changes and what the future might hold for the industry.

## The Heightened Focus on Disinfection

Before the pandemic, commercial cleaning primarily focused on appearance and general cleanliness. Post-COVID, there's been a dramatic shift toward disinfection and sanitization:

- Increased frequency of disinfecting high-touch surfaces
- Implementation of electrostatic spraying and fogging techniques
- Greater attention to proper dwell times for disinfectants
- More rigorous cleaning validation and documentation

These enhanced disinfection protocols have become standard practice in many facilities, from offices to retail stores to schools.

## New Technologies and Innovations

The pandemic accelerated the adoption of new cleaning technologies:

### Touchless Cleaning Systems

Automated cleaning systems that minimize human contact with surfaces have gained popularity, including:
- UV-C light disinfection
- Electrostatic sprayers
- Automated floor scrubbers
- Touchless soap and sanitizer dispensers

### Air Purification

As awareness of airborne transmission grew, so did the emphasis on air quality:
- HEPA filtration systems
- Bipolar ionization technology
- Increased ventilation and air exchange
- Regular HVAC system cleaning and maintenance

### Antimicrobial Treatments

Long-lasting antimicrobial coatings for surfaces have emerged as a supplementary layer of protection between regular cleanings.

## Changes in Cleaning Schedules and Visibility

The "when" and "how" of cleaning has also changed:

### Daytime Cleaning

Pre-pandemic, most commercial cleaning occurred after hours. Now, daytime cleaning has become more common, serving both practical purposes and providing visible reassurance to building occupants.

### Transparent Communication

Businesses are now more transparent about their cleaning protocols:
- Posting cleaning schedules in public areas
- Providing detailed information about cleaning products used
- Using signage to indicate when areas were last cleaned

## Staffing and Training Developments

The pandemic has impacted the commercial cleaning workforce:

### Enhanced Training

Cleaning staff now require more specialized knowledge:
- Proper use of disinfectants
- Personal protective equipment protocols
- Cross-contamination prevention
- Understanding of pathogen transmission

### Staff Well-being

There's greater recognition of cleaning staff as essential workers, leading to:
- Improved safety protocols
- Better personal protective equipment
- More competitive compensation in some markets
- Greater appreciation for the critical role of cleaning professionals

## Sustainability Challenges

The push for intense disinfection initially led to increased use of stronger chemicals and disposable products. However, the industry is now finding balance:

- Development of green disinfectants that are both effective and environmentally friendly
- Reusable microfiber systems that reduce waste while maintaining efficacy
- Focus on targeted disinfection rather than over-application of chemicals
- Return to more sustainable practices without compromising health safety

## The Future of Commercial Cleaning

While some pandemic-era protocols may scale back over time, many changes are likely to remain:

1. **Continued Emphasis on Health**: Cleaning for health, not just appearance, will remain a priority.

2. **Technology Integration**: Smart cleaning technologies and automated systems will continue to develop.

3. **Preparedness Planning**: Businesses will maintain flexible cleaning protocols that can be quickly enhanced during disease outbreaks.

4. **Hybrid Approaches**: Balanced methods that address health concerns while maintaining sustainability goals will become the norm.

5. **Ongoing Education**: Regular training and certification for cleaning professionals will be standard.

The commercial cleaning industry has been permanently transformed by COVID-19. The silver lining is a greater recognition of the vital role that proper cleaning and disinfection play in public health and business continuity. Moving forward, commercial cleaning will likely maintain its newly elevated status as an essential component of business operations and public health strategy.
    `,
    featuredImage: '/images/blog/covid-cleaning.jpg',
    author: 'jane-smith',
    publishedAt: '2023-09-12T11:45:00Z',
    categories: ['industry-news', 'health-safety'],
    tags: ['covid-19', 'disinfection', 'commercial-spaces'],
    readTime: 9,
  },
];

/**
 * Helper function to get a post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

/**
 * Helper function to get posts by category
 */
export function getPostsByCategory(categoryId: string): BlogPost[] {
  return posts.filter(post => {
    if (typeof post.categories[0] === 'string') {
      return post.categories.includes(categoryId);
    } else {
      const categoryIds = post.categories.map((cat: any) => cat.id);
      return categoryIds.includes(categoryId);
    }
  });
}

/**
 * Helper function to get posts by tag
 */
export function getPostsByTag(tagId: string): BlogPost[] {
  return posts.filter(post => {
    if (!post.tags) return false;
    if (typeof post.tags[0] === 'string') {
      return post.tags.includes(tagId);
    } else {
      const tagIds = post.tags.map((tag: any) => tag.id);
      return tagIds.includes(tagId);
    }
  });
}

/**
 * Helper function to get posts by author
 */
export function getPostsByAuthor(authorId: string): BlogPost[] {
  return posts.filter(post => {
    if (typeof post.author === 'string') {
      return post.author === authorId;
    } else {
      return post.author.id === authorId;
    }
  });
}

/**
 * Helper function to get featured posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return posts.filter(post => post.isFeatured);
}

/**
 * Helper function to get a category by slug
 */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return categories.find(category => category.slug === slug);
}

/**
 * Helper function to get a tag by slug
 */
export function getTagBySlug(slug: string): BlogTag | undefined {
  return tags.find(tag => tag.slug === slug);
}

/**
 * Helper function to get an author by ID
 */
export function getAuthorById(id: string): BlogAuthor | undefined {
  return authors.find(author => author.id === id);
}

/**
 * Helper function to resolve author information
 * If the author is an ID, this will return the full author object
 */
export function resolveAuthor(authorOrId: BlogAuthor | string): BlogAuthor | undefined {
  if (typeof authorOrId === 'string') {
    return getAuthorById(authorOrId);
  }
  return authorOrId;
}

/**
 * Helper function to format a date
 */
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
} 