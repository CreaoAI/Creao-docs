# Editing and Deploying the Website

Follow these instructions to edit and deploy the documentation website built using [Docusaurus](https://docusaurus.io/).

## Steps to Deploy

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:CreaoAI/docs.git
cd docs
```

### 2. Install Dependencies

Install Docusaurus using the following command:

```bash
npm i
```

### 3. Run the Development Server

```bash
npm run start
```

This will start the development server.  
Open the provided URL in your browser to preview your changes in real time.

### 4. Create a New Branch (Recommended)

If you’re confident about your changes, you may commit directly to `main`. However, the recommended process is to create a new branch and open a Pull Request for review:

1. **Make sure you’re on `main` and up to date**:
   ```bash
   git checkout main
   git pull
   ```
2. **Create a new branch**:
   ```bash
   git checkout -b your-new-branch-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "Describe your changes"
   ```
4. **Push your branch**:
   ```bash
   git push -u origin your-new-branch-name
   ```
5. **Open a Pull Request** on GitHub to merge your changes into `main`.

### 5. Merge or Push to Main

- If you used a separate branch, **merge the PR** once it’s approved.
- If you chose to work directly in `main` and are confident in your changes, just push to `main`.

### 6. Deploy the Website

Once your changes are on `main`, deploy the site:

```bash
npm run deploy
```

This command will build the site and deploy it to the `gh-pages` branch. Your changes should now be live!
