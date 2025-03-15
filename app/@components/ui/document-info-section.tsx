'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { createElement } from 'react';
import { Calendar, FileText, Download } from 'lucide-react';

// Dynamically import the print button
const PrintButton = dynamic(() => import('./print-button'), {
  ssr: false,
  loading: () => createElement('div', {
    className: 'flex items-center text-primary',
    children: [
      createElement(Download, { className: 'h-5 w-5 mr-2' }),
      'Print'
    ]
  })
});

interface DocumentInfoSectionProps {
  lastUpdated: string;
}

export default function DocumentInfoSection({ lastUpdated }: DocumentInfoSectionProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <Calendar className="h-5 w-5 text-primary mr-2" />
        <span className="text-gray-700">
          Last Updated: <span className="font-medium">{lastUpdated}</span>
        </span>
      </div>
      <div className="flex gap-4">
        <Link
          href="/privacy-policy"
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <FileText className="h-5 w-5 mr-2" />
          <span>Privacy Policy</span>
        </Link>
        <PrintButton />
      </div>
    </div>
  );
} 