'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "couragedoggy@email.com",
      description: "Send me an email anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9876543210",
      description: "Call or text me directly"
    },
    {
      icon: "📍",
      title: "Location",
      value: "India",
      description: "Based in India, open to remote work"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/couragedoggy",
      description: "Connect with me professionally"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "#",
      description: "View my code repositories"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
      description: "Professional networking"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:couragedoggy@email.com",
      description: "Direct email contact"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#f9fafb'}}>
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 mt-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2563eb'}}>
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply chat about technology and music. Let's connect!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Contact Form */}
          <div className="contact-form-section">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#7c3aed'}}>
              Send Me a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="contact-info-section">
            <h2 className="text-2xl font-bold mb-6" style={{color: '#2563eb'}}>
              Contact Information
            </h2>
            
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">
                      {info.title}
                    </h3>
                    <p className="contact-info-value">
                      {info.value}
                    </p>
                    <p className="contact-info-description">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3 className="social-title">
                Connect With Me
              </h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <div className="social-content">
                      <span className="social-name">{social.name}</span>
                      <span className="social-description">{social.description}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional-info-section">
          <h3 className="additional-info-title">
            What I'm Looking For
          </h3>
          <div className="additional-info-grid">
            <div className="info-card">
              <h4 className="info-card-title">🤖 AI/ML Projects</h4>
              <p className="info-card-description">
                Excited to work on machine learning projects, data analysis, and AI applications
              </p>
            </div>
            <div className="info-card">
              <h4 className="info-card-title">💻 Web Development</h4>
              <p className="info-card-description">
                Frontend and backend development using modern technologies and frameworks
              </p>
            </div>
            <div className="info-card">
              <h4 className="info-card-title">🎵 Music Collaboration</h4>
              <p className="info-card-description">
                Piano performances, compositions, and musical projects
              </p>
            </div>
            <div className="info-card">
              <h4 className="info-card-title">📊 Data Science</h4>
              <p className="info-card-description">
                Statistical analysis, visualization, and research projects
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">
            Ready to work together?
          </h3>
          <p className="cta-description">
            Whether you have a project in mind or just want to chat about technology and music, 
            I'd love to hear from you!
          </p>
          <div className="cta-buttons">
            <Link href="/projects">
              <button className="primary-button">
                View My Projects
              </button>
            </Link>
            <Link href="/">
              <button className="contact-button">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
