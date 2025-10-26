"# TaskManagement" 



<a href="https://task-manager-eh.netlify.app/log-in"> Visit my live website </a>

🚀 Full-Stack Web App (Node.js + React.js) — Azure DevOps CI/CD

This project is a full-stack web application built using React.js (frontend) and Node.js/Express.js (backend).
It demonstrates how to set up an end-to-end CI/CD pipeline using Azure DevOps, automating build, test, and deployment processes.

🧩 Tech Stack
Layer	Technology
Frontend	React.js, HTML5, CSS3, JavaScript (ES6)
Backend	Node.js, Express.js
CI/CD	Azure DevOps Pipelines
Version Control	Git & GitHub

⚙️ Features

✅ Modern React UI with reusable components
✅ RESTful API using Express.js
✅ Environment-based configuration
✅ Continuous Integration using Azure Pipelines
✅ Automated frontend build and backend testing
✅ Continuous Deployment to Azure Web App

🧰 Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2️⃣ Install dependencies

For backend:

cd server
npm install


For frontend:

cd ../client
npm install

3️⃣ Run locally

Start backend:

cd server
npm run dev


Start frontend:

cd client
npm start

🔄 Azure DevOps CI/CD Pipeline

The pipeline is defined in azure-pipelines.yml and performs:

Trigger: Runs on push to main branch.

Build: Installs Node.js, installs dependencies, builds frontend.

Test: Runs backend tests (if defined).

Publish: Uploads build artifacts to Azure.

Deploy: Deploys automatically to Azure Web App.

Example Pipeline YAML
trigger:
- main
<img width="1366" height="768" alt="Screenshot (152)" src="https://github.com/user-attachments/assets/5f79f5f8-3719-4d94-9346-f32f5e1ed5a9" />
<img width="1366" height="768" alt="Screenshot (153)" src="https://github.com/user-attachments/assets/1206d1ea-0505-4c54-bad5-48f1b064dc45" />
<img width="1366" height="768" alt="Screenshot (154)" src="https://github.com/user-attachments/assets/8338048d-bc11-4cc0-8985-7802028ad547" />
<img width="1366" height="768" alt="Screenshot (155)" src="https://github.com/user-attachments/assets/55a0b39b-3220-42e1-966d-d59161bac48c" />
<img width="1366" height="768" alt="Screenshot (157)" src="https://github.com/user-attachments/assets/d83da977-9c87-4bdf-abf4-fad4e79545bc" />
<img width="1366" height="768" alt="Screenshot (156)" src="https://github.com/user-attachments/assets/e4d9fa4d-ca0c-456d-8b3d-09320af8c0d3" />





pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    cd server
    npm install
  displayName: 'Install backend dependencies'

- script: |
    cd client
    npm install
    npm run build
  displayName: 'Build React frontend'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: 'client/build'
    ArtifactName: 'react-build'
  displayName: 'Publish build artifacts'

☁️ Deployment

Platform: Azure Web App

Pipeline: Azure DevOps (Build + Release)

Trigger: Auto-deployment on code push

🧠 Learnings & Takeaways

Building a modern full-stack app with React and Node.js

Integrating GitHub with Azure DevOps for CI/CD

Managing environment variables securely in Azure

Automating build and deployment pipelines








