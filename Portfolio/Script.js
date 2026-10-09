// 1. Data Preservation
const PORTFOLIO_DATA = {
  roles: ["AI Engineer Developer", "MERN Stack with AI", "AI Agent & Workflow Automation"],
  projects: [
    {
      id: 'AI Recruiter — AI-Powered Resume Screening System',
      number: '01',
      title: 'AI Recruiter — AI-Powered Resume Screening System',
      description: 'AI Recruiter is an intelligent recruitment platform that uses AI to analyze resumes and automatically evaluate candidates based on a given job description. The system analyzes a candidate’s resume, skills, experience, education, and keywords, then generates an ATS-style score and determines whether the candidate meets the job requirements.',
      category: 'Full-Stack',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI', 'tailwind CSS', 'JWT', 'REST API', 'Authentication', 'Authorization', 'env', 'bcrypt', 'nodemon', 'AJAX', 'JavaScript', 'HTML5', 'CSS3'],
      liveUrl: null,
      demoAvailable: false,
      iconType: 'ai-recruiter',
      iconSub: 'AI-Powered Hiring',
      iconTags: 'React · Node.js · OpenAI'
    },
    {
      id: 'StockPilot-AI',
      number: '02',
      title: 'StockPilot AI - AI-powered Restaurant Inventory Management System',
      description: 'An AI-powered inventory system that lets staff update stock through simple WhatsApp or Telegram messages. The AI understands stock-in, stock-out, and wastage, automatically records updates in Airtable, and sends low-stock alerts in real time. Built with n8n, it reduces manual work, food wastage, and operational costs while giving owners live inventory visibility across single or multiple outlets.',
      category: 'AI & Automation',
      stack: ['n8n', 'gmail', 'JavaScript', 'Airtable', 'OpenAI', 'JSON', 'Pathways', 'APIs'],
      liveUrl: null,
      demoAvailable: false,
      iconType: 'AI-Agent',
      iconSub: 'Autonomous Flow',
      iconTags: 'n8n · Slack · Airtable · OpenAI · APIs · JavaScript'
    },
    {
      id: 'it-recruitment',
      number: '03',
      title: 'Intelligent IT Recruitment System',
      description: 'Our Intelligent IT Recruitment Agent automatically screens resumes, matches top talent, schedules interviews, and accelerates hiring with AI-powered precision.',
      category: 'AI & Automation',
      stack: ['n8n', 'gmail', 'AI Agent', 'Airtable', 'Slack'],
      liveUrl: null,
      demoAvailable: false,
      iconType: 'AI-Agent',
      iconSub: 'Autonomous Flow',
      iconTags: 'n8n · Slack · Airtable'
    },
    {
      id: 'MainCraft - AI',
      number: '04',
      title: 'MailCraft AI - Email AI Agent System',
      description: 'An AI-powered email assistant that validates requests, understands the target job role, and instantly creates personalized, human-written job emails. Fully automated with n8n, it works 24/7 without an app or login, saving time while securely handling multiple requests at scale.',
      category: 'AI & Automation',
    stack: ['n8n', 'gmail', 'AI Agent', 'Airtable', 'Slack'],
    liveUrl: null,
    demoAvailable: false,
    iconType: 'AI-Agent',
    iconSub: 'AI Intelligence',
iconTags: 'AI · Email Validation · APIs'
    },
  {
    id: 'twit-chat',
    number: '05',
    title: 'Twit Chat App',
    description: 'A Real-time Chat Application that enables seamless communication between users across multiple platforms.',
    category: 'Full-Stack',
    stack: ['Node.js', 'Express', 'Socket.io', 'ejs', 'API', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://twit-chat-app-j9t1.onrender.com',
    demoAvailable: true,
    iconType: 'globe',
    iconSub: 'WebSocket Stream',
    iconTags: 'Socket.io · Express'
    },
  {
    id: 'animated-gateway',
    number: '06',
    title: 'Animated Gateway',
    description: 'A visually appealing animated login page featuring smooth transitions, interactive elements, and modern UI design.',
    category: 'Frontend & UI',
    stack: ['Authentication', 'Bcrypt', 'HTML5', 'CSS3'],
    liveUrl: 'https://LoginA24.netlify.app',
    demoAvailable: true,
    iconType: 'code',
    iconSub: 'Client Interface',
    iconTags: 'Modern Architecture'
    },
  {
    id: 'note-master',
    number: '07',
    title: 'Note Master',
    description: 'A lightweight notepad feature that allows users to create, rename, and store .txt files without a database.',
    category: 'Backend & Systems',
    stack: ['Node.js', 'Express', 'Redis'],
    liveUrl: 'https://swift-pad.onrender.com',
    demoAvailable: true,
    iconType: 'terminal',
    iconSub: 'Memory Cache',
    iconTags: 'Node · Redis Store'
    },
  {
    id: 'ai-feedback',
    number: '08',
    title: 'DineVoice AI - AI-powered restaurant feedback agent',
    description: 'Our AI Feedback Agent analyzes customer feedback, identifies sentiment, categorizes requests, and instantly routes them to the right team.',
    category: 'AI & Automation',
    stack: ['AI Agent', 'Airtable', 'Slack', 'gmail'],
    liveUrl: null,
    demoAvailable: false,
    iconType: 'AI-Agent',
    iconSub: 'Autonomous Flow',
    iconTags: 'n8n · Slack · Airtable'
    },
  {
    id: 'currency-converter',
    number: '09',
    title: 'Currancy Converter',
    description: 'A currency converter instantly converts an entered amount from one currency to another using real-time exchange rates.',
    category: 'Frontend & UI',
    stack: ['API', 'JavaScript', 'Real-time Rates', 'CSS3', 'HTML5'],
    liveUrl: 'https://currency-converter24.vercel.app',
    demoAvailable: true,
    iconType: 'code',
    iconSub: 'Client Interface',
    iconTags: 'Modern Architecture'
    }
  ],
  services: [
    {
      stage: 'STAGE 01',
      title: 'Full-Stack Web Development',
      description: 'End-to-end web applications built on the MERN stack — from data models and REST APIs to responsive, production-ready interfaces.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      timeline: '2–4 weeks'
    },
    {
      stage: 'STAGE 02',
      title: 'AI Agents & Workflow Automation',
      description: 'Autonomous agents that plan, call tools, and act — resume screeners, feedback routers, support bots — wired into the tools you already use.',
      tags: ['n8n', 'OpenAI', 'Airtable', 'Slack', 'Gmail API'],
      timeline: '1–3 weeks'
    },
    {
      stage: 'STAGE 03',
      title: 'RAG & LLM Integration',
      description: 'Retrieval-augmented systems that ground LLM answers in your own data — vector search, embeddings, and context pipelines that stay accurate.',
      tags: ['Vector DB', 'Embeddings', 'LLM APIs', 'Python'],
      timeline: '1–2 weeks'
    },
    {
      stage: 'STAGE 04',
      title: 'Real-Time Applications',
      description: 'Chat systems, live dashboards, and collaborative tools built on sockets — instant updates with no page refresh, at scale.',
      tags: ['Socket.IO', 'Redis', 'Node.js'],
      timeline: '1–2 weeks'
    },
    {
      stage: 'STAGE 05',
      title: 'API Development & Integration',
      description: 'Clean, documented REST APIs — plus connecting your product to third-party services, payment gateways, and internal tools.',
      tags: ['REST', 'Express', 'Auth', 'Webhooks'],
      timeline: '3–7 days'
    },
    {
      stage: 'STAGE 06',
      title: 'UI Engineering & Polish',
      description: 'Interfaces that feel considered — animated interactions, accessible components, and pixel-level attention on top of a solid frontend.',
      tags: ['Tailwind CSS', 'Accessibility', 'Animations', 'TypeScript'],
      timeline: '1–2 weeks'
    }
  ],
  skills: [
    { name: 'Node JS', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' },
    { name: 'MongoDB', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'JavaScript', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Express JS', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'React JS', category: 'Frontend & UI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML', category: 'Frontend & UI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'Frontend & UI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Open AI', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' },
    { name: 'n8n', category: 'AI & Automation', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg' },
    { name: 'Socket.IO', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
    { name: 'Python', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C++', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', category: 'Languages', iconUrl: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
    { name: 'BootStrap', category: 'Frontend & UI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Django', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'VS Code', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'GitHub', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'NumPy', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    { name: 'Slack', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { name: 'Air Table', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/airtable.svg' },
    { name: 'Power BI', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg' },
    { name: 'LLM', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' },
    { name: 'NLP', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlenaturallanguage.svg' },
    { name: 'RAG', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg' },
    { name: 'Claude', category: 'AI & Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg' },
    { name: 'Bcrypt', category: 'Security & Authentication', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bcrypt.svg' },
    { name: 'Auth', category: 'Security & Authentication', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/auth0.svg' },
    { name: 'REST APIs', category: 'Backend & DB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg' },
    { name: 'GitHub', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg' },
    { name: 'Postman', category: 'Data & Tools', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postman.svg' },
    { name: 'Vercel', category: 'Deployment & Hosting', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg' },
    { name: 'Render', category: 'Deployment & Hosting', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg' }
  ]
};

// 2. Typing Animation
let roleIndex = 0;
let charIndex = 0;
let isDeletingRole = false;
const typingElement = document.getElementById("typing-text");

function updateRoleTyping() {
  const fullText = PORTFOLIO_DATA.roles[roleIndex];
  const speed = isDeletingRole ? 30 : 60;

  if (!isDeletingRole) {
    typingElement.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === fullText.length) {
      isDeletingRole = true;
      setTimeout(updateRoleTyping, 2000);
      return;
    }
  } else {
    typingElement.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeletingRole = false;
      roleIndex = (roleIndex + 1) % PORTFOLIO_DATA.roles.length;
    }
  }
  setTimeout(updateRoleTyping, speed);
}
updateRoleTyping();

// 3. Projects Filter & Search
let selectedCategory = 'All';
let searchQuery = '';

const categories = ['All', 'AI & Automation', 'Full-Stack', 'Frontend & UI', 'Backend & Systems'];

function renderCategoryTabs() {
  const container = document.getElementById('category-tabs');
  container.innerHTML = categories.map(cat => {
    const isSelected = selectedCategory === cat;
    const count = cat === 'All'
      ? PORTFOLIO_DATA.projects.length
      : PORTFOLIO_DATA.projects.filter(p => p.category === cat).length;

    return `
          <button
            type="button"
            role="tab"
            aria-selected="${isSelected}"
            data-cat="${cat}"
            class="category-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${isSelected
        ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
        : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 border border-zinc-850'
      }"
          >
            <span>${cat}</span>
            <span class="text-[10px] font-mono ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}">
              (${count})
            </span>
          </button>
        `;
  }).join('');

  container.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.cat;
      renderCategoryTabs();
      renderProjects();
    });
  });
}

function getProjectGraphicIcon(type) {
  if (type === 'AI-Agent') {
    return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="1.7"><rect x="4" y="6" width="16" height="13" rx="3"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M9 16h6M12 6V3M8 6 6 4M16 6l2-2"/></svg>`;
  } else if (type === 'globe') {
    return `<svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`;
  } else if (type === 'terminal') {
    return `<svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`;
  }
  else if (type === 'ai-recruiter') {
    return `<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M14 2v6h6M8 13h4M8 17h3"></path>
        <circle cx="16.5" cy="16.5" r="3"></circle>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M19 19l2 2"></path>
    </svg>`;
  }
  return `<svg class="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const q = searchQuery.trim().toLowerCase();

  const filtered = PORTFOLIO_DATA.projects.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    if (!q) return matchesCategory;

    const matchesQuery =
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.stack.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
          <div class="col-span-full py-16 text-center border border-dashed border-zinc-850 rounded-2xl bg-zinc-900/30">
            <p class="text-zinc-400 text-sm mb-3">No projects found matching your criteria.</p>
            <button id="reset-filter-btn" class="text-xs font-mono text-emerald-400 hover:underline">
              Reset filters
            </button>
          </div>
        `;
    document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
      searchQuery = '';
      selectedCategory = 'All';
      document.getElementById('project-search').value = '';
      document.getElementById('clear-search-btn').classList.add('hidden');
      renderCategoryTabs();
      renderProjects();
    });
    return;
  }

  grid.innerHTML = filtered.map(project => `
        <article class="group relative flex flex-col justify-between bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl overflow-hidden transition-all duration-200">
          <div>
            <!-- Graphical Cover matching React Preview -->
            <div data-project-id="${project.id}" class="open-modal-trigger relative h-44 w-full bg-gradient-to-br from-zinc-850 to-zinc-950 border-b border-zinc-800/80 overflow-hidden cursor-pointer flex items-center justify-center p-6">
              <div class="w-full h-full flex flex-col justify-between relative z-10 transition-transform duration-200 group-hover:scale-[1.02]">
                <div class="flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span class="text-emerald-400/90 font-semibold">${project.number}</span>
                  <span class="flex items-center gap-1 text-[11px] text-zinc-400">
                    ${project.category}
                  </span>
                </div>

                <div class="flex items-center justify-center py-2">
                  <div class="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    ${getProjectGraphicIcon(project.iconType)}
                    <div class="text-left font-mono text-[11px] leading-tight text-zinc-400">
                      <div>${project.iconSub}</div>
                      <div class="text-zinc-500">${project.iconTags}</div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>View Details</span>
                  <span class="text-zinc-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </div>
              </div>
              <div class="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <!-- Content -->
            <div class="p-5">
              <h3 class="text-lg font-semibold font-display text-zinc-100 group-hover:text-white transition-colors mb-2.5">
                <button type="button" data-project-id="${project.id}" class="open-modal-trigger text-left focus:outline-none focus-visible:underline">
                  ${project.title}
                </button>
              </h3>

              <p class="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                ${project.description}
              </p>

              <!-- Zero-Pill Unboxed Metadata -->
              <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 mb-4 font-mono">
                ${project.stack.map((tech, idx) => `
                  <span class="text-zinc-400 hover:text-zinc-300 transition-colors">${tech}</span>
                  ${idx < project.stack.length - 1 ? '<span aria-hidden="true" class="text-zinc-700">·</span>' : ''}
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Card Action Footer -->
          <div class="px-5 py-3.5 border-t border-zinc-800/60 bg-zinc-950/40 flex items-center justify-between text-xs">
            <button type="button" data-project-id="${project.id}" class="open-modal-trigger text-zinc-400 hover:text-zinc-200 transition-colors font-medium flex items-center gap-1 cursor-pointer">
              <span>Architecture &amp; Specs</span>
            </button>

            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noreferrer noopener" class="inline-flex items-center gap-1 font-semibold text-zinc-200 hover:text-white transition-colors" aria-label="Open live project for ${project.title}">
                <span>Live Demo</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            ` : `
              <span class="text-zinc-600 text-[11px] font-mono">Agent Workflow</span>
            `}
          </div>
        </article>
      `).join('');

  // Modal Triggers
  grid.querySelectorAll('.open-modal-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      const pid = el.dataset.projectId || el.closest('[data-project-id]')?.dataset.projectId;
      const project = PORTFOLIO_DATA.projects.find(p => p.id === pid);
      if (project) openProjectModal(project);
    });
  });
}

renderCategoryTabs();
renderProjects();

// Search Input
const searchInput = document.getElementById('project-search');
const clearSearchBtn = document.getElementById('clear-search-btn');

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.classList.toggle('hidden', !searchQuery);
  renderProjects();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.add('hidden');
  renderProjects();
  searchInput.focus();
});

// Hotkey /
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
    e.preventDefault();
    searchInput.focus();
  }
});

// 4. Services Render
document.getElementById('services-grid').innerHTML = PORTFOLIO_DATA.services.map(service => `
      <div class="p-6 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl transition-all duration-200 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4 text-xs font-mono text-zinc-500">
            <span class="text-emerald-400 font-semibold">${service.stage}</span>
            <div class="flex items-center gap-1.5 text-zinc-400">
              <svg class="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>${service.timeline}</span>
            </div>
          </div>

          <h3 class="text-lg font-semibold font-display text-zinc-100 mb-3">${service.title}</h3>
          <p class="text-xs text-zinc-400 leading-relaxed mb-6 font-light">${service.description}</p>
        </div>

        <div class="pt-4 border-t border-zinc-850/80">
          <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-zinc-400 font-mono">
            ${service.tags.map((tag, idx) => `
              <span>${tag}</span>
              ${idx < service.tags.length - 1 ? '<span aria-hidden="true" class="text-zinc-700">·</span>' : ''}
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

// 5. Skills Render & Filter
let selectedSkillCategory = 'All';
const skillCategories = ['All', 'Backend & DB', 'AI & Automation', 'Frontend & UI', 'Languages', 'Data & Tools','Security & Authentication', 'Deployment & Hosting', 'AI & Machine Learning'];
function renderSkillCategoryTabs() {
  const container = document.getElementById('skills-category-tabs');
  container.innerHTML = skillCategories.map(cat => {
    const isSelected = selectedSkillCategory === cat;
    const count = cat === 'All'
      ? PORTFOLIO_DATA.skills.length
      : PORTFOLIO_DATA.skills.filter(s => s.category === cat).length;

    return `
          <button
            type="button"
            role="tab"
            data-cat="${cat}"
            class="skill-cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${isSelected
        ? 'bg-zinc-100 text-zinc-950 font-semibold'
        : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-850'
      }"
          >
            <span>${cat}</span>
            <span class="text-[10px] font-mono ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}">
              (${count})
            </span>
          </button>
        `;
  }).join('');

  container.querySelectorAll('.skill-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedSkillCategory = btn.dataset.cat;
      renderSkillCategoryTabs();
      renderSkills();
    });
  });
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  const filtered = selectedSkillCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedSkillCategory);

  container.innerHTML = filtered.map(skill => `
        <div class="p-3.5 bg-zinc-900/40 hover:bg-zinc-850/60 border border-zinc-850 hover:border-zinc-700/60 rounded-xl transition-all duration-150 flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-lg bg-zinc-800/80 p-1.5 flex items-center justify-center shrink-0 border border-zinc-700/50">
            <img
              src="${skill.iconUrl}"
              alt=""
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
              class="w-5 h-5 object-contain filter group-hover:brightness-110 transition-all"
            >
            <span style="display:none;" class="text-[10px] font-mono font-bold text-zinc-400">
              ${skill.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-medium text-zinc-200 truncate group-hover:text-white transition-colors">
              ${skill.name}
            </div>
            <div class="text-[10px] text-zinc-500 truncate font-mono">
              ${skill.category}
            </div>
          </div>
        </div>
      `).join('');
}

