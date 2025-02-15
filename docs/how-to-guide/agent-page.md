---
sidebar_position: 4
---

# 🧑‍💻 Agent Tab

The **Agent** tab is where you can manage and monitor your AI agents. This page allows you to generate new agents, view their details, and track their performance.

The Agent page consists of the following:

1. 📋 **Agent Cards**
   - Shows agent name, description, and creation time
   - Status indicators:
     - 🔴 Failed: Agent has encountered an error
     - 🔄 Generating: Agent is being generated
     - 🟢 Ready for Deployment: Agent is ready to be deployed
     - 🚀 Deployed: Agent is currently deployed and operational
2. 📊 **Agent Details Sidebar**
   The sidebar opens when clicking an agent card and has two tabs:

   - **General**: Displays basic information about the agent, including:

     - Agent Name
     - Auto-generated status
     - Score
     - Tools used
     - Reference Column
     - Result Enum
     - Input Prompt Template

   - **Config**: This is the configuration that our meta agent generated, kind of like a "plan". It allows you to adjust parameters and settings as needed.

### ⚪️ Agent Status

- **🔄 GENERATING**: Agent is currently being generated
- **🔄 UPDATED**: Agent has been updated
- **⏹️ STOPPED**: Agent has been stopped
- **📊 SCORING**: Agent is being scored
- **🟢 READY FOR DEPLOYMENT**: Agent is ready to be deployed
- **🚀 DEPLOYED**: Agent is currently deployed and operational
- **🔴 FAILED**: Agent has encountered an error

### 💫 How It Works

1. **Generating Agents**

   - Click the "Generate Agent" button to create a new agent
   - The system will automatically optimize based on previous agents
   - New agents will appear with a "🔄 GENERATING" status while being generated

2. **Managing Agents**
   - When an agent is in the "Ready for Deployment" state, click on it to view the modal displaying the generation process and execution plan.
   - Users can click the "Deploy" button in the modal to deploy the agent.
   - Once the agent is deployed, clicking on the agent card will show the agent details, and users will be able to invoke it.

> 💡 **Note**: Make sure you've configured the Input and Judge Prompt Templates in the Settings tab before generating agents first. These templates can be updated at any time.

### 📈 Performance Tracking

Each agent includes performance metrics:

- Judge scores for evaluating effectiveness, displayed in the modal as well as on the agent card

> 💡 **Next Step**: Let's look at even more metrics by heading to the Analysis tab
