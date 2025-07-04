# Garrett Rumschik Portfolio Website

This project is a personal portfolio application for Garrett Rumschik.

## Features

- Built with React and TypeScript
- Uses AOS for animations, React Router for routing, and more
- Social media metadata for sharing
- Custom CORS headers via Netlify configuration

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/onlygarrett/web-portfolio2.git
cd web-portfolio2
yarn install
# or
npm install
```

### Available Scripts

In the project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

#### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Configuration

### Environment

Standard Create React App environment variable configuration applies. To customize, add `.env` files as needed.

### Netlify Setup

A `netlify.toml` file is included to configure custom headers for CORS:

```toml name=netlify.toml
[[headers]]
for = "/*"
[headers.values]
Access-Control-Allow-Origin = "*"
Access-Control-Allow-Methods = "GET, POST, PUT, DELETE, OPTIONS"
Access-Control-Allow-Headers = "Content-Type, Authorization, X-Requested-With"
```

### Deploying to Netlify

1. **Push your code to GitHub.**
2. **Log in to Netlify and create a new site from Git.**
3. **Connect your GitHub repository (`onlygarrett/web-portfolio2`).**
4. **Set the build command and publish directory:**
   - **Build command:** `yarn build` or `npm run build`
   - **Publish directory:** `build`
5. **Netlify will automatically detect the `netlify.toml` file and apply header settings.**

Whenever you push to your repository, Netlify will automatically build and deploy your site.

## Project Structure

```
web-portfolio2/
├── public/
│   └── index.html
├── src/
├── netlify.toml
├── package.json
└── README.md
```

- **public/index.html:** Main HTML document with social metadata and PWA config
- **src/**: React components and app logic
- **netlify.toml**: Netlify configuration for custom headers

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Netlify Docs](https://docs.netlify.com/)

---

© Garrett Rumschik
