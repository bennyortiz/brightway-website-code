'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            <option value="">Select a service</option>
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move">Move In/Out Cleaning</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
