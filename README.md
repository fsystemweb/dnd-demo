# 🎨 dnd-kit Demo Explorer

A modern, interactive laboratory for exploring **dnd-kit**, the modular and lightweight drag-and-drop toolkit for React. This demo serves as both a functional playground and an educational resource for mastering complex drag-and-drop interactions.

![dnd-kit Demo Screenshot](src/assets/hero.png)

## 🚀 Overview

This application showcases the power and flexibility of `@dnd-kit`. It's designed to help developers understand how to implement professional-grade drag-and-drop experiences with minimal effort and maximum accessibility.

### Key Features
- **🔄 Sortable Lists**: Implementation of vertically sortable items using `@dnd-kit/sortable`.
- **🎯 Drag-to-Drop Zones**: Advanced drop zone logic using `useDraggable` and `useDroppable`.
- **📖 Integrated Doc Panel**: Real-time documentation and code snippets explaining the hooks used in each interaction.
- **♿ Accessibility**: Built-in support for keyboard navigation and screen readers, leveraging dnd-kit's core strengths.
- **✨ Premium UI**: A polished, responsive interface built with modern CSS and fluid animations.

## 🛠️ Tech Stack
- **React 19** - For the UI foundation.
- **TypeScript** - For type safety and better developer experience.
- **Vite** - For lightning-fast development and bundling.
- **dnd-kit** - The star of the show (`core`, `sortable`, `modifiers`, `utilities`).
- **Vanilla CSS** - Custom styles for a unique and performant Look & Feel.

## 🎓 Learning Objectives
Explore the following hooks and concepts within the codebase:
- `useDraggable`: Making any component draggable.
- `useDroppable`: Creating target zones for draggable items.
- `useSortable`: Handling list reordering with ease.
- `DndContext`: Managing the global state of drag interactions.
- `DragOverlay`: Providing smooth, phantom-like previews during dragging.

## 🏃 Getting Started

### 1. Clone & Install
```bash
# Install dependencies
npm install
```

### 2. Run Locally
```bash
# Start the development server
npm run dev
```

### 3. Build for Production
```bash
# Create a production-ready bundle
npm run build
```

## 📜 License
MIT