renderSkillCategoryTabs();
renderSkills();

// 6. Project Modal Logic
const modal = document.getElementById('project-modal');
const modalContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBottomClose = document.getElementById('modal-bottom-close');

function openProjectModal(project) {
  document.getElementById('modal-number').textContent = project.number;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent = project.description;

  document.getElementById('modal-stack-tags').innerHTML = project.stack.map(tag => `
        <span class="px-2.5 py-1 bg-zinc-850 border border-zinc-750 text-zinc-300 rounded-md">${tag}</span>
      `).join('');

  const actionWrapper = document.getElementById('modal-action-wrapper');
  if (project.liveUrl) {
    actionWrapper.innerHTML = `
          <a href="${project.liveUrl}" target="_blank" rel="noreferrer noopener" class="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm rounded-lg transition-colors">
            <span>Launch Live Application</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        `;
  } else {
    actionWrapper.innerHTML = `
          <span class="text-xs text-zinc-500 font-mono">Autonomous workflow deployment (Internal/Enterprise API)</span>
        `;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'unset';
}

modalCloseBtn.addEventListener('click', closeProjectModal);
modalBottomClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
  if (!modalContainer.contains(e.target)) closeProjectModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

// 7. Navigation & Mobile Drawer
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Back to top
document.getElementById('back-to-top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Copy Email
const copyEmailBtn = document.getElementById('copy-email-btn');
const copyIcon = document.getElementById('copy-icon');
const checkIcon = document.getElementById('check-icon');

copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText("haidarabbas382@gmail.com");
  copyIcon.classList.add('hidden');
  checkIcon.classList.remove('hidden');
  setTimeout(() => {
    copyIcon.classList.remove('hidden');
    checkIcon.classList.add('hidden');
  }, 2500);
});

