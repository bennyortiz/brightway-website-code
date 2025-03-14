import { cn } from '@/app/@lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left', className)}>
      <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className={cn('text-gray-600', centered ? 'max-w-2xl mx-auto' : '')}>{description}</p>
      )}
    </div>
  );
}
