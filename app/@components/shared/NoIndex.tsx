/**
 * NoIndex Component
 *
 * A simple component to mark pages as non-indexable by search engines.
 * This component adds appropriate meta tags to prevent indexing.
 *
 * Usage:
 * 1. Import at the top of your page: `import NoIndex from '@/app/@components/shared/NoIndex';`
 * 2. Add it anywhere in your page component: `<NoIndex />`
 */

import Head from 'next/head';
import React from 'react';

interface NoIndexProps {
  noFollow?: boolean; // Whether to also prevent following links
}

const NoIndex: React.FC<NoIndexProps> = ({ noFollow = false }) => {
  const content = noFollow ? 'noindex, nofollow' : 'noindex, follow';

  return (
    <Head>
      <meta name="robots" content={content} />
      <meta name="googlebot" content={content} />
    </Head>
  );
};

export default NoIndex;
