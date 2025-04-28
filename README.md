# SolBlaze

A modern web application built with React, TypeScript, and Vite, featuring a beautiful UI powered by Tailwind CSS and Tremor components.


## 📦 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Docker and Docker Compose (optional, for containerized deployment)

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

## 📝 License

[Add your license information here]

## 👥 Contributing

[Add contribution guidelines here] 