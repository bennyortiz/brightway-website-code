'use client';

import React, { useState } from 'react';
import { Send, User, Mail, Phone, BookCheck, Check } from 'lucide-react';
import { Input, Textarea, Select, FormGroup, Checkbox } from '@/app/@components/ui/forms';
import { Button } from '@/app/@components/ui/buttons';
import { Card, CardHeader, CardBody, CardFooter, CardTitle } from '@/app/@components/ui/cards';
import { submitContactForm } from '@/app/@lib/api/services/contactForm';
import { serviceItems } from '@/app/@lib/data/services';

/**
 * ContactForm Component
 *
 * Renders a form that allows users to submit contact information and inquiries.
 * Handles form state and submission with client-side validation.
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          consent: false,
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your message. Please try again.',
      });
    }
  };

  // Create options for the service dropdown from our service data
  const serviceOptions = [
    { value: '', label: 'Select a service', disabled: true },
    ...serviceItems.map((service) => ({
      value: service.title.toLowerCase().replace(/\s+/g, '-'),
      label: service.title,
    })),
  ];

  return (
    <Card className="h-full card-stable" variant="default">
      <CardHeader>
        <CardTitle className="heading-stable">Send Us a Message</CardTitle>
        <p className="text-gray-600 mt-2">We'll get back to you within 24 hours</p>
      </CardHeader>

      <CardBody>
        {submitStatus.success ? (
          <div className="flex flex-col items-center justify-center p-8 text-center min-h-[350px]">
            <div className="bg-green-100 text-green-700 p-4 rounded-full mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">{submitStatus.message}</p>
            <Button
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  message: '',
                  consent: false,
                });
                setSubmitStatus({});
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 min-h-[350px]">
            {submitStatus.message && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  submitStatus.success
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormGroup>
                <Input
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  icon={<User size={18} />}
                />
              </FormGroup>

              <FormGroup>
                <Input
                  name="email"
                  type="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  icon={<Mail size={18} />}
                />
              </FormGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormGroup>
                <Input
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  icon={<Phone size={18} />}
                  helperText="Optional, but helps us reach you faster"
                />
              </FormGroup>

              <FormGroup>
                <Select
                  name="service"
                  label="Service Interested In"
                  value={formData.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  icon={<BookCheck size={18} />}
                />
              </FormGroup>
            </div>

            <div className="mb-6">
              <FormGroup>
                <Textarea
                  name="message"
                  label="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cleaning needs..."
                  rows={5}
                  required
                />
              </FormGroup>
            </div>

            <div className="mb-6">
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleChange as any}
                label="I agree to be contacted about my inquiry and understand the Privacy Policy regarding how my data is used."
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isSubmitting}
              rightIcon={<Send size={18} />}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </CardBody>
    </Card>
  );
};

export default ContactForm;
