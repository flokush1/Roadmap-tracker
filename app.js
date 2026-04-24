const STORAGE_KEY = "roadmap-tracker-fy-2026-27-v1";
const VIEW_KEY = "roadmap-tracker-view-v1";
const ADMIN_TOKEN_KEY = "roadmap-tracker-admin-token-v1";
const API_URL = "/api/roadmap";

const CATEGORY_ORDER = [
  "Work (Client + Internal Impact)",
  "Skilling & Capability Building",
  "Business / BD Contribution",
  "Regularity, Discipline & Ownership",
  "Team Contribution & Leadership",
  "Innovation & Initiative"
];

const STATUS_OPTIONS = ["Not Started", "In Progress", "Blocked", "Done"];
const PRIORITY_OPTIONS = ["High", "Medium", "Low"];

const initialRoadmap = {
  title: "Individual Roadmap: FY 2026-27",
  owner: "Kush Prakhar",
  role: "Data Scientist",
  quarters: [
    {
      id: "q1",
      label: "Q1",
      title: "Foundation & Reliability",
      period: "April - June 2026",
      due: "2026-06-30",
      projects: [
        project("Work (Client + Internal Impact)", "Real Estate Intelligence Platform", "Finalize and ship the core pricing engine for Apartments, Builder Floors, and Plots/Land, while positioning it as one layer within a broader real estate intelligence and portfolio management platform.", "High", "2026-06-30", [
          "Finalize pricing engine for Apartments, Builder Floors, and Plots/Land.",
          "Add valuation, demand-supply, ROI, location intelligence, GeoAI, and visualization signals to the platform scope.",
          "Validate market, spatial, and property-level signals for decision-ready outputs.",
          "Package the output as intelligence beyond raw pricing."
        ]),
        project("Work (Client + Internal Impact)", "Election Governance & Outreach Platform", "Build the production-ready foundation of the election platform by combining voter intelligence, demographic prediction, booth and ward analytics, and a field intelligence workflow.", "High", "2026-06-30", [
          "Build voter intelligence and demographic prediction foundation.",
          "Create booth-level and ward-level analytics views.",
          "Define field intelligence workflow for volunteers and ground staff.",
          "Capture voting preferences, demographic inputs, and real-time ground feedback."
        ]),
        project("Work (Client + Internal Impact)", "Surya Masterbatch", "Build the initial AI-assisted color formulation system to predict pigment recipes from target LAB values and polymer types using historical lab data.", "High", "2026-06-30", [
          "Prepare historical lab data with LAB values, polymer types, and pigment recipes.",
          "Build recipe prediction baseline for target LAB inputs.",
          "Connect Kubelka-Munk and formulation logic to the workflow.",
          "Shape the system into a lab-usable formulation process."
        ]),
        project("Work (Client + Internal Impact)", "Manufacturing ERP Engagements", "Contribute to the design and delivery of AI and analytics modules for manufacturing clients across inventory optimization, production planning, supply chain workflows, and financial operations.", "Medium", "2026-06-30", [
          "Support AI and analytics module design for inventory and production planning.",
          "Contribute to supply chain and financial operations use cases.",
          "Identify repeatable solution components for future ERP engagements."
        ]),
        project("Regularity, Discipline & Ownership", "Proactive Communication Discipline", "Share structured weekly progress updates, surface blockers early, and communicate risks, dependencies, and solution recommendations without waiting for follow-up.", "High", "2026-06-30", [
          "Send structured weekly progress updates.",
          "Surface blockers before they slow delivery.",
          "Communicate risks, dependencies, and solution recommendations proactively."
        ]),
        project("Regularity, Discipline & Ownership", "Project Ownership Discipline", "Take clear ownership of delivery timelines across assigned workstreams by proactively tracking dependencies, resolving blockers, and maintaining execution momentum.", "High", "2026-06-30", [
          "Track delivery timelines across assigned workstreams.",
          "Monitor dependencies and unresolved decisions.",
          "Resolve blockers and maintain execution momentum."
        ]),
        project("Skilling & Capability Building", "Technical Deep-Dive", "Strengthen understanding of Kubelka-Munk physics and related formulation logic to ensure the Surya system is scientifically grounded and operationally credible.", "Medium", "2026-06-30", [
          "Study Kubelka-Munk physics for color formulation.",
          "Map physics concepts to practical formulation logic.",
          "Use learnings to validate Surya system credibility."
        ]),
        project("Skilling & Capability Building", "Gen AI Foundation", "Develop a functional RAG prototype and identify practical integration opportunities for Gen AI across internal and client-facing workflows.", "Medium", "2026-06-30", [
          "Build a functional RAG prototype.",
          "Identify Gen AI integration opportunities across internal workflows.",
          "Identify Gen AI integration opportunities across client-facing workflows."
        ]),
        project("Team Contribution & Leadership", "Structured Delegation", "Create documentation, review workflows, and task handoff structures for the ML Team so recurring scraping and engineering tasks can be executed more independently and consistently.", "Medium", "2026-06-30", [
          "Create documentation for recurring scraping and engineering tasks.",
          "Define review workflows for delegated work.",
          "Build task handoff structures for the ML Team."
        ]),
        project("Business / BD Contribution", "Election Product Positioning", "Package the election platform into a demo-ready product narrative for the BD team as a scalable governance and outreach solution for potential clients across states.", "Medium", "2026-06-30", [
          "Create demo-ready product narrative for the election platform.",
          "Frame the platform as governance plus outreach, not just prediction.",
          "Prepare BD inputs for state-level client conversations."
        ]),
        project("Innovation & Initiative", "Reusable Solution Foundation", "Start building reusable data cleaning, feature engineering, and ingestion components based on work across Kajaria, PBCHS, election, and real estate projects.", "Medium", "2026-06-30", [
          "Extract reusable data cleaning components from active projects.",
          "Extract feature engineering and ingestion components.",
          "Reduce onboarding effort for future client engagements."
        ])
      ]
    },
    {
      id: "q2",
      label: "Q2",
      title: "Expansion & Depth",
      period: "July - September 2026",
      due: "2026-09-30",
      projects: [
        project("Work (Client + Internal Impact)", "Real Estate Intelligence Platform Expansion", "Expand the real estate platform from Delhi NCR to at least one other Tier-1 city while strengthening the pricing engine with richer market, location, and property-level intelligence.", "High", "2026-09-30", [
          "Select and scope the next Tier-1 city such as Mumbai or Bangalore.",
          "Onboard multi-city data ingestion and cleaning.",
          "Enrich pricing engine with market, location, and property-level intelligence.",
          "Add valuation, portfolio, and investment-oriented decision outputs."
        ]),
        project("Work (Client + Internal Impact)", "Surya Masterbatch Optimization", "Advance the Surya formulation system from recipe prediction toward cost-optimized formulation by identifying lower-cost pigment combinations that still meet target LAB requirements.", "High", "2026-09-30", [
          "Define cost objective, pigment constraints, and LAB acceptance criteria.",
          "Search lower-cost pigment combinations that meet target LAB values.",
          "Validate commercial value through formulation cost reduction.",
          "Measure lab efficiency improvements."
        ]),
        project("Work (Client + Internal Impact)", "Manufacturing ERP Engagements", "Deepen contribution across manufacturing ERP-related AI and analytics workstreams across inventory, production planning, supply chain visibility, and financial decision support.", "Medium", "2026-09-30", [
          "Support inventory optimization and production planning use cases.",
          "Support supply chain visibility and financial decision support use cases.",
          "Capture repeatable solution patterns for industrial engagements."
        ]),
        project("Work (Client + Internal Impact)", "US Client Delivery", "Take explicit ownership of assigned US client deliverables by ensuring timely execution, structured communication, and dependable progress visibility across project milestones.", "High", "2026-09-30", [
          "Map assigned deliverables and milestone dates.",
          "Maintain structured communication and progress visibility.",
          "Deliver agreed work on timeline with clear escalation."
        ]),
        project("Work (Client + Internal Impact)", "BrickSync - Construction Intelligence Platform", "Introduce ML-driven intelligence into BrickSync through delay prediction, resource and labor allocation optimization, and material consumption forecasting.", "High", "2026-09-30", [
          "Build delay prediction models using task type, crew size, dependencies, and historical completion rates.",
          "Add resource and labor allocation optimization.",
          "Forecast material consumption using time series models.",
          "Shift the product from reactive delay tracking to proactive construction intelligence."
        ]),
        project("Skilling & Capability Building", "Primary MLOps", "Implement experiment tracking, model versioning, and deployment workflows using tools such as MLflow and DVC so active ML projects become reproducible, scalable, and deployment-ready.", "High", "2026-09-30", [
          "Set up experiment tracking with MLflow or an equivalent tool.",
          "Add model and data versioning workflows with DVC or an equivalent tool.",
          "Create deployment-ready workflow templates for active ML projects."
        ]),
        project("Skilling & Capability Building", "Secondary Gen AI", "Explore AI Agent fundamentals and identify practical integration points within existing ML and operational workflows to prepare for broader Gen AI-led implementation in Q3.", "Medium", "2026-09-30", [
          "Study AI Agent fundamentals.",
          "Identify agent integration points in ML workflows.",
          "Prepare a Q3 Gen AI implementation direction."
        ]),
        project("Business / BD Contribution", "Election Solution Positioning for MCD", "Translate the election platform into a stronger BD-facing solution for the Delhi MCD context as a governance, outreach, and field-intelligence platform.", "Medium", "2026-09-30", [
          "Frame the platform for Delhi MCD campaign operations.",
          "Package prediction, governance, outreach, and field intelligence capabilities.",
          "Prepare a BD-ready demo narrative."
        ]),
        project("Business / BD Contribution", "Cross-Vertical Solution Positioning", "Support BD conversations by helping package active work in Real Estate, Election, Manufacturing ERP, and related AI use cases into clearer and more scalable solution narratives.", "Medium", "2026-09-30", [
          "Package Real Estate work into a scalable solution narrative.",
          "Package Election and Manufacturing ERP work into BD-ready narratives.",
          "Support BD conversations with sharper technical proof points."
        ]),
        project("Team Contribution & Leadership", "MLOps & Scalability Enablement", "Conduct a focused knowledge-sharing session for the ML team on MLOps, code structure, and data versioning practices.", "Medium", "2026-09-30", [
          "Run ML team session on MLOps practices.",
          "Share code structure expectations for scalable projects.",
          "Introduce data versioning practices for reproducible delivery."
        ]),
        project("Team Contribution & Leadership", "Higher-Leverage Delegation", "Improve delegation of recurring scraping, cleaning, and support tasks through clearer documentation and review workflows.", "Medium", "2026-09-30", [
          "Improve documentation for scraping, cleaning, and support tasks.",
          "Create review workflow for delegated outputs.",
          "Free more time for architecture, validation, and technical problem-solving."
        ]),
        project("Regularity, Discipline & Ownership", "Execution Visibility", "Build a stronger habit of making work visible through regular progress communication, early risk escalation, and timely stakeholder alignment.", "High", "2026-09-30", [
          "Share regular progress communication.",
          "Escalate risks early with recommended next actions.",
          "Align stakeholders before delivery drift appears."
        ]),
        project("Regularity, Discipline & Ownership", "Independent Delivery Ownership", "Shift from managing assigned tasks to managing end-to-end execution within workstreams by driving timelines, dependencies, validation cycles, and issue resolution more independently.", "High", "2026-09-30", [
          "Own timelines and dependencies across workstreams.",
          "Drive validation cycles independently.",
          "Resolve issues without waiting for repeated follow-up."
        ]),
        project("Innovation & Initiative", "Centralized Geospatial & Demographic Feature Store", "Build a reusable feature store for election and real estate use cases that catalogs and versions booth-level, ward-level, and property-level features.", "High", "2026-09-30", [
          "Catalog booth-level, ward-level, and property-level features.",
          "Version geospatial and demographic feature sets.",
          "Reduce repeated feature engineering for new cities, states, and regional use cases."
        ])
      ]
    },
    {
      id: "q3",
      label: "Q3",
      title: "Scale & Ownership",
      period: "October - December 2026",
      due: "2026-12-31",
      projects: [
        project("Work (Client + Internal Impact)", "Real Estate Intelligence Platform Scale-up", "Scale the real estate platform from Delhi NCR to pan-India coverage using the existing automated scraping, feature engineering, and model-building pipeline.", "High", "2026-12-31", [
          "Scale the automated pipeline from Delhi NCR to pan-India coverage.",
          "Strengthen valuation, GeoAI, market intelligence, and visualization capabilities.",
          "Support multiple regions and asset types.",
          "Validate national coverage readiness."
        ]),
        project("Work (Client + Internal Impact)", "Industrial Formulation Intelligence Platform", "Evolve the current formulation solution into a production-ready platform that can be pitched across manufacturing clients.", "High", "2026-12-31", [
          "Convert formulation solution into a production-ready platform.",
          "Generalize workflows for manufacturing clients beyond Surya.",
          "Demonstrate improvements in formulation speed, consistency, and cost efficiency."
        ]),
        project("Work (Client + Internal Impact)", "Manufacturing ERP Solution Framework", "Convert ongoing ERP engagement learnings into a reusable solution framework across inventory optimization, production planning, supply chain visibility, and financial decision support.", "Medium", "2026-12-31", [
          "Standardize inventory optimization and production planning modules.",
          "Standardize supply chain visibility and financial decision support modules.",
          "Improve delivery speed and pitchability through reusable framework assets."
        ]),
        project("Work (Client + Internal Impact)", "Construction Intelligence Platform Production & Automation", "Transition BrickSync into a production-ready, generalized construction intelligence platform covering task automation, delay prediction, resource optimization, and site monitoring.", "High", "2026-12-31", [
          "Consolidate site task automation, delay prediction, resource optimization, and site monitoring.",
          "Generalize BrickSync into a deployable client offering.",
          "Cover workflows from task scheduling to ML-driven delay forecasting.",
          "Reduce customization required for new construction clients."
        ]),
        project("Skilling & Capability Building", "MLOps Scale-up", "Implement a continuous training and monitoring workflow for active ML systems so model retraining, drift detection, and deployment readiness become automated and sustainable.", "High", "2026-12-31", [
          "Implement continuous training workflow for active ML systems.",
          "Add monitoring and drift detection.",
          "Automate retraining and deployment readiness checks."
        ]),
        project("Skilling & Capability Building", "Gen AI Workstream Ownership", "Transition from Gen AI exploration to direct ownership of at least one Gen AI-led workstream by defining the technical approach, delivery milestones, and implementation direction.", "High", "2026-12-31", [
          "Select at least one Gen AI-led workstream to own.",
          "Define technical approach and delivery milestones.",
          "Align implementation with FloData growth and scale objectives."
        ]),
        project("Skilling & Capability Building", "AI Agent Orchestration", "Master frameworks like LangGraph or CrewAI to move from simple RAG prototypes to multi-agent systems that can reason through complex real estate or election data tasks.", "Medium", "2026-12-31", [
          "Learn LangGraph or CrewAI fundamentals.",
          "Move RAG prototypes toward multi-agent workflows.",
          "Apply agent orchestration to real estate or election data tasks."
        ]),
        project("Business / BD Contribution", "Election Platform Operational Validation", "Deploy the election governance and outreach platform in a live or near-live campaign context so booth and ward intelligence, demographic analysis, and field-input workflows can be tested against ground realities.", "High", "2026-12-31", [
          "Deploy the election platform in a live or near-live campaign context.",
          "Test booth and ward intelligence against ground realities.",
          "Validate field-input workflows for campaign planning and governance decisions."
        ]),
        project("Business / BD Contribution", "Cross-Vertical Solution Credibility", "Strengthen BD confidence in FloData offerings by translating delivery outcomes from Real Estate, Election, Manufacturing ERP, and US client work into stronger proof points.", "Medium", "2026-12-31", [
          "Convert delivery outcomes into clear proof points.",
          "Strengthen BD confidence across Real Estate, Election, ERP, and US work.",
          "Support larger and more strategic client conversations."
        ]),
        project("Regularity, Discipline & Ownership", "Strategic Technical Ownership", "Move beyond execution support into defining technical architecture, performance expectations, and solution direction across assigned AI workstreams.", "High", "2026-12-31", [
          "Define architecture expectations for assigned AI workstreams.",
          "Set performance expectations and validation direction.",
          "Lead solution direction, especially in Gen AI-led initiatives."
        ]),
        project("Regularity, Discipline & Ownership", "Leadership Through Visibility", "Continue building trust by making execution highly visible through proactive updates, early blocker escalation, solution-oriented communication, and consistent stakeholder alignment.", "High", "2026-12-31", [
          "Share proactive execution updates.",
          "Escalate blockers early with options.",
          "Keep stakeholders aligned through solution-oriented communication."
        ]),
        project("Team Contribution & Leadership", "Team Technical Lead", "Shift from primarily mentoring to leading technical sub-workstreams by enabling the ML Team to own recurring scraping, cleaning, and preparation lifecycle for new geographies and use cases.", "High", "2026-12-31", [
          "Lead technical sub-workstreams directly.",
          "Enable ML Team ownership of scraping, cleaning, and preparation lifecycle.",
          "Increase bandwidth for architecture, validation, and higher-level problem-solving."
        ]),
        project("Team Contribution & Leadership", "Delegated Execution at Scale", "Build a stronger review and delegation rhythm so repeatable engineering tasks can be executed independently with less supervision while maintaining delivery quality.", "Medium", "2026-12-31", [
          "Establish review rhythm for delegated engineering work.",
          "Let repeatable tasks run with less supervision.",
          "Maintain delivery quality through lightweight checks."
        ]),
        project("Innovation & Initiative", "Universal Data Ingestion Engine", "Refactor the election and real estate ingestion workflows into a reusable data ingestion engine capable of scraping, cleaning, and onboarding new property or government data sources with minimal customization.", "High", "2026-12-31", [
          "Refactor election and real estate ingestion workflows.",
          "Support new property and government data sources with minimal customization.",
          "Improve time-to-market for new cities, states, and client use cases."
        ])
      ]
    },
    {
      id: "q4",
      label: "Q4",
      title: "Leadership & Strategic Impact",
      period: "January - March 2027",
      due: "2027-03-31",
      projects: [
        project("Work (Client + Internal Impact)", "ML Productization for Business Growth", "Build reusable ML-based solution components and product concepts that can be positioned in BD conversations and client proposals.", "High", "2027-03-31", [
          "Build reusable ML solution components.",
          "Shape product concepts for BD conversations and client proposals.",
          "Support new business opportunities beyond project-specific delivery."
        ]),
        project("Work (Client + Internal Impact)", "Real Estate Market Intelligence Suite", "Transition the real estate platform into a fuller market intelligence suite by integrating automated data refresh cycles, stronger visualization, and natural-language reporting.", "High", "2027-03-31", [
          "Integrate automated data refresh cycles.",
          "Strengthen visualization for market intelligence use cases.",
          "Add natural-language reporting for decision-ready insights."
        ]),
        project("Work (Client + Internal Impact)", "Gen AI Solution Portfolio", "Deliver a portfolio of production-ready Gen AI problem statements and associated solution prototypes aligned to specific client pain points.", "High", "2027-03-31", [
          "Define production-ready Gen AI problem statements.",
          "Build associated solution prototypes.",
          "Align prototypes to specific client pain points."
        ]),
        project("Work (Client + Internal Impact)", "Industrial AI Offering Maturity", "Consolidate the formulation and manufacturing ERP work into clearer industrial AI offerings that can be positioned across clients as reusable solution frameworks.", "High", "2027-03-31", [
          "Consolidate formulation and Manufacturing ERP learnings.",
          "Package industrial AI as reusable solution frameworks.",
          "Position offerings beyond one-off project implementations."
        ]),
        project("Skilling & Capability Building", "Thought Leadership", "Convert internal delivery learnings into a technical whitepaper or research-backed knowledge asset in industrial formulation intelligence, geospatial analytics, or platformized AI delivery.", "Medium", "2027-03-31", [
          "Select whitepaper or knowledge asset topic.",
          "Convert internal delivery learnings into a research-backed asset.",
          "Improve external credibility and internal methodology clarity."
        ]),
        project("Skilling & Capability Building", "Product Management for AI", "Learn how to define AI Product Requirements and user personas so the Proprietary Product Library is built for market fit, not just technical novelty.", "Medium", "2027-03-31", [
          "Learn AI PRD structure and user persona definition.",
          "Apply product thinking to the Proprietary Product Library.",
          "Validate market fit rather than novelty alone."
        ]),
        project("Skilling & Capability Building", "Next-Generation AI Stack Ownership", "Strengthen capability across modern ML systems design and Gen AI product architectures including scalable pipelines, orchestration, deployment, monitoring, and product-ready AI workflows.", "High", "2027-03-31", [
          "Strengthen scalable pipeline and orchestration patterns.",
          "Strengthen deployment and monitoring practices.",
          "Prepare to lead production ML systems and Gen AI solution development."
        ]),
        project("Business / BD Contribution", "BD Automation Enablement", "Build an automated lead qualification and proposal support workflow that helps identify relevant opportunities and generate more structured AI solution responses.", "High", "2027-03-31", [
          "Build automated lead qualification workflow.",
          "Add proposal support workflow.",
          "Generate structured AI solution responses faster."
        ]),
        project("Business / BD Contribution", "AI Solution Packaging for Growth", "Translate internal delivery experience into pitch-ready ML and Gen AI solution narratives that can support larger deal conversations and new client acquisition.", "Medium", "2027-03-31", [
          "Translate delivery experience into pitch-ready ML narratives.",
          "Translate delivery experience into pitch-ready Gen AI narratives.",
          "Create a scalable business-facing AI offering portfolio."
        ]),
        project("Regularity, Discipline & Ownership", "Vertical Ownership", "Operate as the strategic technical lead across assigned verticals by shifting routine execution to the core team while personally owning architecture direction, priority decisions, and solution quality.", "High", "2027-03-31", [
          "Shift routine execution to the core team.",
          "Own architecture direction and priority decisions.",
          "Maintain solution quality for high-impact workstreams."
        ]),
        project("Regularity, Discipline & Ownership", "Execution Governance", "Establish a more self-sustaining delivery rhythm through proactive visibility, early escalation, and structured ownership so projects move forward with reduced dependence on senior intervention.", "High", "2027-03-31", [
          "Establish proactive visibility rhythm.",
          "Escalate risks early with clear ownership.",
          "Reduce dependence on senior intervention for project movement."
        ]),
        project("Team Contribution & Leadership", "ML Ownership Transition", "Transition day-to-day ownership of established ML pipelines and recurring execution workflows to the ML Team supported by clearer review mechanisms and delivery accountability.", "High", "2027-03-31", [
          "Hand over established ML pipelines to the ML Team.",
          "Hand over recurring execution workflows.",
          "Create review mechanisms and delivery accountability."
        ]),
        project("Team Contribution & Leadership", "Talent Pipeline Development", "Mentor interns and junior team members through structured onboarding, practical project exposure, and guided problem-solving to strengthen FloData future technical bench.", "Medium", "2027-03-31", [
          "Create structured onboarding path for interns and junior team members.",
          "Provide practical project exposure.",
          "Guide problem-solving to strengthen the future technical bench."
        ]),
        project("Innovation & Initiative", "FloData AI Product Library", "Institutionalize the year's work across Election, Real Estate, Industrial AI, and internal automation into a reusable product and component library.", "High", "2027-03-31", [
          "Collect reusable assets from Election, Real Estate, Industrial AI, and internal automation.",
          "Build a product and component library.",
          "Improve deployment speed and reduce rework."
        ]),
        project("Innovation & Initiative", "Reusable Delivery Acceleration", "Standardize modular components across ingestion, feature engineering, reporting, ML workflows, and Gen AI applications so future client solutions can be deployed more quickly and consistently.", "High", "2027-03-31", [
          "Standardize ingestion, feature engineering, and reporting components.",
          "Standardize ML workflow and Gen AI application modules.",
          "Improve consistency and speed for future client deployments."
        ]),
        project("Innovation & Initiative", "ML & Gen AI Product Assets", "Create reusable product modules across ML intelligence systems, automation workflows, and Gen AI applications so FloData can respond faster to new opportunities with stronger technical credibility and lower build effort.", "High", "2027-03-31", [
          "Create reusable modules for ML intelligence systems.",
          "Create reusable modules for automation workflows and Gen AI applications.",
          "Lower build effort while improving technical credibility for new opportunities."
        ])
      ]
    }
  ]
};

