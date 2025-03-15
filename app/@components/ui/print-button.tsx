'use client';

import { Download } from 'lucide-react';

export interface PrintButtonProps {
  className?: string;
}

export default function PrintButton({ className = '' }: PrintButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      className={`flex items-center text-primary hover:text-primary/80 transition-colors ${className}`}
      onClick={handlePrint}
    >
      <Download className="h-5 w-5 mr-2" />
      <span>Print</span>
    </button>
  );
} 