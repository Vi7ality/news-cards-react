# News Cards React

A modern, responsive React application for browsing and searching spaceflight news articles. The app features intelligent keyword filtering with priority-based sorting and keyword highlighting.

## Features

-   📰 **Article Browsing**: Browse spaceflight news articles in a beautiful card-based grid layout
-   🔍 **Advanced Search**: Filter articles by keywords with real-time search
-   🎯 **Smart Prioritization**: Articles with keyword matches in titles are prioritized over description matches
-   ✨ **Keyword Highlighting**: Matched keywords are highlighted in yellow for easy identification
-   📱 **Responsive Design**: Fully responsive layout that works on all device sizes
-   🖼️ **Image Placeholders**: Automatic fallback to placeholder images when article images fail to load
-   ⚡ **Fast Loading**: Optimized with RTK Query for efficient data fetching and caching
-   🎨 **Modern UI**: Built with Material-UI for a polished, professional interface

## Tech Stack

-   **React 19** - UI library
-   **TypeScript** - Type safety
-   **Vite** - Build tool and dev server
-   **Material-UI (MUI)** - UI component library
-   **Redux Toolkit** - State management
-   **RTK Query** - Data fetching and caching
-   **React Router** - Client-side routing
-   **React Loader Spinner** - Loading indicators

## Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd news-cards-react
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Build

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/              # Static assets (images, icons)
│   ├── icon_calendar.svg
│   └── placeholder.svg
├── components/          # Reusable components
│   ├── ArticleCard/     # Individual article card component
│   ├── ArticleGrid/    # Grid layout for articles
│   ├── Loader/         # Loading spinner component
│   └── Searchbar/      # Search input component
├── pages/              # Page components
│   ├── ArticlePage/    # Individual article detail page
│   └── HomePage/       # Main page with article grid
├── router/             # React Router configuration
│   └── Router.tsx
├── store/              # Redux store configuration
│   ├── index.ts        # Store setup
│   ├── searchSlice.ts  # Search state management
│   └── spaceApi.ts     # RTK Query API configuration
├── types/              # TypeScript type definitions
│   └── article/
├── utils/              # Utility functions
│   ├── formatDate.ts  # Date formatting utilities
│   └── keywordUtils.ts # Keyword matching and highlighting
├── App.tsx             # Root component
└── main.tsx            # Application entry point
```

## API

The app uses the [Spaceflight News API](https://api.spaceflightnewsapi.net/v4/) to fetch articles.

### Endpoints Used

-   `GET /articles/` - Fetch list of articles with optional search and pagination
-   `GET /articles/:id/` - Fetch individual article by ID

## Features in Detail

### Keyword Search

-   Enter keywords in the search field to filter articles
-   Articles containing at least one keyword in the title or description are displayed
-   **Priority System**: Articles with matches in the title appear before articles with matches only in the description
-   Matched keywords are highlighted in yellow (`#FFF176`) in both titles and descriptions

### Article Cards

-   Each card displays:
    -   Article image (with placeholder fallback)
    -   Publication date with calendar icon
    -   Article title (with keyword highlighting)
    -   Article description (with keyword highlighting)
    -   "Read more" link to full article page
-   Cards maintain consistent height with "Read more" always at the bottom

### Article Detail Page

-   Full article view with:
    -   Hero image with blur effect
    -   Article title
    -   Full article summary
    -   Back to homepage link

## Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## Browser Support

Modern browsers that support ES6+ features:

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## License

[Add your license here]

## Contributing

[Add contribution guidelines here if applicable]
