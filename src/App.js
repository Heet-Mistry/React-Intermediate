import React,{useState,useEffect} from 'react';

function App() {

  const [resourceType,setResourceType] = useState('Posts')
  const [userType,setUserType] = useState('Heet')
  useEffect(() => {
    console.log('Render');
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
      <h2>{userType}</h2>
     </>
  );
}

export default App;