let roadmap = loadRoadmap();
let activeQuarterId = loadView().quarterId || roadmap.quarters[0].id;
let activeCategory = "all";
let expandedProjects = new Set();
let editingProjectId = null;
let saveTimer = null;
let saveInFlight = false;
let pendingRemoteSave = false;

const els = {
  quarterNav: document.getElementById("quarterNav"),
  quarterTitle: document.getElementById("quarterTitle"),
  quarterFocus: document.getElementById("quarterFocus"),
  syncStatus: document.getElementById("syncStatus"),
  searchInput: document.getElementById("searchInput"),
  statusFilter: document.getElementById("statusFilter"),
  adminTokenBtn: document.getElementById("adminTokenBtn"),
  addProjectBtn: document.getElementById("addProjectBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importInput: document.getElementById("importInput"),
  resetBtn: document.getElementById("resetBtn"),
  quarterProgress: document.getElementById("quarterProgress"),
  quarterMeter: document.getElementById("quarterMeter"),
  projectCount: document.getElementById("projectCount"),
  subtaskCount: document.getElementById("subtaskCount"),
  blockedCount: document.getElementById("blockedCount"),
  categoryPills: document.getElementById("categoryPills"),
  expandAllBtn: document.getElementById("expandAllBtn"),
  projectBoard: document.getElementById("projectBoard"),
  projectDialog: document.getElementById("projectDialog"),
  projectForm: document.getElementById("projectForm"),
  dialogTitle: document.getElementById("dialogTitle"),
  projectQuarter: document.getElementById("projectQuarter"),
  projectCategory: document.getElementById("projectCategory"),
  projectTitle: document.getElementById("projectTitle"),
  projectOwner: document.getElementById("projectOwner"),
  projectDue: document.getElementById("projectDue"),
  projectPriority: document.getElementById("projectPriority"),
  projectStatus: document.getElementById("projectStatus"),
  projectDescription: document.getElementById("projectDescription"),
  projectNotes: document.getElementById("projectNotes"),
  categoryOptions: document.getElementById("categoryOptions")
};

function project(category, title, description, priority, due, subtasks) {
  return {
    id: slug(`${category}-${title}`),
    category,
    title,
    description,
    owner: "Kush Prakhar",
    due,
    priority,
    status: "Not Started",
    notes: "",
    subtasks: subtasks.map((title) => ({
      id: slug(`${title}-${Math.random().toString(36).slice(2, 8)}`),
      title,
      done: false,
      notes: ""
    }))
  };
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uid(prefix) {
  const random = window.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
  return `${prefix}-${random}`;
}

function loadRoadmap() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return normalizeRoadmap(clone(initialRoadmap));
    return normalizeRoadmap(JSON.parse(saved));
  } catch (error) {
    console.warn("Unable to load roadmap tracker data.", error);
    return normalizeRoadmap(clone(initialRoadmap));
  }
}

function loadView() {
  try {
    return JSON.parse(localStorage.getItem(VIEW_KEY)) || {};
  } catch {
    return {};
  }
}

function saveRoadmap() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(roadmap));
  scheduleRemoteSave();
}

function saveView() {
  localStorage.setItem(VIEW_KEY, JSON.stringify({ quarterId: activeQuarterId }));
}

function setSyncStatus(state, text) {
  if (!els.syncStatus) return;
  els.syncStatus.dataset.state = state;
  els.syncStatus.textContent = text;
}

function isFilePreview() {
  return window.location.protocol === "file:";
}

function getAdminToken() {
  return localStorage.getItem(ADMIN_TOKEN_KEY) || "";
}

function setAdminToken() {
  const current = getAdminToken();
  const token = prompt("Edit passcode", current);
  if (token === null) return false;

  if (token.trim()) {
    localStorage.setItem(ADMIN_TOKEN_KEY, token.trim());
    setSyncStatus("synced", "Passcode saved");
  } else {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    setSyncStatus("local", "Passcode cleared");
  }

  return true;
}

function scheduleRemoteSave(delay = 550) {
  if (isFilePreview()) {
    setSyncStatus("local", "Local draft");
    return;
  }

  clearTimeout(saveTimer);
  setSyncStatus("saving", "Saving");
  saveTimer = setTimeout(() => {
    saveRoadmapToBackend();
  }, delay);
}

async function loadRoadmapFromBackend() {
  if (isFilePreview()) {
    setSyncStatus("local", "Local draft");
    return;
  }

  setSyncStatus("loading", "Loading");

  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(payload.error || "Unable to load backend data.");
    }

    if (payload.roadmap) {
      roadmap = normalizeRoadmap(payload.roadmap);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(roadmap));
      if (!roadmap.quarters.some((quarter) => quarter.id === activeQuarterId)) {
        activeQuarterId = roadmap.quarters[0].id;
        saveView();
      }
      render();
      setSyncStatus("synced", payload.updatedAt ? `Synced ${formatDateTime(payload.updatedAt)}` : "Synced");
      return;
    }

    setSyncStatus("local", "Template ready");
  } catch (error) {
    console.warn("Backend load failed.", error);
    setSyncStatus("error", "Local mode");
  }
}

async function saveRoadmapToBackend({ allowPrompt = true } = {}) {
  if (isFilePreview()) {
    setSyncStatus("local", "Local draft");
    return;
  }

  if (saveInFlight) {
    pendingRemoteSave = true;
    return;
  }

  saveInFlight = true;
  setSyncStatus("saving", "Saving");

  try {
    const token = getAdminToken();
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        ...(token ? { "x-roadmap-admin-token": token } : {})
      },
      body: JSON.stringify({ roadmap })
    });

    const payload = await response.json().catch(() => ({}));

    if (response.status === 401 && allowPrompt) {
      if (setAdminToken()) {
        saveInFlight = false;
        await saveRoadmapToBackend({ allowPrompt: false });
        return;
      }
    }

    if (!response.ok) {
      throw new Error(payload.error || "Unable to save roadmap.");
    }

    setSyncStatus("synced", payload.updatedAt ? `Saved ${formatDateTime(payload.updatedAt)}` : "Saved");
  } catch (error) {
    console.warn("Backend save failed.", error);
    setSyncStatus("error", "Save failed");
  } finally {
    saveInFlight = false;
    if (pendingRemoteSave) {
      pendingRemoteSave = false;
      scheduleRemoteSave(100);
    }
  }
}

function normalizeRoadmap(data) {
  const base = data && Array.isArray(data.quarters) ? data : clone(initialRoadmap);
  const seenProjectIds = new Set();
  const seenSubtaskIds = new Set();
  base.quarters.forEach((quarter, quarterIndex) => {
    quarter.id ||= `q${quarterIndex + 1}`;
    quarter.projects ||= [];
    quarter.projects.forEach((item) => {
      item.id = uniqueId(item.id || slug(`${quarter.id}-${item.category}-${item.title}`), seenProjectIds, "project");
      item.category ||= "Work (Client + Internal Impact)";
      item.title ||= "Untitled Project";
      item.description ||= "";
      item.owner ||= "";
      item.due ||= quarter.due || "";
      item.priority = PRIORITY_OPTIONS.includes(item.priority) ? item.priority : "Medium";
      item.status = STATUS_OPTIONS.includes(item.status) ? item.status : "Not Started";
      item.notes ||= "";
      item.subtasks ||= [];
      item.subtasks.forEach((subtask) => {
        subtask.id = uniqueId(subtask.id || slug(`${item.id}-${subtask.title}`), seenSubtaskIds, "subtask");
        subtask.title ||= "Untitled subtask";
        subtask.done = Boolean(subtask.done);
        subtask.notes ||= "";
      });
    });
  });
  return base;
}

function uniqueId(candidate, seen, prefix) {
  const base = slug(candidate || prefix) || uid(prefix);
  let value = base;
  let index = 2;
  while (seen.has(value)) {
    value = `${base}-${index}`;
    index += 1;
  }
  seen.add(value);
  return value;
}

function getActiveQuarter() {
  return roadmap.quarters.find((quarter) => quarter.id === activeQuarterId) || roadmap.quarters[0];
}

function getProject(projectId) {
  for (const quarter of roadmap.quarters) {
    const item = quarter.projects.find((projectItem) => projectItem.id === projectId);
    if (item) return { quarter, item };
  }
  return null;
}

function projectProgress(item) {
  const total = item.subtasks.length;
  if (!total) return item.status === "Done" ? 100 : 0;
  return Math.round((item.subtasks.filter((subtask) => subtask.done).length / total) * 100);
}

function quarterStats(quarter) {
  const projects = quarter.projects;
  const totalSubtasks = projects.reduce((sum, item) => sum + item.subtasks.length, 0);
  const doneSubtasks = projects.reduce((sum, item) => sum + item.subtasks.filter((subtask) => subtask.done).length, 0);
  const progress = totalSubtasks
    ? Math.round((doneSubtasks / totalSubtasks) * 100)
    : projects.length
      ? Math.round(projects.reduce((sum, item) => sum + projectProgress(item), 0) / projects.length)
      : 0;

  return {
    progress,
    projects: projects.length,
    totalSubtasks,
    doneSubtasks,
    blocked: projects.filter((item) => item.status === "Blocked").length
  };
}

function quarterCategories(quarter) {
  return quarter.projects.reduce((categories, item) => {
    if (!categories.includes(item.category)) categories.push(item.category);
    return categories;
  }, []);
}

function filteredProjects() {
  const quarter = getActiveQuarter();
  const search = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;

  return quarter.projects.filter((item) => {
    const statusMatch = status === "all" || item.status === status;
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const haystack = [
      item.category,
      item.title,
      item.description,
      item.owner,
      item.notes,
      ...item.subtasks.map((subtask) => `${subtask.title} ${subtask.notes}`)
    ].join(" ").toLowerCase();
    const searchMatch = !search || haystack.includes(search);
    return statusMatch && categoryMatch && searchMatch;
  });
}

function render() {
  const quarter = getActiveQuarter();
  if (!roadmap.quarters.some((item) => item.id === activeQuarterId)) {
    activeQuarterId = roadmap.quarters[0].id;
  }

  renderQuarterNav();
  renderHeader(quarter);
  renderMetrics(quarter);
  renderCategories(quarter);
  renderProjects();
  renderDialogOptions();
}

function renderQuarterNav() {
  els.quarterNav.innerHTML = roadmap.quarters.map((quarter) => {
    const stats = quarterStats(quarter);
    return `
      <button class="quarter-tab ${quarter.id === activeQuarterId ? "active" : ""}" type="button" data-quarter="${quarter.id}">
        <span>
          <strong>${escapeHtml(quarter.label)} · ${escapeHtml(quarter.title)}</strong>
          ${escapeHtml(quarter.period)}
        </span>
        <span class="tab-progress" style="--value: ${stats.progress}%">${stats.progress}%</span>
      </button>
    `;
  }).join("");
}

function renderHeader(quarter) {
  els.quarterTitle.textContent = `${quarter.label}: ${quarter.title}`;
  els.quarterFocus.textContent = quarter.period;
}

function renderMetrics(quarter) {
  const stats = quarterStats(quarter);
  els.quarterProgress.textContent = `${stats.progress}%`;
  els.quarterMeter.style.width = `${stats.progress}%`;
  els.projectCount.textContent = stats.projects;
  els.subtaskCount.textContent = `${stats.doneSubtasks} / ${stats.totalSubtasks}`;
  els.blockedCount.textContent = stats.blocked;
}

function renderCategories(quarter) {
  const categories = quarterCategories(quarter);
  const allCount = quarter.projects.length;
  els.categoryPills.innerHTML = [
    `<button class="pill ${activeCategory === "all" ? "active" : ""}" type="button" data-category="all">All · ${allCount}</button>`,
    ...categories.map((category) => {
      const count = quarter.projects.filter((item) => item.category === category).length;
      return `<button class="pill ${activeCategory === category ? "active" : ""}" type="button" data-category="${escapeAttribute(category)}">${escapeHtml(shortCategory(category))} · ${count}</button>`;
    })
  ].join("");
}

function renderProjects() {
  const projects = filteredProjects();
  if (!projects.length) {
    els.projectBoard.innerHTML = `<div class="empty">No projects match the current view.</div>`;
    return;
  }

  const grouped = groupProjects(projects);
  els.projectBoard.innerHTML = grouped.map(([category, items]) => `
    <div class="category-group">
      <div class="category-heading">
        <h3>${escapeHtml(category)}</h3>
        <span>${items.length} project${items.length === 1 ? "" : "s"}</span>
      </div>
      ${items.map(renderProjectCard).join("")}
    </div>
  `).join("");
}

function groupProjects(projects) {
  const categories = quarterCategories(getActiveQuarter());
  return categories
    .map((category) => [category, projects.filter((item) => item.category === category)])
    .filter(([, items]) => items.length);
}

function renderProjectCard(item) {
  const progress = projectProgress(item);
  const isExpanded = expandedProjects.has(item.id);
  const subtaskSummary = `${item.subtasks.filter((subtask) => subtask.done).length}/${item.subtasks.length} subtasks`;
  return `
    <article class="project-card" data-project="${escapeAttribute(item.id)}" data-priority="${escapeAttribute(item.priority)}">
      <div class="project-head">
        <div>
          <div class="project-title-row">
            <h4>${escapeHtml(item.title)}</h4>
            <span class="status-badge" data-status="${escapeAttribute(item.status)}">${escapeHtml(item.status)}</span>
            <span class="priority-badge">${escapeHtml(item.priority)}</span>
          </div>
          <div class="project-meta">
            <span>${escapeHtml(item.owner || "No owner")}</span>
            <span>Due ${escapeHtml(formatDate(item.due))}</span>
            <span>${progress}% complete</span>
            <span>${escapeHtml(subtaskSummary)}</span>
          </div>
        </div>
        <div class="project-actions">
          <button class="small-action" type="button" data-action="toggle-project">${isExpanded ? "Collapse" : "Expand"}</button>
          <button class="icon-button" type="button" title="Edit project" aria-label="Edit project" data-action="edit-project">✎</button>
          <button class="icon-button danger" type="button" title="Delete project" aria-label="Delete project" data-action="delete-project">×</button>
        </div>
      </div>

      <p class="project-description">${escapeHtml(item.description)}</p>

      <div class="meter" aria-label="Project progress"><span style="width: ${progress}%"></span></div>

      ${isExpanded ? renderProjectDetails(item) : ""}
    </article>
  `;
}

function renderProjectDetails(item) {
  return `
    <div class="project-controls">
      <label>
        Status
        <select data-action="update-project" data-field="status">
          ${STATUS_OPTIONS.map((status) => `<option ${status === item.status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
        </select>
      </label>
      <label>
        Priority
        <select data-action="update-project" data-field="priority">
          ${PRIORITY_OPTIONS.map((priority) => `<option ${priority === item.priority ? "selected" : ""}>${escapeHtml(priority)}</option>`).join("")}
        </select>
      </label>
      <label>
        Owner
        <input data-action="update-project" data-field="owner" value="${escapeAttribute(item.owner)}">
      </label>
      <label>
        Due
        <input type="date" data-action="update-project" data-field="due" value="${escapeAttribute(item.due)}">
      </label>
    </div>

    <div class="subtasks">
      ${item.subtasks.map((subtask) => renderSubtask(item, subtask)).join("")}
      <div class="add-subtask">
        <input placeholder="Add subtask" data-new-subtask>
        <button class="button ghost" type="button" data-action="add-subtask">Add</button>
      </div>
    </div>

    <div class="notes-panel">
      <label>
        Project notes
        <textarea data-action="update-project" data-field="notes" placeholder="Add risks, blockers, links, or stakeholder notes">${escapeHtml(item.notes)}</textarea>
      </label>
    </div>
  `;
}

function renderSubtask(projectItem, subtask) {
  return `
    <div class="subtask-row ${subtask.done ? "done" : ""}" data-subtask="${escapeAttribute(subtask.id)}">
      <input type="checkbox" ${subtask.done ? "checked" : ""} aria-label="Toggle subtask" data-action="toggle-subtask">
      <div class="subtask-text">
        <strong>${escapeHtml(subtask.title)}</strong>
        ${subtask.notes ? `<span class="subtask-meta">${escapeHtml(subtask.notes)}</span>` : ""}
      </div>
      <div class="project-actions">
        <button class="icon-button" type="button" title="Edit subtask" aria-label="Edit subtask" data-action="edit-subtask">✎</button>
        <button class="icon-button danger" type="button" title="Delete subtask" aria-label="Delete subtask" data-action="delete-subtask">×</button>
      </div>
    </div>
  `;
}

function renderDialogOptions() {
  els.projectQuarter.innerHTML = roadmap.quarters.map((quarter) => `
    <option value="${escapeAttribute(quarter.id)}">${escapeHtml(`${quarter.label}: ${quarter.title}`)}</option>
  `).join("");

  const categories = new Set(CATEGORY_ORDER);
  roadmap.quarters.forEach((quarter) => quarter.projects.forEach((item) => categories.add(item.category)));
  els.categoryOptions.innerHTML = Array.from(categories).map((category) => `
    <option value="${escapeAttribute(category)}"></option>
  `).join("");
}

function shortCategory(category) {
  return category
    .replace(" (Client + Internal Impact)", "")
    .replace("Skilling & Capability Building", "Skilling")
    .replace("Business / BD Contribution", "BD")
    .replace("Regularity, Discipline & Ownership", "Ownership")
    .replace("Team Contribution & Leadership", "Team")
    .replace("Innovation & Initiative", "Innovation");
}

function formatDate(value) {
  if (!value) return "not set";
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  return `${day}-${month}-${year}`;
}

function formatDateTime(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function openProjectDialog(projectId) {
  editingProjectId = projectId || null;
  const context = projectId ? getProject(projectId) : null;
  const item = context?.item;

  els.dialogTitle.textContent = item ? "Edit Project" : "Add Project";
  els.projectQuarter.value = context?.quarter.id || activeQuarterId;
  els.projectCategory.value = item?.category || "Work (Client + Internal Impact)";
  els.projectTitle.value = item?.title || "";
  els.projectOwner.value = item?.owner || roadmap.owner || "";
  els.projectDue.value = item?.due || getActiveQuarter().due || "";
  els.projectPriority.value = item?.priority || "Medium";
  els.projectStatus.value = item?.status || "Not Started";
  els.projectDescription.value = item?.description || "";
  els.projectNotes.value = item?.notes || "";

  if (typeof els.projectDialog.showModal === "function") {
    els.projectDialog.showModal();
  } else {
    els.projectDialog.setAttribute("open", "");
  }
}

function saveProjectFromDialog() {
  const quarterId = els.projectQuarter.value;
  const targetQuarter = roadmap.quarters.find((quarter) => quarter.id === quarterId);
  const payload = {
    category: els.projectCategory.value.trim() || "Work (Client + Internal Impact)",
    title: els.projectTitle.value.trim(),
    owner: els.projectOwner.value.trim(),
    due: els.projectDue.value,
    priority: els.projectPriority.value,
    status: els.projectStatus.value,
    description: els.projectDescription.value.trim(),
    notes: els.projectNotes.value.trim()
  };

  if (!payload.title || !targetQuarter) return;

  if (editingProjectId) {
    const context = getProject(editingProjectId);
    if (!context) return;
    Object.assign(context.item, payload);
    if (context.quarter.id !== targetQuarter.id) {
      context.quarter.projects = context.quarter.projects.filter((item) => item.id !== editingProjectId);
      targetQuarter.projects.push(context.item);
      activeQuarterId = targetQuarter.id;
    }
  } else {
    const newItem = {
      id: uid("project"),
      ...payload,
      subtasks: [
        { id: uid("subtask"), title: "Define success criteria and acceptance checkpoints.", done: false, notes: "" },
        { id: uid("subtask"), title: "Break work into execution tasks with owners and dates.", done: false, notes: "" }
      ]
    };
    targetQuarter.projects.push(newItem);
    expandedProjects.add(newItem.id);
    activeQuarterId = targetQuarter.id;
  }

  saveRoadmap();
  saveView();
  render();
}

function syncProjectCompletion(item) {
  if (item.subtasks.length && item.subtasks.every((subtask) => subtask.done)) {
    item.status = "Done";
  } else if (item.status === "Done") {
    item.status = "In Progress";
  }
}

function handleBoardClick(event) {
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;

  const card = event.target.closest("[data-project]");
  const projectId = card?.dataset.project;
  const context = projectId ? getProject(projectId) : null;
  if (!context) return;
  const item = context.item;
  const action = actionEl.dataset.action;

  if (action === "toggle-project") {
    if (expandedProjects.has(item.id)) expandedProjects.delete(item.id);
    else expandedProjects.add(item.id);
    renderProjects();
    return;
  }

  if (action === "edit-project") {
    openProjectDialog(item.id);
    return;
  }

  if (action === "delete-project") {
    if (!confirm(`Delete "${item.title}" and its subtasks?`)) return;
    context.quarter.projects = context.quarter.projects.filter((projectItem) => projectItem.id !== item.id);
    expandedProjects.delete(item.id);
    saveRoadmap();
    render();
    return;
  }

  if (action === "add-subtask") {
    const input = card.querySelector("[data-new-subtask]");
    const title = input.value.trim();
    if (!title) return;
    item.subtasks.push({ id: uid("subtask"), title, done: false, notes: "" });
    item.status = item.status === "Not Started" ? "In Progress" : item.status;
    saveRoadmap();
    render();
    return;
  }

  const subtaskRow = event.target.closest("[data-subtask]");
  const subtask = item.subtasks.find((candidate) => candidate.id === subtaskRow?.dataset.subtask);

  if (action === "delete-subtask" && subtask) {
    if (!confirm(`Delete subtask "${subtask.title}"?`)) return;
    item.subtasks = item.subtasks.filter((candidate) => candidate.id !== subtask.id);
    syncProjectCompletion(item);
    saveRoadmap();
    render();
    return;
  }

  if (action === "edit-subtask" && subtask) {
    const title = prompt("Subtask", subtask.title);
    if (title === null) return;
    const notes = prompt("Notes", subtask.notes || "");
    subtask.title = title.trim() || subtask.title;
    subtask.notes = notes === null ? subtask.notes : notes.trim();
    saveRoadmap();
    render();
  }
}

function handleBoardChange(event) {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  const card = event.target.closest("[data-project]");
  const context = card ? getProject(card.dataset.project) : null;
  if (!context) return;
  const item = context.item;
  const action = control.dataset.action;

  if (action === "update-project") {
    item[control.dataset.field] = control.value;
    if (control.dataset.field === "status" && control.value === "Done") {
      item.subtasks.forEach((subtask) => { subtask.done = true; });
    }
    saveRoadmap();
    render();
    return;
  }

  if (action === "toggle-subtask") {
    const subtaskRow = event.target.closest("[data-subtask]");
    const subtask = item.subtasks.find((candidate) => candidate.id === subtaskRow?.dataset.subtask);
    if (!subtask) return;
    subtask.done = control.checked;
    if (subtask.done && item.status === "Not Started") item.status = "In Progress";
    syncProjectCompletion(item);
    saveRoadmap();
    render();
  }
}

function handleBoardInput(event) {
  const control = event.target.closest("[data-action='update-project']");
  if (!control || control.tagName !== "TEXTAREA") return;
  const card = event.target.closest("[data-project]");
  const context = card ? getProject(card.dataset.project) : null;
  if (!context) return;
  context.item[control.dataset.field] = control.value;
  saveRoadmap();
}

function exportRoadmap() {
  const blob = new Blob([JSON.stringify(roadmap, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "kush-prakhar-roadmap-tracker-fy-2026-27.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importRoadmap(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const incoming = normalizeRoadmap(JSON.parse(reader.result));
      if (!incoming.quarters.length) throw new Error("No quarters found.");
      roadmap = incoming;
      activeQuarterId = roadmap.quarters[0].id;
      activeCategory = "all";
      expandedProjects.clear();
      saveRoadmap();
      saveView();
      render();
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    } finally {
      els.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function resetRoadmap() {
  if (!confirm("Reset all saved progress and restore the roadmap template?")) return;
  roadmap = normalizeRoadmap(clone(initialRoadmap));
  activeQuarterId = roadmap.quarters[0].id;
  activeCategory = "all";
  expandedProjects.clear();
  saveRoadmap();
  saveView();
  render();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

els.quarterNav.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-quarter]");
  if (!tab) return;
  activeQuarterId = tab.dataset.quarter;
  activeCategory = "all";
  saveView();
  render();
});

els.categoryPills.addEventListener("click", (event) => {
  const pill = event.target.closest("[data-category]");
  if (!pill) return;
  activeCategory = pill.dataset.category;
  renderCategories(getActiveQuarter());
  renderProjects();
});

els.searchInput.addEventListener("input", renderProjects);
els.statusFilter.addEventListener("change", renderProjects);
els.adminTokenBtn.addEventListener("click", () => {
  if (setAdminToken()) saveRoadmapToBackend({ allowPrompt: false });
});
els.addProjectBtn.addEventListener("click", () => openProjectDialog());
els.projectBoard.addEventListener("click", handleBoardClick);
els.projectBoard.addEventListener("change", handleBoardChange);
els.projectBoard.addEventListener("input", handleBoardInput);
els.exportBtn.addEventListener("click", exportRoadmap);
els.importInput.addEventListener("change", (event) => importRoadmap(event.target.files[0]));
els.resetBtn.addEventListener("click", resetRoadmap);

els.expandAllBtn.addEventListener("click", () => {
  const current = filteredProjects();
  const allExpanded = current.every((item) => expandedProjects.has(item.id));
  current.forEach((item) => {
    if (allExpanded) expandedProjects.delete(item.id);
    else expandedProjects.add(item.id);
  });
  els.expandAllBtn.textContent = allExpanded ? "Expand all" : "Collapse all";
  renderProjects();
});

els.projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.submitter?.value === "cancel") {
    els.projectDialog.close();
    return;
  }
  saveProjectFromDialog();
  els.projectDialog.close();
});

render();
loadRoadmapFromBackend();
