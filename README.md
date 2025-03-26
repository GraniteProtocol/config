# Granite Config

A private npm package for Granite configuration setup.

## Installation Guide

This is a private package hosted on GitHub Packages. Follow these exact steps to install and use it:

### Step 1: Authentication Setup

Create a `.npmrc` file in your project root with the following content:

```
@graniteprotocol:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Replace `YOUR_GITHUB_PAT` with a GitHub Personal Access Token that has `read:packages` permission.

To create a GitHub PAT:
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. Select at least the `read:packages` scope
3. Copy the generated token and use it in your `.npmrc` file

### Step 2: Install the Package

After setting up authentication, install the package:

```bash
npm install @graniteprotocol/config
```

### Step 3: Import and Use

```typescript
import { Config } from '@graniteprotocol/config';

// Use the configuration
const config = new Config();
```

## For Teams/Organizations

For shared team access:
1. Create a machine user or team access token in GitHub with `read:packages` permission
2. Share this token securely with your team (via password manager)
3. Everyone uses the same token in their `.npmrc` files
4. Add `.npmrc` to `.gitignore` to avoid committing tokens

## Local Development (Without Publishing)

For testing this package locally:

```bash
# In the package directory (this repo)
npm run build
npm link

# In your project directory
npm link @graniteprotocol/config
```

## Development

To build the package:

```bash
npm run build
```

To format code:

```bash
npm run format
```
