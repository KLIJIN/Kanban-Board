import React, { useState, useRef, useEffect} from 'react'
import Button from "../Button/Button"
import addSvg from "../../assets/add.svg"
import clearSvg from "../../assets/clear.svg"

const AddForm = ({columnIndex, isEmptyPanel, addColumn, onAddCards}) => {//нижняя панель списка задач
    const [showForm, setShowForm] = useState(false); //переключаем кнопки
    const [text, setText]  = useState("");
    const textareaRef = useRef(); //наводим фокус на тест/инпут

    useEffect( () => {
       textareaRef.current && textareaRef.current.focus()
      }, [showForm])

      const onAdd = () => {
        if (isEmptyPanel) {
            onAddCards(columnIndex, text);
        } else {
            addColumn(text);
        }
        setText("")
        setShowForm(false)
      };
    return (
        <section>
            {showForm 
            ? 
            (<div className= 'add-form'>
                <div className= 'add-form__input'   > 
                    <textarea ref={textareaRef}  rows="3" onChange={ e => setText(e.target.value)} value={text}
                            placeholder={ isEmptyPanel? "Введите название карточки": "Введите название колонки"}  >
                    </textarea>   
                    
                    <div className= 'add-form__button' >
                        <Button onAdd={onAdd} >
                            {isEmptyPanel? "Добавить карточку": " Добавить колонку"} 
                        </Button>
                        <img src={clearSvg} alt="clear svg icon" className= 'add-form__button-clear'onClick={setShowForm.bind(this, false)}                         /> 
                    </div>

                </div>
            </div> )
            :
            ( <div className="panel__buttom"  //кнопка добавить еще карточку
                 onClick={setShowForm.bind(this, true)} >
                <div className="panel__buttom-add-btn" >
                    <img  src={addSvg} alt="add svg icon"/> 
                    <span    >   { isEmptyPanel? " Добавить еще карточку": " Добавить еще колонку"}  </span>
                </div>
               </div> 
            )}
        </section>
    );
}
  export default AddForm;