# SolBlaze

A modern web application built with React, TypeScript, and Vite, featuring a beautiful UI powered by Tailwind CSS and Tremor components. The dashboard includes AI assistance powered by Google's Gemini 2.0 Flash model.

## 🌟 Features

- **Modern Analytics Dashboard**: Visualize Solana liquid staking data with interactive charts and metrics
- **AI Assistant**: Get insights and answers about Solana blockchain using Gemini 2.0 Flash AI
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Social Integrations**: Connect with us via GitHub, Twitter, and LinkedIn

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Docker and Docker Compose (optional, for containerized deployment)
- Gemini API key (for AI assistant functionality)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
git clone [repository-url]
cd SolBlaze
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
- Create a `.env` file in the root directory
- Add your Gemini API key:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

### Docker Deployment

#### Using Docker Compose (Recommended)

1. Start the application:
```bash
docker-compose up -d
```

2. Stop the application:
```bash
docker-compose down
```

#### Using Docker Directly

1. Build the Docker image:
```bash
docker build -t solblaze .
```

2. Run the container:
```bash
docker run -p 3000:3000 solblaze
```

The application will be available at `http://localhost:3000`

## 🚀 Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173`

## 🏗️ Building for Production

### Local Build

To create a production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

### Docker Build

The Dockerfile includes a multi-stage build process that:
1. Builds the application
2. Creates an optimized production image
3. Serves the application using a lightweight static server

The docker-compose.yml file provides additional features:
- Automatic container restart
- Health checks
- Environment variable configuration
- Simplified deployment process

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
│   └── AIAssistant/ # AI assistant components
├── services/      # Service integrations (Gemini AI, etc.)
├── views/         # Page components
├── data/          # Data and configuration
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## 🧹 Code Quality

Run the linter to check code quality:

```bash
npm run lint
# or
yarn lint
```

## 🔗 Connect With Us

- GitHub: [https://github.com/kiralightyagami/SolBlaze](https://github.com/kiralightyagami/SolBlaze)
- Twitter: [https://x.com/ShrivasAsvin](https://x.com/ShrivasAsvin)
- LinkedIn: [https://www.linkedin.com/in/asvin-shrivas/](https://www.linkedin.com/in/asvin-shrivas/)

## 📝 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here] 