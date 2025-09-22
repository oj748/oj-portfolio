'use client';

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Document-Based Report Generation",
      description: "Published technical paper on automated report generation using the officer package in R. This project demonstrates advanced data visualization and document automation techniques, showcasing proficiency in statistical computing and reproducible research methodologies.",
      longDescription: "This project involved developing an automated system for generating comprehensive reports using R's officer package. The system can process large datasets, create visualizations, and generate formatted documents with tables, charts, and statistical summaries. The work resulted in a published technical paper that contributes to the field of reproducible research and document automation.",
      tech: ["R", "Officer Package", "Data Science", "Statistical Computing", "Reproducible Research"],
      category: "Data Science",
      status: "Published",
      year: "2024",
      features: [
        "Automated report generation",
        "Data visualization integration",
        "Statistical analysis automation",
        "Document formatting",
        "Reproducible research workflows"
      ]
    },
    {
      id: 2,
      title: "AI/ML Projects Portfolio",
      description: "Various machine learning projects developed during diploma studies, showcasing proficiency in Python and data science methodologies. These projects demonstrate practical application of machine learning algorithms and data analysis techniques.",
      longDescription: "A comprehensive collection of machine learning projects covering various domains including supervised learning, unsupervised learning, and deep learning. Projects include classification problems, regression analysis, clustering, and neural network implementations. Each project demonstrates different aspects of the machine learning pipeline from data preprocessing to model evaluation.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed",
      year: "2023-2024",
      features: [
        "Supervised learning algorithms",
        "Unsupervised learning techniques",
        "Data preprocessing pipelines",
        "Model evaluation and validation",
        "Visualization and reporting"
      ]
    },
    {
      id: 3,
      title: "Music Performance Projects",
      description: "Trinity Grade 8 Piano performances and compositions, demonstrating musical excellence and creative expression. These projects showcase technical proficiency and artistic interpretation in classical and contemporary piano music.",
      longDescription: "A collection of piano performances and compositions that demonstrate advanced musical skills and creative expression. Projects include classical repertoire performances, original compositions, and collaborative musical works. The portfolio showcases technical proficiency, musical interpretation, and creative composition skills.",
      tech: ["Piano", "Music Theory", "Performance", "Composition", "Classical Music"],
      category: "Music & Arts",
      status: "Ongoing",
      year: "2020-2024",
      features: [
        "Classical repertoire performance",
        "Original composition",
        "Music theory application",
        "Performance techniques",
        "Collaborative projects"
      ]
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis and visualization using modern web technologies. This project demonstrates skills in frontend development, data processing, and user interface design.",
      longDescription: "An interactive web-based dashboard that allows users to upload datasets, perform various analyses, and create dynamic visualizations. The dashboard features real-time data processing, multiple chart types, and export capabilities. Built with modern web technologies and responsive design principles.",
      tech: ["React", "JavaScript", "D3.js", "Python", "Flask", "SQLite"],
      category: "Web Development",
      status: "In Progress",
      year: "2024",
      features: [
        "Interactive data visualization",
        "Real-time data processing",
        "Multiple chart types",
        "Export functionality",
        "Responsive design"
      ]
    },
    {
      id: 5,
      title: "Chinese Language Learning App",
      description: "Mobile application for learning Chinese language with HSK 2 certification focus. The app includes vocabulary building, pronunciation practice, and progress tracking features.",
      longDescription: "A comprehensive mobile application designed to help users learn Chinese language, specifically targeting HSK 2 certification. The app features interactive lessons, vocabulary flashcards, pronunciation guides, and progress tracking. It includes gamification elements to enhance learning engagement and retention.",
      tech: ["React Native", "JavaScript", "Firebase", "Audio Processing", "Gamification"],
      category: "Mobile Development",
      status: "Completed",
      year: "2023",
      features: [
        "Interactive lessons",
        "Vocabulary flashcards",
        "Pronunciation practice",
        "Progress tracking",
        "Gamification elements"
      ]
    },
    {
      id: 6,
      title: "Statistical Analysis Toolkit",
      description: "Comprehensive toolkit for statistical analysis and hypothesis testing. This project provides a collection of statistical functions and visualization tools for data analysis.",
      longDescription: "A comprehensive toolkit that provides various statistical analysis functions including descriptive statistics, hypothesis testing, regression analysis, and data visualization. The toolkit is designed to be user-friendly while providing powerful statistical capabilities for researchers and data analysts.",
      tech: ["R", "Shiny", "Statistical Analysis", "Data Visualization", "Hypothesis Testing"],
      category: "Data Science",
      status: "Completed",
      year: "2023",
      features: [
        "Descriptive statistics",
        "Hypothesis testing",
        "Regression analysis",
        "Data visualization",
        "Interactive Shiny interface"
      ]
    }
  ];

  const categories = ["All", "Data Science", "Machine Learning", "Web Development", "Mobile Development", "Music & Arts"];

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#f9fafb'}}>
      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 mt-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{color: '#2563eb'}}>
            Projects & Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my work across data science, machine learning, web development, and creative projects. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-category">
                  {project.category}
                </div>
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>
              
              <h3 className="project-title">
                {project.title}
              </h3>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet"></span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="feature-item">
                      <span className="feature-bullet"></span>
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-footer">
                <span className="project-year">{project.year}</span>
                <button className="project-button">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">
            Interested in collaborating?
          </h3>
          <p className="cta-description">
            I'm always excited to work on new projects and explore innovative solutions. 
            Let's discuss how we can work together!
          </p>
          <div className="cta-buttons">
            <Link href="/contact">
              <button className="primary-button">
                Get In Touch
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
