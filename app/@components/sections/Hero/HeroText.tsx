/**
 * HeroText Component
 * 
 * Server component for critical hero text content.
 * This component is optimized for LCP by being server-rendered
 * and containing only the essential text content.
 * 
 * Responsive design improvements:
 * - Fluid typography scaling across device sizes
 * - Better text alignment for mobile, tablet, and desktop
 * - Improved spacing and readability on small screens
 */
export default function HeroText() {
  return (
    <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center md:text-left">
      <div 
        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-primary self-center md:self-start"
      >
        <span>Professional Commercial Cleaning</span>
      </div>

      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-rendering-optimizeLegibility leading-tight"
      >
        Pristine Spaces for{' '}
        <span className="text-primary">
          Productive
        </span>{' '}
        Businesses
      </h1>

      <p 
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[500px] sm:max-w-[550px] md:max-w-[600px] mx-auto md:mx-0 leading-relaxed"
      >
        Brightway Cleaning delivers exceptional commercial cleaning services tailored to your
        business needs, ensuring a healthy, professional environment.
      </p>
    </div>
  );
} 