---
sidebar_position: 7
---

# 📚 Basic Use Case

## Example Project

### Project Name: Real Estate Highlighted Property Email Blast

### Project Description:

This project sends highlighted property information based on location to potential clients. The goal is to assist real estate agents in reaching out to clients with the most valuable property listings.

## Workflow Overview

1. **Name Your Project:**  
   Start by naming your project (e.g., **Real Estate Highlighted Property Email Blast**).

2. **Add a Project Description:**  
   Write a brief description of what your project is about (e.g., "Sends highlighted property information based on location to potential clients").

3. **Upload Your Dataset:**  
   Upload a dataset in **JSONL** format. Each line should be a valid JSON object containing business-related input and output data. Example:

   ```json
   {"location": "Palo Alto, CA", "price": 3750000, "image": "image_url"}
   {"location": "San Francisco, CA", "price": 4500000, "image": "image_url"}
   ```

4. **Create Project:**  
   After uploading your dataset, click **Create Project**. You will be directed to the Data Page.

5. **Set Initial Prompts:**  
   Go to the **Settings Page** to configure your **Input Prompt** and **Judge Prompt**. Below are example prompts you can use:

   ### Example Prompts

   #### Task Description:

   Based on user task, which is to get a list of properties based on location, choose the top 2 most expensive ones, and send the result to email to show the address, price, and highlighted image.

   #### Input Prompt Template:

   ```
   Find the top 2 most expensive houses in Palo Alto, CA, and send the result to email [potential client email]. Make sure you send out the email, and make sure the image is in the email as an image, in a circle thumbnail, not a link.
   ```

   #### Reference Column:

   ```
   Price
   ```

   #### Result Format:

   ```
   3750000
   ```

   #### Tools:

   Select "find_properties_list" and "send_email".

6. **Save Settings:**  
   After configuring your settings, make sure to save them.

7. **Generate Agent:**  
   Once your prompts are set, click **Generate Agent** to create your agents. You will be taken to the **Agent Page**.

8. **View Agent Generation:**  
   On the **Agent Page**, you can view the generation process and execution plan. Click deploy if needed. Double-check to see if the potential client actually receives the email for the highlighted property.

---

This is a basic example of how to set up and use Creao AI for creating automated systems using your own dataset. For more detailed instructions, see the rest of the documentation.
