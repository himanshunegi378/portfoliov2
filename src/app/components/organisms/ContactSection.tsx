import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Heading level={2} className="text-3xl text-center mb-8">Let’s Chat!</Heading>
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded p-2" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded p-2" 
              placeholder="Your Email" 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea 
              className="w-full border border-gray-300 rounded p-2" 
              rows={4} 
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button onClick={() => {}} type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
