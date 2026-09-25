import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, Coffee, Sparkles, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    coffeeRoast: 'Yirgacheffe (Floral & Bright)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const recipientEmail = personalInfo.emailDelivery?.toEmail || personalInfo.socials.email;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Pre-formatted mailto & Gmail URLs
  const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
  const mailtoBody = encodeURIComponent(
    `Hi Ruth,\n\n${formData.message || ''}\n\nSender: ${formData.name || ''} (${formData.email || ''})\nCoffee Preference: ${formData.coffeeRoast}`
  );
  const directMailto = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${mailtoSubject}&body=${mailtoBody}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      // Send directly to Express backend (/api/contact) to save in MongoDB
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFeedback({
          type: 'success',
          text: data.message || 'Thank you! Your message has been saved successfully.',
          persistedTo: data.persistedTo,
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          coffeeRoast: 'Yirgacheffe (Floral & Bright)',
          message: '',
        });
        return;
      }

      setFeedback({
        type: 'error',
        text: data.error || 'Could not save your message. You can reach out directly via email.',
      });
    } catch (error) {
      console.error('Contact submit error:', error);
      setFeedback({
        type: 'error',
        text: 'Server is currently offline. Please use Open in Gmail or Mail App below.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F2EA] border border-[#D2BBA0] text-xs font-semibold text-[#7F5E42] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C88346]" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2E1E14] tracking-tight">
            Have an idea? <br className="hidden sm:inline" />
            <span className="text-[#7F5E42] italic">Let's build something useful.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#61442E]">
            Looking for a frontend intern who cares about design, a teammate for a high-impact hackathon, or interested in a freelance collaboration? Let’s talk.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] space-y-5 shadow-warm">
              <h3 className="font-serif font-bold text-xl text-[#2E1E14]">
                Reach Out Directly
              </h3>
              
              <p className="text-sm text-[#61442E] leading-relaxed">
                I am actively seeking <strong className="text-[#2E1E14]">Frontend &amp; UI/UX Engineering Internships</strong> and student developer collaborations. Drop a note below or reach out directly—I reply within 24-48 hours.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-[#F7F2EA] border border-[#E2D3C0] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#D2BBA0] flex items-center justify-center text-[#C88346] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-[#7F5E42] uppercase font-mono">Personal Email</div>
                    <a 
                      href={`mailto:${recipientEmail}`}
                      className="text-xs sm:text-sm font-semibold text-[#2E1E14] hover:text-[#C88346] truncate font-mono block transition-colors"
                    >
                      {recipientEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-[#FAF6F0] border border-[#E2D3C0] text-[#61442E] hover:text-[#2E1E14] hover:border-[#BA9B7B] transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-[#61442E] uppercase tracking-wider">
                  Developer &amp; Professional Links
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-[#2E1E14] hover:bg-[#EFE6DA] transition-colors font-medium"
                  >
                    <Github className="w-4 h-4 text-[#7F5E42]" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-[#2E1E14] hover:bg-[#EFE6DA] transition-colors font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-[#7F5E42]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Addis Ababa Location & Response Time */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#F7F2EA] to-[#EFE6DA] border border-[#D2BBA0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2E1E14]">
                  <MapPin className="w-4 h-4 text-[#C88346]" />
                  <span>Based in Addis Ababa, Ethiopia</span>
                </div>
                <p className="text-xs text-[#61442E]">
                  Available for remote internships worldwide and local on-site opportunities in Addis Ababa.
                </p>
                <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#7F5E42] font-mono">
                  <Coffee className="w-3.5 h-3.5 text-[#C88346]" />
                  <span>Inbox Delivery: rteklu582@gmail.com</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Email Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6F0] border border-[#E2D3C0] shadow-warm space-y-6">
              
              <div className="pb-3 border-b border-[#E2D3C0] flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#2E1E14]">
                    Send Ruth a Message
                  </h3>
                  <p className="text-xs text-[#7F5E42] mt-0.5">
                    Messages are delivered directly to <span className="font-semibold text-[#2E1E14] font-mono">{recipientEmail}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F2EA] text-[11px] font-mono text-[#5D7E54] border border-[#E2D3C0]">
                  <span className="w-2 h-2 rounded-full bg-[#5D7E54] animate-pulse"></span>
                  <span>Email Direct</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#61442E] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Bethlehem, Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#61442E] mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#61442E] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship / Project / Hackathon"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#61442E] mb-1">
                      Pick a Coffee Roast Vibe ☕
                    </label>
                    <select
                      name="coffeeRoast"
                      value={formData.coffeeRoast}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] focus:outline-none focus:ring-2 focus:ring-[#C88346]"
                    >
                      <option value="Yirgacheffe (Floral & Bright)">Yirgacheffe (Floral &amp; Bright)</option>
                      <option value="Sidama (Berry & Citrus)">Sidama (Berry &amp; Citrus)</option>
                      <option value="Harrar (Rich & Fruity)">Harrar (Rich &amp; Bold)</option>
                      <option value="Jimma (Deep & Bold)">Jimma (Deep &amp; Earthy)</option>
                      <option value="Standard Latte">Classic Cream Latte</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#61442E] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're working on, an open position, or how we might build together..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F2EA] border border-[#E2D3C0] text-sm text-[#2E1E14] placeholder-[#BA9B7B] focus:outline-none focus:ring-2 focus:ring-[#C88346] resize-none"
                  />
                </div>

                {/* Feedback message banner */}
                {feedback && (
                  <div
                    className={`p-4 rounded-xl text-xs sm:text-sm flex flex-col gap-1.5 ${
                      feedback.type === 'success'
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                        : feedback.type === 'info'
                        ? 'bg-amber-50 text-amber-900 border border-amber-300'
                        : 'bg-rose-50 text-rose-900 border border-rose-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {feedback.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : feedback.type === 'info' ? (
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                      <span>{feedback.text}</span>
                    </div>
                    {feedback.persistedTo && (
                      <span className="text-[11px] text-emerald-700 pl-6 font-mono">
                        ✓ Stored in {feedback.persistedTo}
                      </span>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm bg-[#2E1E14] text-[#FAF6F0] hover:bg-[#463020] hover:shadow-warm transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#C88346]" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={gmailWebLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-[#F7F2EA] text-[#463020] border border-[#D2BBA0] hover:bg-[#EFE6DA] hover:text-[#2E1E14] transition-all whitespace-nowrap"
                    title="Open draft directly in Gmail Web"
                  >
                    <ExternalLink className="w-4 h-4 text-[#C88346]" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    href={directMailto}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-[#F7F2EA] text-[#463020] border border-[#D2BBA0] hover:bg-[#EFE6DA] hover:text-[#2E1E14] transition-all whitespace-nowrap"
                    title="Open in your default Mail app"
                  >
                    <Mail className="w-4 h-4 text-[#C88346]" />
                    <span>Mail App</span>
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
