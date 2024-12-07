# Editing and Deploying the Website

Follow these instructions to edit and deploy the documentation website built using [Docusaurus](https://docusaurus.io/).

## Steps to Deploy

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
$ git clone git@github.com:CreaoAI/Creao-docs.git
$ cd Creao-docs
```

### 2. Install Dependencies

Install docusaurus using the following command:

```bash
$ npm i
```

### 3. Run the Development Server

```bash
$ npm run start
```

### 4. Make Changes and Commit

Make the changes you want to the documentation and commit them to the repository. Be sure to push your changes to the `main` branch so that the documentation is updated for future edits.

### 5. Deploy the Website

To deploy the website with the changes you made, run the following command:

```bash
$ npm run deploy
```

This will build the website and deploy it to the `gh-pages` branch.

Now your changes should be live on the website!
