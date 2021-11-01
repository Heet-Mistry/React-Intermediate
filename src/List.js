import React from 'react'

const List = ({getItems}) => {
    return (
        <div>
            {getItems.map(item => <div>{item}</div> )}
        </div>
    )
}

export default List
