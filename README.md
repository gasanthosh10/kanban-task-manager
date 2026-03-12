# Kanban Task Manager

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A sleek, fully-featured Kanban board built with React + TypeScript — manage your tasks with drag-and-drop, priority labels, and persistent local storage.**

[Features](#-features) • [Demo](#-demo) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## Demo

> A modern, dark-themed Kanban board with three columns — **Todo**, **In Progress**, and **Done** — enabling teams and individuals to visualize and manage their workflow effortlessly.

---

## Features

| Feature | Description |
|---|---|
| **Three-Column Board** | Organize tasks across **Todo**, **In Progress**, and **Done** |
| **Drag & Drop** | Seamlessly reorder and move tasks between columns |
| **Priority Labels** | Tag each task as **High**, **Medium**, or **Low** priority |
| **Live Search** | Filter tasks instantly across all columns as you type |
| **Edit Tasks** | Update task titles inline at any time |
| **Delete Tasks** | Remove tasks with a single click |
| **Persistent Storage** | Tasks are saved to `localStorage` — survive page refreshes |
| **Fully Responsive** | Optimized for desktop, tablet, and mobile screens |
| **Modern UI** | Gradient backgrounds, hover effects, and smooth transitions |

---

##  Getting Started

### Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` *(or use `pnpm` / `yarn`)*

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/kanban-board.git

# 2. Navigate into the project directory
cd kanban-board

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** by default.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server with HMR |
| `npm run build` | Compile TypeScript and bundle for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

##  Tech Stack

### Core

- **[React 19](https://react.dev/)** — UI rendering with hooks (`useState`, `useEffect`)
- **[TypeScript 5.9](https://www.typescriptlang.org/)** — Static typing with strict mode enabled
- **[Vite 7](https://vitejs.dev/)** — Lightning-fast build tool with HMR via SWC

### Libraries

- **[@hello-pangea/dnd](https://github.com/hello-pangea/dnd)** — Accessible, performant drag-and-drop for React

### Styling

- Pure **CSS** with custom properties, gradients, and media queries
- Responsive breakpoints at `480px`, `768px`, `900px`, and `1024px`

### Tooling

- **ESLint 9** with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins
- **TypeScript** in strict mode with `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`

---

## Component Overview

### `Board.tsx`
The heart of the application. Manages all state and business logic:
- **Task CRUD** — add, edit, delete tasks across columns
- **Drag & Drop** — handles `onDragEnd` via `DragDropContext` from `@hello-pangea/dnd`
- **Search** — filters rendered tasks without mutating state
- **Persistence** — reads from `localStorage` on mount; writes on every state change

### `Column.tsx`
A presentational wrapper for each Kanban column. Accepts a `Droppable` context and renders a list of `TaskCard` components.

### `TaskCard.tsx`
Renders an individual task card as a `Draggable` element. Displays:
- Task **title** and **description**
- Color-coded **priority badge** (High / Medium / Low)
- **Edit** and **Delete** action buttons

---

## Responsive Design

The board adapts gracefully across all screen sizes:

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Three-column horizontal layout |
| `768px – 1024px` | Two-column wrapped layout |
| `< 768px` | Single-column stacked layout |
| `< 480px` | Compact input and full-width buttons |

---

## Roadmap

Planned improvements for future versions:

- [ ] **Due Dates** — assign and display deadlines on task cards
- [ ] **Subtasks** — break down tasks into smaller checklist items
- [ ] **Dark / Light Theme Toggle** — user-selectable color scheme
- [ ] **Cloud Sync** — backend integration (e.g., Firebase or Supabase)
- [ ] **Multi-user Support** — real-time collaboration via WebSockets
- [ ] **Export to CSV / JSON** — download your board data
- [ ] **Animations** — enhanced card transitions with Framer Motion

---

## Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork the repository, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
# Open a Pull Request
```

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

<div align="center">

Made with using React + TypeScript + Vite

</div>
