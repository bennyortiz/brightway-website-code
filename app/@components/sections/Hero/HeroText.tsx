/**
 * HeroText Component
 * 
 * Server component for critical hero text content.
 * This component is optimized for LCP by being server-rendered
 * and containing only the essential text content.
 */
export default function HeroText() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
      <div 
        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary self-center md:self-start"
      >
        <span>Professional Commercial Cleaning</span>
      </div>

      <h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-rendering-optimizeLegibility"
      >
        Pristine Spaces for{' '}
        <span className="text-primary">
          Productive
        </span>{' '}
        Businesses
      </h1>

      <p 
        className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto md:mx-0"
      >
        Brightway Cleaning delivers exceptional commercial cleaning services tailored to your
        business needs, ensuring a healthy, professional environment.
      </p>
    </div>
  );
} 