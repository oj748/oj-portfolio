'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Document-Based Report Generation",
      description: "Published technical paper on automated report generation using the officer package in R. This project demonstrates advanced data visualization and document automation techniques.",
      tech: ["R", "Officer Package", "Data Science"]
    },
    {
      title: "AI/ML Projects Portfolio",
      description: "Various machine learning projects developed during diploma studies, showcasing proficiency in Python and data science methodologies.",
      tech: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      title: "Music Performance Projects",
      description: "Trinity Grade 8 Piano performances and compositions, demonstrating musical excellence and creative expression.",
      tech: ["Piano", "Music Theory", "Performance"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#f9fafb'}}>
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 mt-16">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Side - Qualifications Box */}
          <div className="qualifications-section">
            <h2 className="text-2xl font-bold text-center mb-8" style={{color: '#2563eb'}}>
              Qualifications<br />and Skills
            </h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div>
                <h3 style={{fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937'}}>Education</h3>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151'}}>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Class 10 - 98%
                  </li>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Pursuing Diploma in AI/ML
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937'}}>Academic Skills</h3>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151'}}>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Strong command over R and Python
                  </li>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Strong background in Data Science
                  </li>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Published technical paper on document-based report generation using officer package of R
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937'}}>Extracurricular Skills</h3>
                <ul style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151'}}>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    Trinity Grade 8 Pianist
                  </li>
                  <li style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{width: '0.5rem', height: '0.5rem', backgroundColor: '#3b82f6', borderRadius: '50%', marginRight: '0.75rem'}}></span>
                    HSK 2 Chinese
                  </li>
                </ul>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/contact">
                <button className="contact-button">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <Image
                src="/pic.png"
                alt="COURAGE THE COWARDLY DOG  Profile Photo"
                width={240}
                height={240}
                className="profile-image"
                priority
              />
            </div>
            <div className="profile-name-card">
              <h1 className="profile-name">
              COURAGE THE COWARDLY DOG
              </h1>
            </div>
          </div>
        </div>

        {/* Personal Information Bar */}
        <div className="personal-info-section" style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2563eb', fontWeight: '700', fontSize: '1.125rem', marginBottom: '1rem'}}>Personal Information</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', color: '#374151'}}>
            <div>
              <h4 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Hobbies</h4>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                <li style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{width: '0.375rem', height: '0.375rem', backgroundColor: '#60a5fa', borderRadius: '50%', marginRight: '0.5rem'}}></span>
                  🎵 Learning music
                </li>
                <li style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{width: '0.375rem', height: '0.375rem', backgroundColor: '#60a5fa', borderRadius: '50%', marginRight: '0.5rem'}}></span>
                  🇨🇳 Learning Chinese
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Interests</h4>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                <li style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{width: '0.375rem', height: '0.375rem', backgroundColor: '#60a5fa', borderRadius: '50%', marginRight: '0.5rem'}}></span>
                  🤖 Artificial Intelligence & Machine Learning
                </li>
                <li style={{display: 'flex', alignItems: 'center'}}>
                  <span style={{width: '0.375rem', height: '0.375rem', backgroundColor: '#60a5fa', borderRadius: '50%', marginRight: '0.5rem'}}></span>
                  📊 Data Science & Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Slideshow Section */}
        <div className="projects-section">
          <h3 style={{color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem', marginBottom: '1.5rem'}}>
            A slideshow of various Projects I have done
          </h3>
          
          <div className="slideshow-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <h4 style={{fontSize: '1.125rem', fontWeight: '700', color: '#6d28d9', marginBottom: '0.75rem'}}>
                  {project.title}
                </h4>
                <p style={{color: '#374151', marginBottom: '1rem'}}>
                  {project.description}
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: '#ede9fe',
                        color: '#6d28d9',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Slideshow Navigation */}
            <div className="slideshow-nav">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
            <Link href="/projects">
              <button className="primary-button">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}