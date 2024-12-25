import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    contact_name: '',
    company_name: '',
    email: '',
    inquiry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('sponsor_interest_list')
        .insert([{
          ...formData,
          created_at: new Date().toISOString()
        }])
        .select();

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your interest! We will contact you soon.'
      });
      setFormData({
        contact_name: '',
        company_name: '',
        email: '',
        inquiry: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please try again.'
      });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-7xl mx-auto p-8">
      {/* Left side - Benefits */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-8 text-[#FFDA00]">
          Why Sponsor RocketHacks?
        </h2>
        
        <h3 className="text-2xl mb-4 text-white text-left">
          As a sponsor, you&apos;ll be able to:
        </h3>
        
        <ul 
          className="
            list-disc          /* Use standard bullet points */
            list-outside       /* Bullets sit outside the text block */
            marker:text-[#FFDA00] /* Tailwind 3+ supports coloring the bullet via marker */
            pl-6              /* Left padding for the bullets */
            space-y-2         /* Spacing between list items */
            text-white/90 text-left
            mb-8
          "
        >
          <li>Introduce your product or platform to over 200+ student developers</li>
          <li>Recruit from an elite pool of software developers and designers</li>
          <li>Increase your brand&apos;s visibility through RocketHacks&apos; social media channels and events</li>
          <li>Integrate your products into hacker creations</li>
          <li>Facilitate interaction between participants and your employees &amp; brand</li>
          <li>Mentor and assist hackers with their projects</li>
        </ul>
        
        <p className="mt-8 text-lg text-white text-left">
          Interested in sponsoring? Fill out this contact form. For more information, check out our <a href="/documents/SPONSORSHIP PACKET(Updated MLH)- RocketHacks.pdf" className="text-[#FFDA00]">Prospectus</a>.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="flex-1">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }} className="space-y-6">
          <div>
            <label htmlFor="contact_name" className="block text-[#FFDA00] mb-2 text-left">
              Full Name: <span className="text-[#FFDA00]">*</span>
            </label>
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              value={formData.contact_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white 
                       text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-[#FFDA00]"
            />
          </div>

          <div>
            <label htmlFor="company_name" className="block text-[#FFDA00] mb-2 text-left">
              Company: <span className="text-[#FFDA00]">*</span>
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white 
                       text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-[#FFDA00]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#FFDA00] mb-2 text-left">
              Email: <span className="text-[#FFDA00]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-md bg-white 
                       text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-[#FFDA00]"
            />
          </div>

          <div>
            <label htmlFor="inquiry" className="block text-[#FFDA00] mb-2 text-left">
              Inquiry: <span className="text-[#FFDA00]">*</span>
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white 
                       text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-[#FFDA00]
                       resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent text-[#FFDA00] 
                      px-4 py-2
                      rounded-md font-medium 
                      border-2 border-[#FFDA00]
                      transform hover:scale-105
                      transition-all duration-300
                      shadow-lg hover:shadow-[0_0_20px_rgba(244,226,108,0.3)]
                      backdrop-blur-sm
                      hover:bg-[#FFDA00]/10
                      disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {submitStatus.message && (
            <div className={`text-center p-3 rounded-md ${
              submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SponsorForm;