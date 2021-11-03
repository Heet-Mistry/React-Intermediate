import React,{useState,useEffect} from 'react'

const List = ({getItems}) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log('New item added');
    }, [getItems]);

    return (<>{items.map(item=><div key={item} >{item}</div>)}</>)
}

export default List
