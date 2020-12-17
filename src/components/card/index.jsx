import React from 'react'
import "./card.scss"

const Card = ({text}) => {

    return(

        <div className="card">
            {text}
        </div>
    );
}


export default Card;


  // используем PropTypes что-бы установить тип пропсов
  Card.propTypes  = {
    text: PropTypes.number.isRequired
  };
