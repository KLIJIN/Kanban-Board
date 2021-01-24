//стейт представляет собой массив панелей (объектов) в которых есть тайтл и массив карт. 
//РЕДЬЮСЕР
const initialState =[
        {
            title: "План на месяц",
            cards: [
               "Достроить дом",
               "Найти работу",
               "Выучить английский",
               "Сесть на шпагат"
              ]
        },
        {
            title: "План на день",
            cards: [
               "Выучить реакт",
               "Заяняться спортом",
               "Собрать шкаф"]
        }
];

 const Columns = (state = initialState, action) => {
   //debugger;
  let removed = ""
    switch(action.type){
        case "CARDS:ADD":
            return state.map((item, index) => {
              if (action.payload.columnIndex === index) {
                return {
                  ...item,
                  cards: [...item.cards, action.payload.text]
                };
              }
              return item;
            });

        case "COLUMNS:ADD":
            return [
                ...state,
                {
                  title: action.payload,
                  cards: []
                }
              ];
        case "COLUMNS:REMOVE":
            return state.filter((_, index) => action.payload !== index);
        case "CARDS:MOVE": 
            return state.map((item, index) => {
              if (String(index) === action.payload.source.droppableId) {
                let cardsCopy = [...item.cards]
                removed = cardsCopy.splice(action.payload.source.index, 1)[0]; //вырезали нужный элемент
                item.cards = [...cardsCopy]  //вернули в айтем массив с вырезанным элементом

                let TargetColumn = Number(action.payload.destination.droppableId) //место для записи в ДнД жестко закодированно
                state[TargetColumn].cards.splice(action.payload.destination.index, 0, removed) 
                
                return item
              }

              return item;
            });
        default:
            return state;
    }
}

export default Columns;