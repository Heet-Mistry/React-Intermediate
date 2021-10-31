import React,{useState,useRef,useEffect} from 'react'

function App_useRef() {

    const [name, setName] = useState('')
    const prevName = useRef()

    useEffect(() => {

      prevName.current= name;

    }, [name]);

    return (
      <>
        <div>
            <input value={name} onChange={e=>setName(e.target.value)} />
            <div>My name is {name} and it used to be {prevName.current}</div>
        </div>
      </>
    )   
}

export default App_useRef
