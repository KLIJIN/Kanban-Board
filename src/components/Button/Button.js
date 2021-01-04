import React from 'react'
//import PropTypes from "prop-types";
import "./Button.scss"

const Button = ({children,  onAdd }) => {
     
    // const ClickHandler = () => {
    //    if (isEmptyPanel) {
    //      return    onAddCards(columnIndex, text)
    //      //return  console.log(onAddCards)
    //    }else {
    //       return   addColumn(text)
    //       //return console.log(addColumn)
    //    }
    //    setText(""),
    //    setShowForm(false)
    // }
   
    return(
        <button className="button"  onClick = {onAdd}   >
           {children}
        </button>
    );
}

// Button.propTypes  = {
//     children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
//   };

  export default Button;