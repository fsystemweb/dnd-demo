import { useState } from 'react';
import SortableList from './components/SortableList';
import DragAndDrop from './components/DragAndDrop';
import InfoPanel from './components/InfoPanel';
import './App.css';

type Tab = 'sortable' | 'dnd' | 'info';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'sortable', label: 'Sortable List', icon: '📋' },
  { id: 'dnd', label: 'Drag & Drop', icon: '🎯' },
  { id: 'info', label: 'How to Use', icon: '📚' },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('sortable');

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🧲</span>
            <h1>dnd-kit <span className="highlight">React Demo</span></h1>
          </div>
          <p className="subtitle">
            A modern, lightweight, performant drag & drop toolkit
          </p>
        </div>
      </header>

      <nav className="tab-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === 'sortable' && <SortableList />}
        {activeTab === 'dnd' && <DragAndDrop />}
        {activeTab === 'info' && <InfoPanel />}
      </main>

      <footer className="app-footer">
        <p>
          Built with{' '}
          <a href="https://dndkit.com" target="_blank" rel="noopener noreferrer">
            @dnd-kit/react
          </a>{' '}
          ·{' '}
          <a href="https://github.com/clauderic/dnd-kit" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
