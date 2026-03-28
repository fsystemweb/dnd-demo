export default function InfoPanel() {
  return (
    <div className="demo-section info-panel">
      <div className="demo-header">
        <h2>📚 How to Use @dnd-kit</h2>
        <p>
          A quick guide to get started with{' '}
          <a href="https://dndkit.com" target="_blank" rel="noopener noreferrer">
            dnd-kit
          </a>{' '}
          — the modern drag & drop toolkit for the web.
        </p>
      </div>

      <div className="info-grid">
        {/* Installation */}
        <div className="info-card">
          <div className="info-card-header">
            <span className="info-icon">📦</span>
            <h3>Installation</h3>
          </div>
          <pre className="code-block">
            <code>npm install @dnd-kit/react</code>
          </pre>
          <p className="info-desc">
            This package includes React-specific hooks and components. It automatically pulls in
            core dependencies like <code>@dnd-kit/dom</code>, <code>@dnd-kit/abstract</code>, and{' '}
            <code>@dnd-kit/helpers</code>.
          </p>
        </div>

        {/* DragDropProvider */}
        <div className="info-card">
          <div className="info-card-header">
            <span className="info-icon">🎛️</span>
            <h3>DragDropProvider</h3>
          </div>
          <pre className="code-block">
            <code>{`import { DragDropProvider } from '@dnd-kit/react';

function App() {
  return (
    <DragDropProvider
      onDragEnd={(event) => {
        const { source, target } = event.operation;
        if (target) {
          console.log(\`Dropped \${source.id} on \${target.id}\`);
        }
      }}
    >
      {/* Your draggable content */}
    </DragDropProvider>
  );
}`}</code>
          </pre>
          <p className="info-desc">
            The context provider that enables drag & drop. Wrap your draggable/droppable elements
            with this component. It provides event callbacks like{' '}
            <code>onDragStart</code>, <code>onDragOver</code>, and <code>onDragEnd</code>.
          </p>
        </div>

        {/* useDraggable */}
        <div className="info-card">
          <div className="info-card-header">
            <span className="info-icon">✋</span>
            <h3>useDraggable</h3>
          </div>
          <pre className="code-block">
            <code>{`import { useDraggable } from '@dnd-kit/react';

function DraggableItem({ id }) {
  const { ref, isDragSource } = useDraggable({ id });

  return (
    <div ref={ref} style={{
      opacity: isDragSource ? 0.5 : 1
    }}>
      Drag me!
    </div>
  );
}`}</code>
          </pre>
          <p className="info-desc">
            Makes an element draggable. Returns a <code>ref</code> to attach to your element,
            plus state like <code>isDragSource</code> and <code>isDragging</code>.
          </p>
        </div>

        {/* useDroppable */}
        <div className="info-card">
          <div className="info-card-header">
            <span className="info-icon">🎯</span>
            <h3>useDroppable</h3>
          </div>
          <pre className="code-block">
            <code>{`import { useDroppable } from '@dnd-kit/react';

function DropZone({ id, children }) {
  const { ref, isDropTarget } = useDroppable({ id });

  return (
    <div ref={ref} style={{
      background: isDropTarget ? '#2d3436' : '#1a1a2e'
    }}>
      {children}
    </div>
  );
}`}</code>
          </pre>
          <p className="info-desc">
            Creates a drop target. Returns a <code>ref</code> and an <code>isDropTarget</code>{' '}
            boolean that's true when a draggable hovers over this zone.
          </p>
        </div>

        {/* useSortable */}
        <div className="info-card">
          <div className="info-card-header">
            <span className="info-icon">🔀</span>
            <h3>useSortable</h3>
          </div>
          <pre className="code-block">
            <code>{`import { useSortable } from '@dnd-kit/react/sortable';
import { move } from '@dnd-kit/helpers';

function SortableItem({ id, index }) {
  const { ref } = useSortable({ id, index });
  return <div ref={ref}>Item {id}</div>;
}

// In parent: use move() in onDragEnd
// setItems(items => move(items, source, target));`}</code>
          </pre>
          <p className="info-desc">
            Combines draggable + droppable for sortable lists. Requires both <code>id</code> and{' '}
            <code>index</code>. Use the <code>move</code> helper from <code>@dnd-kit/helpers</code>{' '}
            to reorder your state array.
          </p>
        </div>

        {/* Key concepts */}
        <div className="info-card full-width">
          <div className="info-card-header">
            <span className="info-icon">💡</span>
            <h3>Key Concepts</h3>
          </div>
          <div className="concepts-grid">
            <div className="concept">
              <h4>Sensors</h4>
              <p>Define input methods — pointer, mouse, touch, keyboard. Built-in sensors handle most cases automatically.</p>
            </div>
            <div className="concept">
              <h4>Modifiers</h4>
              <p>Restrict drag movement — lock to axis, constrain to parent, or apply custom boundaries.</p>
            </div>
            <div className="concept">
              <h4>Collision Detection</h4>
              <p>Determine which droppable a draggable is over. Customize the algorithm for complex layouts.</p>
            </div>
            <div className="concept">
              <h4>DragOverlay</h4>
              <p>Render a custom floating preview while dragging instead of moving the original element.</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="info-card full-width">
          <div className="info-card-header">
            <span className="info-icon">🔗</span>
            <h3>Resources</h3>
          </div>
          <div className="links-list">
            <a href="https://dndkit.com" target="_blank" rel="noopener noreferrer">
              📖 Official Documentation
            </a>
            <a href="https://github.com/clauderic/dnd-kit" target="_blank" rel="noopener noreferrer">
              🐙 GitHub Repository
            </a>
            <a href="https://dndkit.com/react/quickstart" target="_blank" rel="noopener noreferrer">
              🚀 React Quickstart Guide
            </a>
            <a href="https://dndkit.com/react/hooks/use-sortable" target="_blank" rel="noopener noreferrer">
              🔀 useSortable API Reference
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
