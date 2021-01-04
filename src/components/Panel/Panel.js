import React from 'react'
import Card from "../card/Card"
import { Droppable} from "react-beautiful-dnd"
import AddForm from "../AddForm/AddForm"
import clearSvg from "../../assets/clear.svg";
import "./Panel.scss"

//компонентная панель отрисовывает ЗАГОЛОВКИ И КАРТОЧКИ
const Panel = (  {columnIndex, title, cards, addColumn, AddCards, removeColumn} ) => {

    return (
        <div className= {`panel${!cards ? " panel--empty":"" }`}>
                <div className="panel__title" >  
                    <b> {title} </b>
                    { cards && <div className="column__remove" onClick={ () => removeColumn(columnIndex) } > 
                            <img src={clearSvg} alt="Clear svg icon" />
                    </div> }
                </div>
            
                <Droppable droppableId={`${columnIndex}`} key={columnIndex}  >
                    { (provided) => {
                        return(
                                <div className="pandel__items" {...provided.droppableProps}
                                ref={provided.innerRef}  >
                                    {cards &&
                                        cards.map( (card, index) => {
                                            //console.log("Panel_pandel__items",card)
                                            return (
                                                    <Card key={index} cardIndex={index} columnIndex={columnIndex} >
                                                        {card} 
                                                    </Card>
                                                    ) 
                                            })
                                    }
                                    {provided.placeholder}
                                </div>
                        )
                        }
                    }
                </Droppable> 

                <AddForm isEmptyPanel={cards} addColumn={addColumn} onAddCards={AddCards} columnIndex={columnIndex} />
        </div>
  ) 
}

  export default Panel;