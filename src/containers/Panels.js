import React from "react";
import {connect} from "react-redux";  //The connect() function connects a React component to a Redux store.
import Panel from "../components/Panel/Panel.js"
import {DragDropContext} from "react-beautiful-dnd"
import {addColumn, addCard, removeColumn, reorderCardsDel} from "../reducers/actions.js"

const Panels = ({Columns, addColumn, addCard, removeColumn, reorderCardsDel}) => {

  const handleDragEnd = ({source, destination}) => {
      console.log("from откудава", source)
      console.log("to направленье", destination)
    if (!destination) {
      return
    }
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }
    reorderCardsDel({ source, destination });
  }

    return (
      <DragDropContext onDragEnd={ handleDragEnd } >
          <section className="panels__container">
                  {Columns.map( (item, index) => {
                      return (
                              <Panel key={index} {...item} columnIndex={index} addColumn={addColumn} AddCards={addCard}  removeColumn={removeColumn} /> 
                      )
                  })}
              <Panel addColumn={addColumn} AddCards={addCard}  removeColumn={removeColumn} /> 
          </section>
        </DragDropContext>
    )
}

function mapStateToProps(state) {
    console.log("App__Panels_mapStateToProps", state)
    return {
        Columns: state.Column
    }
  }

    const mapDispatchToProps = dispatch => ({
        addColumn: (name) => {
            dispatch(  addColumn(name)  )
          },

        removeColumn: (index) => {
            dispatch( removeColumn(index)  )
          },
        
        addCard: (columnIndex, text) => {
            dispatch(  addCard(columnIndex, text)   )
          },

        reorderCardsDel: ({ source, destination }) => {
            dispatch(  reorderCardsDel({ source, destination })   )
          },
    })

  export default connect (mapStateToProps, mapDispatchToProps) (Panels); 
