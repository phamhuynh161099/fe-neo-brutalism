import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: { id: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="p-2 border mt-2">
      {props.children}
    </div>
  );
}
