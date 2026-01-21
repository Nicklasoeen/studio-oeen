# Setting Up Git Repository for Deployment

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `studio-oeen` or `oeen-webdesign`)
4. **Don't** initialize with README, .gitignore, or license (you already have these)
5. Click "Create repository"

## Step 2: Connect Your Local Repository

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Make sure you're in the project directory
cd /Users/nicklasoen/studio-oeen

# Add all files and commit (if not already done)
git add .
git commit -m "Initial commit - ready for deployment"

# Add the remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

Once your code is on GitHub:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Vercel will auto-detect Next.js
6. Add environment variables
7. Click "Deploy"

## Alternative: Use Vercel CLI (No GitHub needed)

If you prefer not to use GitHub, you can deploy directly:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to your web folder
cd web

# Deploy
vercel
```

Follow the prompts to deploy your site.

