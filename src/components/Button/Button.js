import React from 'react'

const Button = ({children,  onAdd }) => {
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