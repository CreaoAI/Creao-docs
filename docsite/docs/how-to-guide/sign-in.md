---
sidebar_position: 1
---

# 🔑 Sign In & Start

### Sign In to Creao AI

To get started, log in to the platform using your Google account. If you haven’t set up an account yet, please refer to the "Quick Start" section to complete the setup process.

![sign-in-with-google](img/sign-in-with-google.gif "Sign in with Google")

Once you’re logged in, you'll be redirected to your Creao dashboard. If you've previously created any projects, they will be displayed here. You'll also see two buttons:

- **Upload Your Dataset**
- **Start with Templates**

![two-buttons](img/two-buttons.gif "Upload Your Dataset or Start with Templates")

### Upload Your Dataset

To create a custom project with your own data, follow these steps:

1. **Name Your Project**  
   Give your project a meaningful name that reflects the content or goal of your project.

2. **Enter Project Description**  
   Add a brief description of your project to provide context for the dataset you are uploading.

3. **Upload Your Dataset**  
   To upload your dataset, make sure it meets the following format requirements:

   - **File Format:** JSONL (.jsonl extension)
   - **Content:** Each line of the file must be a valid JSON object.
   - **Structure:** Each JSON object should contain business-related input and output data. For example:

     ```json
     {"question": "What is ML?", "answer": "Machine Learning..."}
     {"prompt": "Explain AI", "completion": "AI is..."}
     ```

4. **Create Project**  
   After uploading your dataset, click the **Create Project** button to proceed.

### Start with Templates

If you prefer to start with a predefined workflow:

1. **Choose a Template**  
   Pick a workflow that best aligns with your desired goal from the available options.

2. **Create Project**  
   Once you’ve selected a template, click **Create** to start the project with the chosen template.

After creating your project, you'll be directed to the **Data Page** where you can further configure and analyze your project. For more details on the Data Page, see the next section.

---

For further assistance, refer to the rest of the documentation in the How-to Guide.
