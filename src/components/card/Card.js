import React from 'react'
import {Draggable} from "react-beautiful-dnd"

const Card = ({children,  cardIndex, columnIndex}) => {
    return(
        <Draggable index={cardIndex} draggableId={`${columnIndex}-${cardIndex}`} >
           {(provided, snapshot) => (
        <div
          className={`Card ${snapshot.isDragging && "dragging"}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
         </Draggable>
    )
}

export default Card;
