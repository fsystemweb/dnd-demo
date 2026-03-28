import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { useDraggable } from '@dnd-kit/react';
import { useDroppable } from '@dnd-kit/react';

interface DraggableCard {
  id: string;
  label: string;
  color: string;
}

const CARDS: DraggableCard[] = [
  { id: 'card-1', label: '🎨 Design', color: '#e74c8b' },
  { id: 'card-2', label: '💻 Develop', color: '#6c5ce7' },
  { id: 'card-3', label: '🧪 Test', color: '#00b894' },
  { id: 'card-4', label: '🚀 Deploy', color: '#fdcb6e' },
];

const DROP_ZONES = [
  { id: 'todo', label: 'To Do', icon: '📝' },
  { id: 'in-progress', label: 'In Progress', icon: '⚡' },
  { id: 'done', label: 'Done', icon: '✅' },
];

function DraggableItem({ card }: { card: DraggableCard }) {
  const { ref, isDragSource } = useDraggable({
    id: card.id,
  });

  return (
    <div
      ref={ref}
      className={`draggable-card ${isDragSource ? 'dragging' : ''}`}
      style={{ '--card-color': card.color } as React.CSSProperties}
    >
      {card.label}
    </div>
  );
}

function DroppableZone({
  id,
  label,
  icon,
  children,
  isOver,
}: {
  id: string;
  label: string;
  icon: string;
  children: React.ReactNode;
  isOver: boolean;
}) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div
      ref={ref}
      className={`droppable-zone ${isOver ? 'over' : ''}`}
    >
      <div className="zone-header">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="zone-content">
        {children}
      </div>
    </div>
  );
}

export default function DragAndDrop() {
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [activeTargetId, setActiveTargetId] = useState<string | null>(null);

  const unplacedCards = CARDS.filter((card) => !placements[card.id]);

  const getCardsInZone = (zoneId: string) =>
    CARDS.filter((card) => placements[card.id] === zoneId);

  const handleReset = () => {
    setPlacements({});
  };

  return (
    <div className="demo-section">
      <div className="demo-header">
        <h2>🎯 Drag & Drop</h2>
        <p>Drag cards from the pool into any drop zone. Drop zones highlight when a card is hovering over them.</p>
        <button className="reset-btn" onClick={handleReset}>
          ↺ Reset
        </button>
      </div>

      <DragDropProvider
        onDragOver={(event) => {
          const target = event.operation.target;
          setActiveTargetId(target?.id?.toString() ?? null);
        }}
        onDragEnd={(event) => {
          setActiveTargetId(null);
          if (event.canceled) return;

          const { source, target } = event.operation;
          if (source && target) {
            const targetId = target.id.toString();
            const isDropZone = DROP_ZONES.some((z) => z.id === targetId);
            if (isDropZone) {
              setPlacements((prev) => ({
                ...prev,
                [source.id]: targetId,
              }));
            }
          }
        }}
      >
        <div className="card-pool">
          <h3>Card Pool</h3>
          <div className="pool-cards">
            {unplacedCards.length > 0 ? (
              unplacedCards.map((card) => (
                <DraggableItem key={card.id} card={card} />
              ))
            ) : (
              <div className="empty-pool">All cards placed! 🎉</div>
            )}
          </div>
        </div>

        <div className="drop-zones">
          {DROP_ZONES.map((zone) => (
            <DroppableZone
              key={zone.id}
              id={zone.id}
              label={zone.label}
              icon={zone.icon}
              isOver={activeTargetId === zone.id}
            >
              {getCardsInZone(zone.id).map((card) => (
                <DraggableItem key={card.id} card={card} />
              ))}
            </DroppableZone>
          ))}
        </div>
      </DragDropProvider>

      <div className="demo-code-hint">
        <code>useDraggable</code> + <code>useDroppable</code> + <code>onDragEnd</code> event
      </div>
    </div>
  );
}
