import { ReactNode } from "react";

interface MasonryGridProps {
  children: ReactNode[];
  columns?: number;
  gap?: number;
  className?: string;
}

const MasonryGrid = ({
  children,
  columns = 3,
  gap = 24,
  className = ""
}: MasonryGridProps) => {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
        alignItems: 'stretch'
      }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 h-full"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
