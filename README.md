# Cloudflare Vision Presenter

A visually stunning, single-page presentation landing page to introduce the core themes of Cloudflare's developer platform.

[cloudflarebutton]

## About The Project

This project is a visually striking, minimalist, single-page web application designed as a presentation aid for a demo on Cloudflare's developer platform. The page features a prominent hero section with an engaging headline and a subtle, animated gradient background.

Below the fold, three distinct sections elegantly showcase the core themes:
1.  The “Region-less” Region Earth Platform
2.  The Consolidated Toolchain
3.  The Opinionated Architecture

Each theme is presented in a clean card layout, combining a relevant icon, a bold title, and a concise description. The design emphasizes clarity, sophistication, and modernity, using a refined color palette, generous whitespace, and smooth, subtle animations to guide the viewer's attention.

### Key Features

*   **Modern & Minimalist UI:** A clean, professional design focused on readability and visual appeal.
*   **Engaging Hero Section:** A full-screen hero with an animated gradient background to capture attention.
*   **Elegant Content Cards:** Beautifully designed cards for presenting key themes, powered by shadcn/ui.
*   **Subtle Animations:** Smooth, non-distracting animations using Framer Motion to enhance user experience.
*   **Fully Responsive:** Flawless layout and performance across all device sizes, from mobile to large desktops.
*   **Optimized for Performance:** Built with Vite for a fast development experience and optimized production builds.

## Technology Stack

This project is built with a modern, high-performance tech stack:

*   **Framework:** [React](https://react.dev/)
*   **Bundler:** [Vite](https://vitejs.dev/)
*   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Worker Routing:** [Hono](https://hono.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/cloudflare-vision-presenter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd cloudflare-vision-presenter
    ```
3.  Install dependencies:
    ```sh
    bun install
    ```

## Development

To run the application in development mode with hot-reloading:

```sh
bun run dev
```

This will start the Vite development server, typically available at `http://localhost:3000`.

## Building for Production

To create a production-ready build of the application:

```sh
bun run build
```

This command bundles the React application and prepares the Cloudflare Worker for deployment. The output will be in the `dist` directory.

## Deployment

This project is configured for seamless deployment to the Cloudflare global network using Wrangler.

### One-Click Deploy

You can deploy this project to your own Cloudflare account with a single click.

[cloudflarebutton]

### Manual Deployment via CLI

1.  Ensure you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated with your Cloudflare account.
2.  Run the deployment command:
    ```sh
    bun run deploy
    ```

This will build and deploy your application, making it available on a `*.workers.dev` subdomain or your configured custom domain.