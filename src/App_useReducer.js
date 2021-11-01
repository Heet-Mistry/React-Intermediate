// eslint-disable-next-line no-unused-vars
import React,{useState,useReducer} from 'react'
import Todo from './Todo'

const ACTIONS = {
    ADD_TODO :'add-todo',
    TOGGLE_TODOS : 'toggle-todos',
}

function reducer (todos , action){

    // eslint-disable-next-line default-case
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newtodo(action.payload.name)]
    }
}

function newtodo(name){
    return { id :Date.now() , name :name, complete:false }
}

const App_useReducer = () => {

    // eslint-disable-next-line no-unused-vars
    const [todos , dispatch] = useReducer(reducer , [] ) 
    const [name, setName] = useState('')

    function handleSubmit (e) {
       e.preventDefault()
       dispatch({type : ACTIONS.ADD_TODO , payload : {name :name }})
       setName('')
    }

    console.log(todos);

    return (
        <>
           <form onSubmit={handleSubmit}>
               <input type="text" value={name} onChange={e => setName(e.target.value)} />
           </form>
           {todos.map(todo =>{
                return <Todo key={todo.id} todo={todo} />
           })}
        </>
    )
}

export default App_useReducer
