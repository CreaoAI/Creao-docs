---
sidebar_position: 7
---

# 📚 Basic Use Case

## Example Project

### Project Name: College Physics Test Generator

### Project Description:

This project uses a dataset of college-level physics questions and answers to generate automated test question prompts. The goal is to assist educators in creating customized physics tests.

## Workflow Overview

1. **Name Your Project:**  
   Start by naming your project (e.g., **College Physics Test Generator**).

2. **Add a Project Description:**  
   Write a brief description of what your project is about (e.g., "Automates the generation of physics test questions").

3. **Upload Your Dataset:**  
   Upload a dataset in **JSONL** format. Each line should be a valid JSON object containing business-related input and output data. Example:

   ```json
   {"question": "What is Newton's second law?", "answer": "F = ma"}
   {"prompt": "Define conservation of energy.", "completion": "Energy cannot be created or destroyed, only transformed."}
   ```

   For this example, we're using a simple MMLU college physics JSONL file. You can download the dataset from [Hugging Face](https://huggingface.co/datasets/cais/mmlu/viewer/college_physics).

4. **Create Project:**  
   After uploading your dataset, click **Create Project**. You will be directed to the Data Page.

5. **Set Initial Prompts:**  
   Go to the **Settings Page** to configure your **Input Prompt** and **Judge Prompt**. Below are example prompts you can use:

   ### Example Prompts

   #### Initial Prompt:

   ```
   "{{ question }}"

   **Choices:**
   0) {{ choices[0] }}
   1) {{ choices[1] }}
   2) {{ choices[2] }}
   3) {{ choices[3] }}

   **Instructions:** Based on the information provided, select the most accurate answer (0, 1, 2, or 3) from the choices above, only return the answer number, no other description and analysis.
   ```

   #### Judgement Prompt:

   ```
   [Reference Answer]
   {{ answer }}

   [Model Answer]
   {{ prediction }}

   [Question]
   {{ question }}

   [Task]
   Rate the model's answer based on its alignment with the reference answer, if it is correct, then the score is 1.0, otherwise the score is 0.

   Your response should be formatted as follows:
   Score: (int)
   ```

6. **Generate New Agent:**  
   Once your prompts are set, click **Generate New Agent** to create your agents. You will be taken to the **Agent Page**.

7. **View Agent Generation:**  
   On the **Agent Page**, you can choose how many agents to generate. Each generated agent will improve based on your settings.

8. **View Analysis:**  
   After generating agents, go to the **Analysis Page** to see the results in tree and graph format.

9. **Download the Analysis:**  
   Navigate back to the **Agent Page** to download the analysis report.

---

This is a basic example of how to set up and use Creao AI for creating automated systems using your own dataset. For more detailed instructions, see the rest of the documentation.
