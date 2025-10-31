const projects = [
  {
    title: "Employee Management System",
    description: "Designed and deployed a microservices-based HR system supporting 1,000+ concurrent users. Implemented JWT authentication, role-based access, and real-time notifications with SignalR. Containerized and deployed via Docker + Azure CI/CD pipeline with automated testing.",
    tech: ".NET Core, Angular, EF Core",
    link: "https://github.com/saibramhanarsingoju/EmployeeManagementAPI"
  },
  {
    title: "Smart Inventory Management",
    description: "Developed full-stack inventory solution supporting real-time stock tracking and analytics dashboards. Integrated JWT security, Spring Data JPA, and multi-user authentication for enterprise clients. Deployed on AWS EC2 + RDS with Jenkins CI/CD pipelines.",
    tech: "Java, Spring Boot, React, MySQL",
    link: "https://github.com/saibramhanarsingoju"
  },
  {
    title: "YouTube Analytics & Recommendation Engine",
    description: "Engineered an ETL pipeline to process 10K+ YouTube video records, generating recommendations via cosine similarity + ML models. Built visualization dashboards with Streamlit and Power BI, enabling trend insights and engagement forecasting.",
    tech: "Python, Pandas, ML",
    link: "https://github.com/saibramhanarsingoju/youtube-data-pipeline"
  },
  {
    title: "GenAI Code Assistant",
    description: "Created a developer assistant that leverages GPT-4 + LangChain to suggest code refactors, test generation, and bug explanations. Integrated with VS Code for real-time prompts and interactive debugging suggestions.",
    tech: "Python, LangChain, OpenAI API",
    link: "https://github.com/saibramhanarsingoju"
  }
];
const grid = document.querySelector('.projects-grid');
projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><b>Tech:</b> ${project.tech}</p>
    <a href="${project.link}" target="_blank">View on GitHub</a>
  `;
  grid.appendChild(card);
});
