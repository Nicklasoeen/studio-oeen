# Vercel Deployment Guide

## Quick Setup

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - **Project Name**: Use a unique name (e.g., `studio-oeen-web`, `oeen-webdesign`)
   - **Framework Preset**: Select "Next.js" (not Sanity)
   - **Root Directory**: Set to `web`
   - Vercel will auto-detect the Next.js app

3. **Configure Environment Variables**:
   In Vercel project settings, add these environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually "production")
   - `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (e.g., "2024-01-01")

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like: `your-project.vercel.app`

## Project Structure

- Root directory: `web` (configured in `vercel.json`)
- Build command: `npm install && npm run build` (automatically runs in `web` folder)
- Output directory: `.next` (relative to `web` folder)

## Custom Domain

After deployment, you can add a custom domain in Vercel project settings:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

## Environment Variables

Make sure to set these in Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## Troubleshooting

If deployment fails:
1. Check that all environment variables are set
2. Verify the build works locally: `cd web && npm run build`
3. Check Vercel build logs for errors

