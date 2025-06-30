// Portfolio data based on Taranveer's resume

export const personalInfo = {
  name: "Taranveer Singh Anand",
  location: "Cleveland OH",
  email: "tsa43@case.edu",
  phone: "(+1) 502-356-1099",
  github: "https://github.com/", // Add your actual GitHub URL here
  bio: "Computer Science student at Case Western Reserve University with experience in AI development, full-stack web applications, and data analysis. Passionate about solving complex problems through technology and building innovative solutions.",
  image: "/profile-image.jpg" // We'll create a placeholder for this
};

export const education = [
  {
    institution: "Case Western Reserve University",
    location: "Cleveland, OH",
    degree: "Bachelors of Science, Computer Science & FinTech minor",
    duration: "Expected graduation May 2026",
    details: "Relevant coursework: Object Oriented Programming, Data Structures, Algorithms, Artificial Intelligence, Software Craftsmanship, Software Engineering, Discrete Mathematics, Linear Algebra, Probability and Statistics, Operating Systems and Concurrent Programming, Calculus(I-III)"
  }
];

export const experience = [
  {
    company: "Guru Amardass Private Limited",
    position: "ERP Intern",
    duration: "Sept 2022 – Dec 2022",
    responsibilities: [
      "Developed Python scripts for data migration and SQL query optimization, reducing processing time by 40%.",
      "Built data pipelines to process large datasets efficiently, optimizing resource allocation for improved performance.",
      "Assisted in implementing machine learning models for business process automation, enhancing predictive analytics for inventory management.",
      "Worked closely with cross-functional teams to debug ERP-related issues and deploy scalable solutions to improve workflow efficiency.",
      "Designed dashboards using SQL and visualization tools to help stakeholders interpret business insights effectively."
    ]
  }
];

export const skills = {
  programmingLanguages: ["Python", "JavaScript", "Java", "C", "C++", "Rust"],
  frameworksLibraries: [
    "Tensorflow", "PyTorch", "React", "FastAPI", "OpenCV", "Scikit-learn",
    "LangChain", "Numpy", "Matplotlib", "Pandas", "Django", "Flask"
  ],
  toolsPlatforms: [
    "AWS", "SQLite", "MongoDB", "ChromaDB", "Figma", "Docker",
    "Git & GitHub", "Bash", "Linux", "Jupyter"
  ],
  technicalExpertise: [
    "REST API Development & Testing", "Data Analysis", "CI/CD Pipelining",
    "Database Management", "AI Agent Development", "High-Performance Computing",
    "Memory Management", "System Architecture", "Process Scheduling"
  ],
  softSkills: [
    "Critical Thinking", "Algorithm Optimization", "Debugging & Troubleshooting",
    "Collaborative Development", "Agile Methodologies"
  ]
};

export const certifications = [
  {
    name: "DeepLearning AI: Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    year: "" // Add if available
  },
  {
    name: "AWS Fundamentals Specialization",
    issuer: "Amazon Web Services",
    year: "" // Add if available
  }
];

export const projects = [
  {
    id: "modelcraft",
    title: "ModelCraft",
    type: "Personal Project",
    description: "A user-friendly GUI application that allows users to input details about their neural network model (e.g., layers, activation functions, optimizer) and automatically provides code that compiles, trains, and evaluates the model.",
    details: [
      "Currently only supports neural networks, and outputs code for local environment with plans to offload training to cloud servers for faster processing and further abstraction"
    ],
    techStack: ["Python", "React", "Tensorflow", "Keras", "Matplotlib", "Pandas"],
    imageUrl: "/project1.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "web-scraper",
    title: "AI powered Web Scraper",
    type: "Personal Project",
    description: "Extracts real-time product pricing data from e-commerce websites and provides price alerts.",
    details: [
      "Designed a REST API allowing users to query product prices and receive alerts for price drops via SMTP email notifications.",
      "Implemented SQLite for persistent storage, enabling historical price tracking and trend analysis.",
      "Optimized scraper efficiency using asynchronous task scheduling.",
      "Built an NLP-based content extraction system to analyze web data, categorize content, and generate summarized insights."
    ],
    techStack: ["Python", "Flask", "Selenium", "BeautifulSoup", "SQLite", "Redis", "TensorFlow", "SMTP"],
    imageUrl: "/project2.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "brainwave",
    title: "BrainWave",
    type: "Group Project",
    description: "A virtual study group platform to facilitate real-time collaboration, study management, and resource sharing.",
    details: [
      "Implemented real-time chat, video conferencing, scheduling and notification services.",
      "AI-powered study recommendations to enhance learning efficiency.",
      "Deployed on AWS with TLS/SSL encryption for security and scalability."
    ],
    techStack: ["JavaScript", "React.js", "Python", "Flask", "MongoDB", "PostgreSQL", "WebRTC", "WebSockets", "OAuth 2.0"],
    imageUrl: "/project3.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "stock-analyzer",
    title: "Real-Time Stock Market Analyzer",
    type: "Personal Project",
    description: "A real-time stock market analysis tool with predictive capabilities.",
    details: [
      "Implemented predictive models using LSTM neural networks for stock price forecasting.",
      "Attempted to combine stock data and sentiment analysis of financial news"
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Pandas", "Matplotlib", "Yahoo Finance API", "VADER", "BERT", "Flask", "Docker"],
    imageUrl: "/project4.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    type: "Personal Project",
    description: "A backtracking algorithm to find solutions to a sudoku board, along with a GUI using Tkinter in Python.",
    details: [],
    techStack: ["Python", "Tkinter", "Algorithms"],
    imageUrl: "/project5.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "memory-allocator",
    title: "Memory Allocation Simulator",
    type: "Personal Project",
    description: "A memory allocation simulator in C to analyze heap fragmentation, simulating random allocations and frees with a seeded random number generator.",
    details: [],
    techStack: ["C", "Memory Management"],
    imageUrl: "/project6.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  },
  {
    id: "ai-game-agent",
    title: "AI Game Agent",
    type: "Personal Project",
    description: "An AI agent in Java to play the game \"Sepia\" using state space planning and Minimax with Alpha-Beta Pruning.",
    details: [
      "Used A* for optimal pathfinding, and Minimax with Alpha-Beta Pruning for strategic decision-making.",
      "Designed an evaluation function and heuristic to optimize performance, enabling efficient exploration of the game tree and dynamic adaptation to different gameplay."
    ],
    techStack: ["Java", "AI", "Game Theory", "Algorithms"],
    imageUrl: "/project7.jpg", // Placeholder image
    githubUrl: "", // Add if available
    liveUrl: "" // Add if available
  }
];
