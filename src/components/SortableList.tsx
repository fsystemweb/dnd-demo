import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import { move } from '@dnd-kit/helpers';

interface Item {
  id: string;
  label: string;
  emoji: string;
}

const INITIAL_ITEMS: Item[] = [
  { id: '1', label: 'Learn React', emoji: '⚛️' },
  { id: '2', label: 'Build a project', emoji: '🏗️' },
  { id: '3', label: 'Write tests', emoji: '🧪' },
  { id: '4', label: 'Deploy to production', emoji: '🚀' },
  { id: '5', label: 'Celebrate!', emoji: '🎉' },
  { id: '6', label: 'Monitor performance', emoji: '📊' },
];

function SortableItem({ item, index }: { item: Item; index: number }) {
  const { ref, isDragSource } = useSortable({
    id: item.id,
    index,
  });

  return (
    <div
      ref={ref}
      className={`sortable-item ${isDragSource ? 'dragging' : ''}`}
    >
      <span className="drag-handle">⠿</span>
      <span className="item-emoji">{item.emoji}</span>
      <span className="item-label">{item.label}</span>
      <span className="item-index">#{index + 1}</span>
    </div>
  );
}

export default function SortableList() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);

  return (
    <div className="demo-section">
      <div className="demo-header">
        <h2>📋 Sortable List</h2>
        <p>Drag items to reorder them. The list updates in real-time with smooth animations.</p>
      </div>

      <div className="sortable-container">
        <DragDropProvider
          onDragEnd={(event) => {
            const { operation } = event;
            if (event.canceled) return;

            setItems((currentItems) =>
              move(currentItems, operation.source!, operation.target!)
            );
          }}
        >
          {items.map((item, index) => (
            <SortableItem key={item.id} item={item} index={index} />
          ))}
        </DragDropProvider>
      </div>

      <div className="demo-code-hint">
        <code>useSortable</code> + <code>move()</code> helper from <code>@dnd-kit/helpers</code>
      </div>
    </div>
  );
}
