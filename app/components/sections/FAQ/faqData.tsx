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
export const faqData: FAQCategory[] = [
  {
    title: "Services & Scheduling",
    items: [
      {
        question: "What cleaning services do you offer for businesses?",
        answer: "We offer a comprehensive range of commercial cleaning services including daily office cleaning, deep cleaning, floor maintenance, window cleaning, sanitization services, and specialized cleaning for different industries such as medical facilities, restaurants, and retail spaces."
      },
      {
        question: "How often can you clean our facility?",
        answer: "We customize our cleaning schedules based on your specific needs. We offer daily, weekly, bi-weekly, monthly, and one-time cleaning services. After assessing your facility, we'll recommend an optimal schedule to maintain cleanliness and hygiene."
      },
      {
        question: "Do you work after business hours?",
        answer: "Yes, we understand the importance of not disrupting your business operations. We offer flexible scheduling including evenings, nights, early mornings, and weekends to minimize any impact on your workflow."
      }
    ]
  },
  {
    title: "Pricing & Contracts",
    items: [
      {
        question: "How do you determine your cleaning rates?",
        answer: "Our pricing is based on several factors including the size of your facility, frequency of service, specific cleaning requirements, and the level of detail needed. We provide free, customized quotes after conducting an on-site assessment."
      },
      {
        question: "Do I need to sign a long-term contract?",
        answer: "While we offer contract options for clients who prefer consistent service arrangements, we also provide flexible month-to-month services. We believe in earning your business through quality work rather than binding contracts."
      },
      {
        question: "Are there any hidden fees in your services?",
        answer: "No, we pride ourselves on transparent pricing. The quote we provide includes all costs associated with your customized cleaning plan. If additional services are requested, we'll discuss pricing before proceeding."
      }
    ]
  },
  {
    title: "Quality & Safety",
    items: [
      {
        question: "What cleaning products do you use?",
        answer: "We use a combination of industry-leading, EPA-approved cleaning products and eco-friendly alternatives. All our products are selected for their effectiveness and safety. We can adjust our product selection based on your specific requirements or sensitivities."
      },
      {
        question: "How do you ensure quality control?",
        answer: "We implement a rigorous quality control system that includes regular inspections, client feedback mechanisms, and detailed cleaning checklists. Our management team conducts surprise quality checks to ensure our high standards are consistently maintained."
      },
      {
        question: "Are your cleaning staff trained and insured?",
        answer: "Yes, all our cleaning professionals undergo thorough training in cleaning techniques, product usage, and safety protocols. Additionally, our company is fully insured, including liability insurance and workers' compensation, providing peace of mind for our clients."
      }
    ]
  }
] 