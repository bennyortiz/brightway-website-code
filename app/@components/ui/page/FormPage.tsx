import React, { ReactNode } from 'react';
import { StandardPage, StandardPageProps } from './StandardPage';
import { Grid, Column } from '@/app/@components/ui/layout';

/**
 * Interface for the FormPage component
 */
export interface FormPageProps extends StandardPageProps {
  /**
   * The form component to display
   */
  form: ReactNode;
  
  /**
   * Optional sidebar content (for contact info, help text, etc.)
   */
  sidebar?: ReactNode;
  
  /**
   * Position of the sidebar relative to the form
   */
  sidebarPosition?: 'left' | 'right';
  
  /**
   * Optional columns configuration for the form section
   */
  columns?: {
    form?: 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sidebar?: 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  
  /**
   * Whether the form has been submitted
   */
  isSubmitted?: boolean;
  
  /**
   * Component to display after successful form submission
   */
  successComponent?: ReactNode;
  
  /**
   * Additional container className for the form section
   */
  formContainerClassName?: string;
}

/**
 * FormPage Component
 * 
 * A specialized page template for displaying forms.
 * It extends the StandardPage component and adds features specific to form pages:
 * - Form and sidebar layout
 * - Success state handling
 * - Responsive grid layout
 * 
 * This template is ideal for pages like Contact, Quote Request, etc.
 */
export function FormPage({
  form,
  sidebar,
  sidebarPosition = 'right',
  columns = { form: 7, sidebar: 5 },
  isSubmitted = false,
  successComponent,
  formContainerClassName = '',
  children,
  ...standardPageProps
}: FormPageProps) {
  // If form has been submitted and we have a success component, show it
  if (isSubmitted && successComponent) {
    return (
      <StandardPage {...standardPageProps}>
        {successComponent}
      </StandardPage>
    );
  }

  // If we have a sidebar, use grid layout
  if (sidebar) {
    return (
      <StandardPage {...standardPageProps}>
        <Grid columns={{ default: 1, md: 12 }} gap={8} className={formContainerClassName}>
          {/* Form Section */}
          <Column 
            span={{ 
              default: 'full', 
              md: columns.form as 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
            }}
            className={sidebarPosition === 'left' ? 'md:order-2' : 'md:order-1'}
          >
            {form}
          </Column>
          
          {/* Sidebar Section */}
          <Column 
            span={{ 
              default: 'full', 
              md: columns.sidebar as 'full' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 
            }}
            className={sidebarPosition === 'left' ? 'md:order-1' : 'md:order-2'}
          >
            {sidebar}
          </Column>
        </Grid>
        
        {/* Additional content below the form */}
        {children}
      </StandardPage>
    );
  }
  
  // If no sidebar, just show the form
  return (
    <StandardPage {...standardPageProps}>
      <div className={`max-w-3xl mx-auto ${formContainerClassName}`}>
        {form}
      </div>
      
      {/* Additional content below the form */}
      {children}
    </StandardPage>
  );
}

export default FormPage; 