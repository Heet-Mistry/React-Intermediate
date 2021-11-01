import React,{useState} from 'react'
import List from './List'

const App_useCallback = () => {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = () =>{
        return [number,number+1,number+2]
    }

    const theme ={
        backgroundColor :dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={()=>setDark(x => !x)}>
                Toggle Theme
            </button>
            <List getItems={getItems}></List>
        </div>
        
    )
}

export default App_useCallback
