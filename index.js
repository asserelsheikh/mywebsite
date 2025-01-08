import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState(null);

  const certificates = [
    // ... (same as before)
  ];

  const projects = [
    // ... (same as before)
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Asser Elsheikh</h1>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome</h2>
          <p className="text-xl mb-8">Hi, I'm Asser Elsheikh, a Data Analyst and AI Specialist. Explore my portfolio to learn more about my work and skills.</p>
          <a href="#about" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-200">Learn More</a>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a Data Analyst and AI Specialist with a passion for leveraging data to drive business success. 
            With expertise in advanced Excel, SQL, Python, Tableau, and Machine Learning, I focus on delivering 
            actionable insights and creating interactive dashboards.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 shadow-lg transition-transform transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 shadow-lg transition-transform transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 mb-4">{cert.date}</p>
                  <a 
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
                  >
                    Verify Certificate <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out via email at{' '}
            <a href="mailto:asermelsheikh@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-200">
              asermelsheikh@gmail.com
            </a>
          </p>
          <p className="text-lg">
            WhatsApp:{' '}
            <a href="https://wa.me/201226594205" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
              +201226594205
            </a>
          </p>
        </div>
      </section>
    </div>
  );
} ``javascript
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState(null);

  const certificates = [
    {
      title: "AI Career Essentials",
      issuer: "ALX",
      date: "July 2024",
      verify: "https://intranet.alxswe.com/certificates/fZMHNFLn3r"
    },
    {
      title: "Elements of AI",
      issuer: "University of Helsinki",
      date: "April 2024",
      verify: "https://certificates.mooc.fi/validate/12xhtn0q2e"
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      date: "September 2022",
      verify: "https://freecodecamp.org/certification/Asser_Elsheikh/data-analysis-with-python-v7"
    },
    {
      title: "CS50's Introduction to Databases with SQL",
      issuer: "Harvard University",
      date: "May 2024",
      verify: "https://cs50.harvard.edu/certificates/c75faba5-2909-4fc5-a41c-4bfe1d2e4810"
    },
    {
      title: "Applied Data Science with Python - Level 2",
      issuer: "IBM",
      date: "July 2024",
      verify: "https://www.credly.com/go/C6JHZpOX"
    },
    {
      title: "Data Analysis",
      issuer: "UNICEF",
      date: "September 2023",
      verify: "GYebrtTcFF"
    },
    {
      title: "Google Data Analysis Professional",
      issuer: "Google",
      date: "September 2023",
      verify: "Multiple Course Certificates"
    },
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "Harverd University",
      date: "December 2024",
      verify: "https://cs50.harvard.edu/certificates/91d50c0a-4c3a-4c5f-994c-3dec8545e17a"
    },
    {
        title: "Data Analytics Essentials",
        issuer: "CISCO Networking",
        date: "June 2024",
        verify: "https://www.credly.com/badges/dc1ca157-055f-4307-9d15-1182e7b795b0/print"
    },
    {
        title: "DATA ANALYSIS CHALLENGER TRACK",
        issuer: "FWD Intiative",
        date: "July 2022",
        verify: "RANU2ET9"
    },
    {
        title: "Inequality analysis using R: Disaggregated data from surveys",
        issuer: "World Health Organization",
        date: "August 2023",
        verify: "https://openwho.org/verify/xuzem-sipuh-coses-bipiz-vinir"
    }
  ];

  const projects = [
    {
      title: "Churn Analysis for Student Retention",
      description: "Predictive models to forecast churn risk using Decision Tree and Logistic Regression.",
      link: "https://github.com/asser-github/churn-analysis"
    },
    {
      title: "POS Stock Control Database Design",
      description: "Database optimization for inventory and spending analysis.",
      link: "https://github.com/asser-github/pos-stock-control"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Interactive sales data dashboard using Looker Studio.",
      link: "https://github.com/asser-github/sales-dashboard"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Asser Elsheikh</h1>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'About', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
 ```javascript
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome</h2>
          <p className="text-xl mb-8">Hi, I'm Asser Elsheikh, a Data Analyst and AI Specialist. Explore my portfolio to learn more about my work and skills.</p>
          <a href="#about" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition duration-200">Learn More</a>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a Data Analyst and AI Specialist with a passion for leveraging data to drive business success. 
            With expertise in advanced Excel, SQL, Python, Tableau, and Machine Learning, I focus on delivering 
            actionable insights and creating interactive dashboards.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 shadow-lg transition-transform transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 shadow-lg transition-transform transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 mb-4">{cert.date}</p>
                  <a 
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
                  >
                    Verify Certificate <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out via email at{' '}
            <a href="mailto:asermelsheikh@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-200">
              asermelsheikh@gmail.com
            </a>
          </p>
          <p className="text-lg">
            WhatsApp:{' '}
            <a href="https://wa.me/201226594205 " target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
              +201226594205
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}