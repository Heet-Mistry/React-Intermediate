import React,{useState,useEffect} from 'react'

function App_useRef() {

    const [name, setName] = useState('')
    const [render, setRender] = useState(0)

    useEffect(() => {
        setRender(x=>x+1)
    });

    return (
      <>
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>The page is rendered {render}</div>
        </div>
      </>
    )   
}

export default App_useRef
