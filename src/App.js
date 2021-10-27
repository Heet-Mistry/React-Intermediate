import React,{useState,useEffect} from 'react';

function App() {

  const [resourceType,setResourceType] = useState('Posts')
  const [userType,setUserType] = useState('Heet')
  const [items,setItems] = useState([])
  console.log('Rendered the app');

  useEffect(() => {
   
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))

  },[resourceType]);

  return (
     <>
      <div>
          <button onClick={()=>setResourceType('Posts')}>Posts</button>
          <button onClick={()=>setResourceType('Users')}>Users</button>
          <button onClick={()=>setResourceType('Comments')}>Comments</button>
      </div>

      <h1>{resourceType}</h1>

      <div>
          <button onClick={()=>setUserType('Heet')}>Heet</button>
          <button onClick={()=>setUserType('Pearl')}>Pearl</button>
          <button onClick={()=>setUserType('Gokul')}>Gokul</button>
      </div>
      <h1>{userType}</h1>

      <h1>{items.map(item => (  <pre> {JSON.stringify(item)} </pre>)  )}</h1>
     </>
  );
}

export default App;
