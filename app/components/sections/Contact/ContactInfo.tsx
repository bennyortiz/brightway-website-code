import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * Contact Info Component
 * 
 * Displays contact information including phone, email, and address.
 * Uses icons to visually represent each contact method.
 */
const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Call Us</h3>
          <p className="text-gray-600">(555) 123-4567</p>
          <p className="text-gray-600">Mon-Fri: 8am - 6pm</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Email Us</h3>
          <p className="text-gray-600">info@brightwaycleaning.com</p>
          <p className="text-gray-600">We respond within 24 hours</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
          <p className="text-gray-600">123 Cleaning Street</p>
          <p className="text-gray-600">Business District, City 12345</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo 