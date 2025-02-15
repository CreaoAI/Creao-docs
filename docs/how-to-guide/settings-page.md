---
sidebar_position: 3
---

# 🛠️ Settings

## 🌟 Introduction

Configure your AI agent effectively by following these steps:

1. **Provide a detailed prompt** for generating output data from your input dataset.
2. **Define clear evaluation criteria** for judging the quality of generated outputs.
3. **Select the relevant input columns** for your agent.

## Task Description

Describe the task that the agent needs to accomplish. This should be a clear and concise statement of the objective.

**Example:**

```
Based on user task, get a list of properties based on location, choose the top 2 most expensive ones, and send the result via email to show the address, price, and highlighted image.
```

## Input Prompt Template

Detail how the agent should generate output data from the input dataset. Use specific instructions and include any necessary variables.

**Example:**

```
Find the top 2 most expensive houses in Palo Alto, CA, and send the result to email charisliao@berkeley.edu. Ensure the email is sent, and the image is included as a circle thumbnail, not a link.
```

## Reference Column

Select the data column that will be used as the reference for evaluation. This helps in assessing the accuracy and relevance of the generated outputs.

**Example:**

```
price
```

## Result Format

Define the standard options for output data. If there are no restrictions, this can be left blank. Ensure that the format aligns with the expected output.

**Example:**

```
3750000
```

Since our example is a price, the result format is a number.

## Tools

Select the tools that can be invoked when the multi-agent is running. This allows for additional functionalities to be integrated into the agent's workflow.

**Example:**

```
find_properties_list, send_email
```

## Knowledge

Select the knowledge resources that can be accessed when the multi-agent is running. This ensures the agent has the necessary information to perform its tasks effectively.

## Best Practices 🎯

- **Be Clear & Specific**: Clearly state what you want the agent to accomplish.
- **Use Data Smartly**: Ensure all necessary variables are included and correctly formatted.
- **Keep Scoring Simple**: Use straightforward evaluation criteria to assess output quality.

## Common Issues & Quick Fixes 🔧

1. **Bad Outputs?** → Add example formats in the prompt.
2. **Poor Scoring?** → Use numerical scores instead of words.
3. **Missing Info?** → Ensure all needed variables are included in the prompt.

Need help? Check our example templates or contact support!
