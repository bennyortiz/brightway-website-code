/**
 * FAQ Item Interface
 * 
 * Defines the structure for frequently asked questions and their answers.
 */
export interface FAQItem {
  question: string
  answer: string
}

/**
 * FAQ Categories
 * 
 * Categorizes the FAQs for better organization and user experience.
 */
export interface FAQCategory {
  title: string
  items: FAQItem[]
}

/**
 * FAQ Data
 * 
 * Contains all frequently asked questions organized by category.
 * Used in the FAQ section to provide helpful information to potential clients.
 */
import { faqItems } from '@/app/content/faqInfo';

export const faqData = faqItems; 