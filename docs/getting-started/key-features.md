---
sidebar_position: 4
---

# Key Features & Concepts

Creao AI helps you create, optimize, and deploy agentic workflows autonomously. Below, we highlight the key features that enable you to do just that.

## 📁 Projects

A Project in CREAO acts as an overarching container for:

- Environments (where tools, knowledge, and mock tools are defined)
- Agent configurations (Basic and Advanced settings)
- Playground sessions

## 🌎 Environments

An **Environment** defines which tools and knowledge bases an agent can access. You can create multiple environments under a single project—some can use real, registered tools, while others use mock tools.

1. **Mock Tools**: Automatically generated API endpoints that simulate real-world tool behavior. CREAO creates these based on your agent’s use case, generating example schemas and sample data.
2. **Registered Tools**: Tools you’ve integrated into CREAO via the Tool Registration process (e.g., REST APIs).

## 🛠️ Agent Studio

The Agent Studio is where you configure how your agent operates. It has two main areas:

1. **Environment Configuration Tab**: Select or create mock tools, register real tools, and associate relevant knowledge bases.
2. **Playground Tab**:

- **Agent Configuration**: Basic and advanced settings for the agent (e.g., foundation model, output format, max turns, temperature).
- **Predefined Steps**: Seed your agent with an execution plan based on a high-level task description before running actual queries.

## 💬 Playground Chat

The Playground Chat is an interactive console for testing agent behavior:

- Each new input is treated as a separate task (multi-round conversation is not yet supported).
- The agent will use the selected environment settings, knowledge, and tool integrations to plan and execute its actions.

## 🔌 Tool Registration

The **Tool Registration** process is where you connect external APIs to CREAO. You provide essential details (name, description, URL, request method, headers, API keys, etc.) so your agent can call these tools during execution.

## 📚 Knowledge Management

**Knowledge Management** lets you upload files or text that CREAO stores in a vector database. You can also provide URLs for CREAO to parse. This knowledge can be referenced by agents during planning or execution steps.