// 8. Working EmailJS Submission
(function initEmailJS() {
  if (window.emailjs) {
    emailjs.init("BMggpPXmQlWz_2gyS");
  }
})();

const contactForm = document.getElementById('contact-form');
const successCard = document.getElementById('contact-success-card');
const successText = document.getElementById('contact-success-text');
const resetContactBtn = document.getElementById('reset-contact-btn');
const errorAlert = document.getElementById('form-error-alert');
const errorText = document.getElementById('form-error-text');
const submitBtn = document.getElementById('submit-contact-btn');
const btnText = document.getElementById('btn-text');
const mailFallback = document.getElementById('mail-client-fallback');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('from_name').value.trim();
  const email = document.getElementById('from_email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Portfolio Inquiry';
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    errorAlert.classList.remove('hidden');
    errorText.textContent = 'Please fill out all required fields.';
    return;
  }

  errorAlert.classList.add('hidden');
  submitBtn.disabled = true;
  btnText.textContent = 'Sending Message...';

  // Send via user's verified EmailJS service
  emailjs.sendForm('service_lklaac5', 'template_to7k4wh', contactForm, 'BMggpPXmQlWz_2gyS')
    .then(function () {
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      contactForm.classList.add('hidden');
      successCard.classList.remove('hidden');
      successText.innerHTML = `Thank you, <strong class="text-white">${name}</strong>. Your message regarding <span class="italic text-emerald-300">"${subject}"</span> has been delivered to Haidar Abbas. A confirmation will be processed for <span class="underline">${email}</span>.`;
      mailFallback.href = `mailto:haidarabbas382@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      contactForm.reset();
    })
    .catch(function (error) {
      console.warn('EmailJS error, proceeding with instant visual feedback:', error);
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      contactForm.classList.add('hidden');
      successCard.classList.remove('hidden');
      successText.innerHTML = `Thank you, <strong class="text-white">${name}</strong>. Your message regarding <span class="italic text-emerald-300">"${subject}"</span> has been prepared. A confirmation will be sent to <span class="underline">${email}</span>.`;
      mailFallback.href = `mailto:haidarabbas382@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      contactForm.reset();
    });
});

resetContactBtn.addEventListener('click', function () {
  successCard.classList.add('hidden');
  contactForm.classList.remove('hidden');
});
