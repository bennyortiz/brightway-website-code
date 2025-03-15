/**
 * Contact form submission interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/**
 * Submit contact form data
 *
 * In a production environment, this would send the data to a CRM,
 * email service, or backend API
 */
export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean }> {
  try {
    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, this would be a real API call
    // Example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // return response.json();

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit contact form');
  }
}
