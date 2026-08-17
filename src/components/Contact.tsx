import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, User, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SOCIAL_LINKS, PERSONAL_DETAILS } from '../data/portfolioData';
import type { ContactFormData } from '../types/portfolio';

interface ContactProps {
  onShowToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      onShowToast('Please fill out all required fields correctly.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you ${formData.name}! Your message has been sent successfully to Rutuja.`, 'success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard! (rutujasawale92@gmail.com)', 'info');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.phone);
    setCopiedPhone(true);
    onShowToast('Phone number copied to clipboard! (+91 9022507892)', 'info');
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0D0B1D] border-t border-[#7C3AED]/25">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-[#15102A]/80 px-4 py-1.5 rounded-full border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white mt-4 mb-4">
            Let's Build Something <span className="gradient-text neon-text-purple">Intelligent</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have an opportunity, project idea or collaboration in mind? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel border border-[#7C3AED]/30 space-y-6 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
              <div>
                <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                  Direct Contact
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Feel free to reach out via email, phone/WhatsApp, or download my resume.
                </p>
              </div>

              {/* Email Card with Copy Toast */}
              <div className="p-4 rounded-2xl bg-[#15102A]/80 border border-[#7C3AED]/30 flex items-center justify-between hover:border-purple-400 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#7C3AED]/20 text-[#A855F7] border border-[#7C3AED]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Email Address</p>
                    <a 
                      href={`mailto:${SOCIAL_LINKS.email}`} 
                      className="text-sm font-semibold text-white hover:text-purple-300 truncate block transition-colors"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-purple-950/60 text-purple-200 hover:text-white border border-[#7C3AED]/40 transition-all flex-shrink-0 hover:bg-[#7C3AED]"
                  title="Copy email address"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-[#15102A]/80 border border-[#7C3AED]/30 flex items-center justify-between hover:border-purple-400 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#7C3AED]/20 text-[#A855F7] border border-[#7C3AED]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a 
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors block"
                    >
                      {PERSONAL_DETAILS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl bg-purple-950/60 text-purple-200 hover:text-white border border-[#7C3AED]/40 transition-all flex-shrink-0 hover:bg-[#7C3AED]"
                    title="Copy phone number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-purple-300 bg-[#7C3AED]/20 px-2.5 py-2.5 rounded-xl border border-[#7C3AED]/30 hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center"
                    aria-label="Chat on WhatsApp"
                  >
                    Chat →
                  </a>
                </div>
              </div>

              {/* View / Download Resume Card */}
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onShowToast('Opening Rutuja Sawale Resume PDF...', 'info')}
                className="p-4 rounded-2xl bg-[#7C3AED]/15 border border-[#7C3AED]/40 flex items-center justify-between hover:bg-[#7C3AED] hover:text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#7C3AED]/30 text-purple-200 border border-[#7C3AED]/40 group-hover:scale-105 transition-transform">
                    <Download className="w-5 h-5 text-purple-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-purple-300 uppercase tracking-wider group-hover:text-purple-100">Curriculum Vitae</p>
                    <p className="text-sm font-bold text-white">View / Download Resume PDF</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-purple-200 bg-[#15102A]/80 px-3 py-1.5 rounded-lg border border-purple-400/40 group-hover:bg-purple-900 group-hover:text-white transition-all">
                  View PDF →
                </span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#15102A]/80 border border-[#7C3AED]/30 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#7C3AED]/20 text-[#A855F7] border border-[#7C3AED]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-white">
                    {PERSONAL_DETAILS.location}
                  </p>
                </div>
              </div>

              {/* Social Accounts */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Connect On Socials:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass-card border border-[#7C3AED]/30 flex items-center justify-center gap-2 text-purple-200 hover:text-white hover:border-purple-400 text-xs font-bold transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl glass-card border border-[#7C3AED]/30 flex items-center justify-center gap-2 text-purple-200 hover:text-white hover:border-purple-400 text-xs font-bold transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-300" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-purple-200 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#A855F7] flex-shrink-0" />
                <p className="text-xs leading-relaxed font-medium">
                  Open for AI/ML, Full-Stack & Cloud Internships, freelance web projects, and software engineering opportunities.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass-panel border border-[#7C3AED]/30 space-y-6 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-purple-400" />
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-[#15102A]/80 text-white placeholder-slate-500 border ${
                        errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-[#7C3AED]/30 focus:border-purple-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-purple-400" />
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-[#15102A]/80 text-white placeholder-slate-500 border ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-[#7C3AED]/30 focus:border-purple-400'
                      } focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-purple-400" />
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Rutuja, I would like to chat about an opportunity or project..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-[#15102A]/80 text-white placeholder-slate-500 border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-[#7C3AED]/30 focus:border-purple-400'
                    } focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 transition-all`}
                  />
                </div>
                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] via-purple-600 to-[#A855F7] text-white font-bold text-sm shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-purple-400/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
