---
sidebar_position: 9
---

# 🛠️ Troubleshooting & FAQ

## ⚠️ Troubleshooting

- **Mock Tool Not Generating Expected Sample Data**
  - Double-check that you provided enough context in the prompt.
  - Regenerate the mock tool or manually edit the sample data.
- **Real Tool API Call Fails**
  - Confirm that the **URL** is correct and reachable.
  - Check if the **API Key** and **Headers** are set correctly.
  - Look in logs for detailed error messages.
- **Agent Exceeds Allowed Turns**
  - Increase **Max Turns** in the **Advanced settings** to accommodate longer tasks.

## ❓ FAQ

1. **Can I support multiple foundation models in one agent?**
   - Currently, you can select only one foundation model per agent configuration. You can, however, create multiple agent configurations within the same project to compare the results.
2. **Is multi-round conversation supported?**
   - Not at the moment. Each prompt in the Playground Chat is treated as a new task inquiry. Keep your tasks self-contained and provide all necessary context each time.
3. **Where is knowledge stored, and is it secure?**
   - CREAO stores your documents in a vector database. Security measures vary by deployment; consult your administrator or contact support for encryption and privacy details.
4. **How do I reset my environment?**
   - Go to **Environment Configuration** in Agent Studio, select the environment, and remove or re-add the tools and knowledge you need to change.
