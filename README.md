# Granite Config

A private npm package for Granite configuration setup.

## Installation

Since this is a private npm package, you can install it in your projects using one of the following methods:

### Method 1: Using GitHub Packages with Organization

1. Create or use an existing GitHub Personal Access Token (PAT) with `read:packages` permission.

2. Configure npm to use GitHub Packages for your organization's scope:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@graniteprotocol
# Enter your GitHub username, PAT as password, and your email
```

3. In the projects where you want to use this package, create or update `.npmrc` file:

```
@graniteprotocol:registry=https://npm.pkg.github.com
```

4. Then install the package:

```bash
npm install @graniteprotocol/config
```

### Method 2: Using a Private npm Registry (Recommended for Companies)

If your company has a private npm registry (like Verdaccio, npm Enterprise, or Artifactory):

1. Configure npm to use your company's private registry:

```bash
npm config set registry https://registry.your-company.com
# Login if required
npm login
```

2. Update the package.json to use your company's registry:

```json
"publishConfig": {
  "registry": "https://registry.your-company.com"
}
```

3. Publish to your company registry:

```bash
npm publish
```

4. Install in other projects:

```bash
npm install @graniteprotocol/config
```

### Method 3: Using npm link (for local development)

1. In this package directory, run:

```bash
npm run build  # Build the package
npm link       # Create a global link
```

2. In your project where you want to use this package:

```bash
npm link @graniteprotocol/config
```

## Usage

```typescript
import { Config } from '@graniteprotocol/config';

// Use the configuration
const config = new Config();
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
