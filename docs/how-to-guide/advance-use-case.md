---
sidebar_position: 7
---

# 📚 Advance Use Case

## 👀 Advanced Tutorial: Combining Mock Tools & Real Tools

### 🎯 Scenario

You have a real Weather API registered in CREAO and a mock tool simulating a list of your city's events such as baseball game, farmer's market or rock concert. You want to build an agent to provide you weekend activity suggestions based on weather condition.

### 🧑‍💻 Steps

1.**Register a Real Tool**

- Go to Tool Registration in the main menu.
- Fill out the form:

  - Name: “RealWeatherAPI”
  - URL: https://api.realweather.com/forecast (example)
  - Method: POST
  - Headers (if needed, e.g., Content-Type: application/json)
  - API Key (if the service requires one)
  - Input Schema (sample JSON body for the POST request)

2. **Create or Select an Environment**

- Under **Agent Studio → Environment Configuration**, either create a new environment or edit an existing one.
- Make a mock tool by typing "get all popular events of a given location".
- Include both “RealWeatherAPI” and your existing mock weather tool in the environment.

3. **Agent Configuration**

- In the **Playground Tab**, pick the environment that includes both the real and mock tools.
- Under the **Advanced Tab**, consider raising the **Max Turns** if your agent workflow is more involved.

4. **Predefined Steps**

- Provide a more complex task description, such as “Suggest weekend activities based on the weather forecasts.”
- CREAO will propose a plan that involves calling both tools.

5. **Test & Observe**

- In the **Playground Chat**, enter a task prompt (e.g., “What should I do on Saturday?”).
- The agent will sequentially or conditionally call each tool, then recommend the best activities. 🎈

Note: This is a great way to prototype with mock data before incurring API costs on a real service.

---

This is an advance example of how to set up and use Creao AI for creating automated systems. For more detailed instructions, see the rest of the documentation.
