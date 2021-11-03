import React,{useState,useMemo} from 'react'

const App_useMemo = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    },[number])
    
    const themeStyles ={
        backgroundColor : dark ? 'yellow' : 'green',
        color : dark ? 'green' : 'yellow'    
    }
    return (
        <div>
            <input type="number"  value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(x=>!x)} >Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num){
    console.log('Calling the slow function');
    for( let i = 0; i <=900000000;i++){}
    return num*2
}

export default App_useMemo