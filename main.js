// Data
const certificates = [
  {
      title: "AI Career Essentials",
      issuer: "ALX",
      date: "July 2024",
      verify: "https://intranet.alxswe.com/certificates/fZMHNFLn3r"
  },
  // ... (rest of the certificates data)
];

const projects = [
  {
      title: "Churn Analysis for Student Retention",
      description: "Predictive models to forecast churn risk using Decision Tree and Logistic Regression.",
      link: "https://github.com/asser-github/churn-analysis"
  },
  // ... (rest of the projects data)
];

const navigationItems = ['Home', 'About', 'Projects', 'Certifications', 'Contact'];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const navigation = document.getElementById('navigation');

// Navigation
function createNavigation() {
  navigationItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${item.toLowerCase()}`;
      a.className = 'hover:text-blue-400 transition duration-200';
      a.textContent = item;
      li.appendChild(a);
      navigation.appendChild(li);
  });
}

// Projects
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'bg-gray-800 border-gray-700 shadow-lg transition-transform transform hover:scale-105 p-6 rounded-lg';
  
  card.innerHTML = `
      <h3 class="text-xl font-bold mb-4">${project.title}</h3>
      <p class="mb-4 text-gray-300">${project.description}</p>
      <a 
          href="${project.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
      >
          View Project
          <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
          </svg>
      </a>
  `;
  
  return card;
}

// Certificates
function createCertificateCard(cert) {
  const card = document.createElement('div');
  card.className = 'bg-gray-700 border-gray-600 shadow-lg transition-transform transform hover:scale-105 p-6 rounded-lg';
  
  card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${cert.title}</h3>
      <p class="text-gray-300 mb-1">${cert.issuer}</p>
      <p class="text-gray-400 mb-4">${cert.date}</p>
      <a 
          href="${cert.verify}"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-blue-400 hover:text-blue-300 transition duration-200"
      >
          Verify Certificate
          <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
              <path d="M15 3h6v6"></path>
              <path d="M10 14L21 3"></path>
          </svg>
      </a>
  `;
  
  return card;
}

// Initialize
function init() {
  createNavigation();
  
  projects.forEach(project => {
      projectsGrid.appendChild(createProjectCard(project));
  });
  
  certificates.forEach(cert => {
      certificatesGrid.appendChild(createCertificateCard(cert));
  });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);