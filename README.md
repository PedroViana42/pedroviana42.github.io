# Pedro Augusto | AI Architect Portfolio

A high-performance, modular portfolio website built with modern web technologies. This project showcases my expertise as an AI Architect and Data Engineer, emphasizing practical, end-to-end solutions.

## 🚀 Technologies

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions)

## ✨ Features

- **Modular Architecture**: Fully componentized structure for easy maintenance.
- **Dynamic Projects**: Data-driven project showcase with real-time metrics and GitHub integration.
- **Interactive UI**: Smooth scrolling, micro-animations, and a typing hero effect.
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop.
- **CI/CD**: Automated deployment to GitHub Pages.

## 📁 Project Structure

```text
├── .github/workflows/    # CI/CD deployment logic
├── public/               # Static assets (Favicon, Resume)
├── src/
│   ├── components/      # Modular UI components (Nav, Hero, Sections)
│   ├── constants/       # Static data (Project details, Skills)
│   ├── types/           # TypeScript interfaces
│   ├── App.tsx          # Main entry point
│   └── main.tsx         # React DOM rendering
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PedroViana42/pedroviana42.github.io.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

### Build

Build the production-ready application:

```bash
npm run build
```

## 🚢 Deployment

The project is configured to deploy automatically to **GitHub Pages** via GitHub Actions.

1. Push your changes to the `main` branch.
2. Ensure **GitHub Actions** is selected as the deployment source in the repository settings (`Settings > Pages > Build and deployment > Source`).
3. View the live site at [pedroviana42.github.io](https://pedroviana42.github.io/).

---
Developed by **Pedro Augusto**
