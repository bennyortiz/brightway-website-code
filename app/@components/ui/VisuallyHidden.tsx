'use client';

import React from 'react';
import { srOnlyClass } from '@/app/@lib/utils/accessibility';

/**
 * VisuallyHidden Component
 * 
 * A component that visually hides content while keeping it accessible to screen readers.
 * Use this for text that should be read by screen readers but not visible on the screen.
 * 
 * @example
 * <VisuallyHidden>This text is only for screen readers</VisuallyHidden>
 */
const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className={srOnlyClass}>{children}</span>;
};

export default VisuallyHidden;
