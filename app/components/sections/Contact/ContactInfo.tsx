import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * ContactInfo Component
 * 
 * Displays contact information including phone, email and address.
 * Uses Lucide icons for visual enhancement.
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
          <p className="text-gray-600 mb-1">Available Monday-Saturday</p>
          <a href="tel:+1234567890" className="text-primary hover:underline">
            (123) 456-7890
          </a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Email Us</h3>
          <p className="text-gray-600 mb-1">We'll respond within 24 hours</p>
          <a href="mailto:info@brightwaycleaning.com" className="text-primary hover:underline">
            info@brightwaycleaning.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
          <p className="text-gray-600 mb-1">Our main office</p>
          <address className="not-italic text-primary">
            123 Cleaning Street<br />
            San Francisco, CA 94107
          </address>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo 