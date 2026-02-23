let currentFilter = "all";

let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    title: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "Not Applied",
  },
  {
    id: 2,
    company: "TechCorp",
    title: "Frontend Developer",
    location: "New York",
    type: "Full-time",
    salary: "$90,000",
    description: "Develop modern web applications using React and Tailwind.",
    status: "Not Applied",
  },
  {
    id: 3,
    company: "DataWave",
    title: "Backend Developer",
    location: "San Francisco",
    type: "Full-time",
    salary: "$105,000",
    description:
      "Design and maintain scalable server-side applications using Node.js and Express.",
    status: "Not Applied",
  },
  {
    id: 4,
    company: "CloudNet",
    title: "DevOps Engineer",
    location: "Chicago",
    type: "Full-time",
    salary: "$115,000",
    description:
      "Manage CI/CD pipelines and cloud infrastructure using AWS and Docker.",
    status: "Not Applied",
  },
  {
    id: 5,
    company: "DesignPro",
    title: "UI/UX Designer",
    location: "Los Angeles",
    type: "Contract",
    salary: "$80,000",
    description:
      "Create intuitive user experiences and modern UI designs for web applications.",
    status: "Not Applied",
  },
  {
    id: 6,
    company: "AI Solutions",
    title: "Machine Learning Engineer",
    location: "Boston",
    type: "Full-time",
    salary: "$140,000",
    description:
      "Develop machine learning models and deploy AI-powered solutions.",
    status: "Not Applied",
  },
  {
    id: 7,
    company: "FinTech Labs",
    title: "Software Engineer",
    location: "Austin",
    type: "Full-time",
    salary: "$110,000",
    description: "Build secure and scalable financial software systems.",
    status: "Not Applied",
  },
  {
    id: 8,
    company: "AppWorks",
    title: "Mobile App Developer",
    location: "Seattle",
    type: "Full-time",
    salary: "$98,000",
    description:
      "Develop and maintain high-performance mobile applications for Android and iOS.",
    status: "Not Applied",
  },
  {
    id: 9,
    company: "CyberSecure",
    title: "Security Analyst",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$120,000",
    description:
      "Monitor systems and protect company infrastructure from cyber threats.",
    status: "Not Applied",
  },
  {
    id: 10,
    company: "StartupX",
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    salary: "$125,000",
    description:
      "Lead product development cycles and collaborate with cross-functional teams.",
    status: "Not Applied",
  },
];

function emptyStateHTML() {
  return `
    <div class="flex flex-col justify-center items-center text-center gap-2 mt-[90px]">
      <div>
        <img src="./src/jobs.png" alt="jobs">
      </div>
      <div>
        <h1 class="text-[#002C5C] font-bold text-[24px]">No jobs available</h1>
        <p class="text-[#64748B]">Check back soon for new job opportunities</p>
      </div>
    </div>
  `;
}

function updateCounts() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "Interview").length;
  const rejected = jobs.filter((j) => j.status === "Rejected").length;

  const totalCntEl = document.getElementById("total-jobs-cnt");
  const interviewCntEl = document.getElementById("interview-jobs-cnt");
  const rejectedCntEl = document.getElementById("rejected-jobs-cnt");
  const totalJobsTextEl = document.getElementById("total-jobs");

  totalCntEl.innerText = total;
  interviewCntEl.innerText = interview;
  rejectedCntEl.innerText = rejected;

  let filteredJobsCount = total;
  if (currentFilter === "interview") filteredJobsCount = interview;
  if (currentFilter === "rejected") filteredJobsCount = rejected;

  totalJobsTextEl.innerText =
    currentFilter === "all"
      ? `${total} jobs`
      : `${filteredJobsCount} of ${total} jobs`;
}

function renderList(containerId, listJobs) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (listJobs.length === 0) {
    container.innerHTML = emptyStateHTML();
    return;
  }

  listJobs.forEach((job) => {
    const card = document.createElement("div");
    card.className = "card w-[100%] bg-base-100 card-xs shadow-sm mb-5";

    card.innerHTML = `
      <div class="card-body p-6">

        <div class="flex justify-between">
          <div>
            <h2 class="text-[#002C5C] font-bold text-[24px]">
              ${job.company}
            </h2>
            <p>${job.title}</p>
          </div>

          <button onclick="deleteJob(${job.id})"
            class="cursor-pointer btn bg-base-100">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <ul class="flex gap-5 text-[#64748B] mt-2">
          <li>${job.location}</li>
          <li>${job.type}</li>
          <li>${job.salary}</li>
        </ul>

        <div>
          <button class="btn cursor-default mt-2 mb-2 ${
            job.status === "Interview"
              ? "bg-green-100 text-green-600"
              : job.status === "Rejected"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
          }">
            ${job.status}
          </button>

          <p>${job.description}</p>
        </div>

        <div class="mt-2 flex gap-2">
          <button onclick="updateStatus(${job.id}, 'Interview')"
            class="btn border-[#10B981] text-[#10B981] text-[16px] font-bold">
            Interview
          </button>

          <button onclick="updateStatus(${job.id}, 'Rejected')"
            class="btn border-[#EF4444] text-[#EF4444] text-[16px] font-bold">
            Rejected
          </button>
        </div>

      </div>
    `;

    container.appendChild(card);
  });
}

function renderJobs() {
  renderList("job-list-all", jobs);

  const interviewJobs = jobs.filter((job) => job.status === "Interview");
  renderList("job-list-interview", interviewJobs);

  const rejectedJobs = jobs.filter((job) => job.status === "Rejected");
  renderList("job-list-rejected", rejectedJobs);

  updateCounts();
}

function updateStatus(id, newStatus) {
  const job = jobs.find((x) => x.id === id);
  if (!job) return;

  job.status = newStatus;
  renderJobs();
}

function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id);
  renderJobs();
}

function setupTabs() {
  const tabAll = document.getElementById("tab-all");
  const tabInterview = document.getElementById("tab-interview");
  const tabRejected = document.getElementById("tab-rejected");

  if (!tabAll || !tabInterview || !tabRejected) return;

  tabAll.addEventListener("change", () => {
    if (tabAll.checked) {
      currentFilter = "all";
      updateCounts();
    }
  });

  tabInterview.addEventListener("change", () => {
    if (tabInterview.checked) {
      currentFilter = "interview";
      updateCounts();
    }
  });

  tabRejected.addEventListener("change", () => {
    if (tabRejected.checked) {
      currentFilter = "rejected";
      updateCounts();
    }
  });
}

setupTabs();
renderJobs();
