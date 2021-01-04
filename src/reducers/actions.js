 
  export let addColumn =  (name) => {
    return (
        {
            type: "COLUMNS:ADD",
            payload: name
        }
    )
}
    export let removeColumn =  (index) => (
        {
            type: "COLUMNS:REMOVE",
            payload: index
        }
    )

    export let addCard =  (columnIndex, text) => (
        {
            type: "CARDS:ADD",
            payload: {
                columnIndex,
                text
            }
        }
    )

    export let reorderCardsDel = ({ source, destination }) => ({
        type: "CARDS:MOVE",
        payload: {
          source,
          destination
        }
      })
