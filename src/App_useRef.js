import React,{useState,useRef,useEffect} from 'react'

function App_useRef() {

    const [name, setName] = useState('')
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current++ ;
    });
    return (
      <>
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>The page is rendered {renderCount.current}</div>
        </div>
      </>
    )   
}

export default App_useRef
