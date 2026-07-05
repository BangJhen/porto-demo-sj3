"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Calendar, 
  Send, Clock, CalendarDays 
} from 'lucide-react';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaInstagram 
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    alert('Thank you! Your message has been sent successfully.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'jhenerar21@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '0838-0864-0875'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Kabupaten Bandung, Jawa Barat'
    },
    {
      icon: <Calendar size={20} />,
      title: 'Availability',
      value: 'Open for Opportunities'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/ammar-ridho/' },
    { icon: <FaGithub size={18} />, href: 'https://github.com/BangJhen' },
    { icon: <FaTwitter size={18} />, href: '#' },
    { icon: <FaInstagram size={18} />, href: '#' },
    { icon: <Mail size={18} />, href: 'mailto:jhenerar21@gmail.com' }
  ];

  return (
    <section id="contact" className="w-full py-20 min-h-screen flex items-center bg-[#fafafa]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[85rem] mx-auto w-full px-6 md:px-10 lg:px-16"
      >
        {/* Header */}
        <div className="space-y-6 max-w-2xl mb-12">
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-sm font-semibold text-blue-600">
              Contact Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Let's Build Something <span className="text-[#1F5CE3]">Meaningful</span> Together
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-12">

            {/* Contact Info Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className={`flex items-start gap-5 ${idx !== contactInfo.length - 1 ? 'pb-8 border-b border-gray-50' : ''}`}>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-500 text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="uppercase tracking-widest text-sm font-bold text-blue-600 mb-5">
                Let's Connect
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href}
                    className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#1F5CE3] hover:bg-[#1F5CE3] hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 h-full">
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
                <p className="text-gray-500">I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5CE3]/20 focus:border-[#1F5CE3] transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5CE3]/20 focus:border-[#1F5CE3] transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5CE3]/20 focus:border-[#1F5CE3] transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5CE3]/20 focus:border-[#1F5CE3] transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#4A72FF] hover:bg-[#1F5CE3] text-white rounded-2xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 w-full">
          <div className="bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-gray-100">
            
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div className="relative w-14 h-14 rounded-full bg-blue-50 text-[#1F5CE3] flex items-center justify-center shrink-0 border-2 border-blue-100">
                <Clock size={24} />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Usually responds within 24 hours</h4>
                <p className="text-gray-500 text-sm">Available Monday — Friday, 9AM — 6PM (PST)</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-100"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto md:justify-end">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-gray-900 mb-1">Prefer a quick chat?</h4>
                <p className="text-gray-500 text-sm">Let's connect and discuss your ideas!</p>
              </div>
              <button className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1F5CE3] text-[#1F5CE3] font-bold hover:bg-blue-50 transition-colors bg-white">
                <CalendarDays size={18} /> Schedule a Call
              </button>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
