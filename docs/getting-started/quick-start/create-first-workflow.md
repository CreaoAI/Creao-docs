---
sidebar_position: 2
---

# Quick Example

In this brief tutorial, we’ll show you how to build a simple weather agent that uses a mock tool.

## 🌤️ Creating a Weather Agent

### 1. Create a New Project

Click Create New Project in the dashboard.
Name your project (e.g., WeatherAgent) and give a brief description.

![Creating a Project](https://creao-gifs.s3.us-west-2.amazonaws.com/documentation/creating-a-project.gif)

### 2. Configure Environment and add a Mock Tool

Open the project and initiate the Agent Studio, you will land on the Environment Configuration tab.
Enter a brief description (e.g., "Mock Weather Forecast API") to help CREAO generate sample inputs/outputs.
Now a mock tool is created and listed under this environment, you can check the input and output schema to understand what this tool does.

![Creating a Mock Tool](https://creao-gifs.s3.us-west-2.amazonaws.com/documentation/creating-mock-tool.gif)

### 3. Test in the Playground

Select Playground Tab.
Under Agent Configuration → Basic Setting Tab, select Agent Type (default is Plan and Execute Agent), choose your new environment, and pick a foundation model.
Type your weather question (e.g., "What is the forecast for tomorrow?").
Observe how the agent calls your mock tool and returns a response. ✨

![Testing in the Playground](https://creao-gifs.s3.us-west-2.amazonaws.com/documentation/playground-chat.gif)

That’s it! You’ve quickly created and tested a simple weather agent using mock tools in CREAO.

## Next Steps

- Explore advanced features in our [How-To Guides](docs/how-to-guide/advance-use-case.md).
